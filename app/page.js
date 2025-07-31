"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Globe, Gamepad2, Code, Server } from 'lucide-react';

export default function Home() {
  const [globedCount, setGlobedCount] = useState(null);
  const [globedStatus, setGlobedStatus] = useState('로딩 중...');
  const [globedPing, setGlobedPing] = useState(null);
  const [smpCount, setSmpCount] = useState(null);
  const [smpStatus, setSmpStatus] = useState('로딩 중...');
  const [smpPing, setSmpPing] = useState(null);

  useEffect(() => {
    fetch('/api/ping-globed')
      .then((res) => res.json())
      .then((data) => {
        if (data.alive) setGlobedPing(data.time);
      });

    fetch('http://118.44.109.38/public/players?period=minute')
      .then((res) => {
        if (!res.ok) throw new Error('응답 오류');
        return res.json();
      })
      .then((data) => {
        const arr = data.data;
        const latest = arr[arr.length - 1];
        if (latest && typeof latest.count === 'number') {
          setGlobedCount(latest.count);
          setGlobedStatus('온라인');
        } else {
          setGlobedStatus('데이터 없음');
        }
      })
      .catch(() => {
        setGlobedStatus('오프라인 또는 응답 없음');
      });

    fetch('/api/ping-smp')
      .then((res) => res.json())
      .then((data) => {
        if (data.alive) setSmpPing(data.time);
      });

    fetch('https://api.mcsrvstat.us/2/smp.lyw.kr')
      .then((res) => {
        if (!res.ok) throw new Error('응답 오류');
        return res.json();
      })
      .then((data) => {
        if (data.players && typeof data.players.online === 'number') {
          setSmpCount(data.players.online);
          setSmpStatus(data.online ? '온라인' : '오프라인');
        } else {
          setSmpStatus('데이터 없음');
        }
      })
      .catch(() => {
        setSmpStatus('오프라인 또는 응답 없음');
      });
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/profile.png"
          alt="연우 로고"
          width={120}
          height={120}
        />
        <h1 className={styles.title}>이연우</h1>
        <p className={styles.subtitle}>개발자 · 서버 관리자</p>

        <section className={`${styles.section} ${styles.serverSection}`}>
          <h2 className={styles.sectionTitle}>
            <Server size={20} />
            운영 중인 서버
          </h2>

          <div className={styles.linkBox}>
            <span className={styles.label}>마인크래프트 SMP 서버</span>
            <code className={styles.address}>smp.lyw.kr</code>
            <p className={styles.description}>그냥평범한생야생</p>
            <p className={`${styles.status} ${smpStatus === '온라인' ? styles.online : styles.offline}`}>
              상태: {smpStatus}
              {smpCount !== null && ` (접속자: ${smpCount}명)`}
              {smpPing !== null && ` (핑: ${smpPing}ms)`}
            </p>
          </div>

          <div className={styles.linkBox}>
            <span className={styles.label}>Globed Korea 서버</span>
            <code className={styles.address}>http://gd.globedkoreaserver.shop</code>
            <a href="https://globedkoreaserver.shop" className={styles.address} target="_blank" rel="noopener noreferrer">
              [웹사이트] (필독)
            </a>
            <p className={styles.description}>유일한 globed한국서버</p>
            <p className={`${styles.status} ${globedStatus === '온라인' ? styles.online : styles.offline}`}>
              상태: {globedStatus}
              {globedCount !== null && ` (접속자: ${globedCount}명)`}
              {globedPing !== null && ` (핑: ${globedPing}ms)`}
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.infoSection}`}>
          <h2 className={styles.sectionTitle}>
            <Code size={20} /><Gamepad2 size={20}/>
            기술 스택 및 게임
          </h2>
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>기술 스택</h3>
            <ul className={styles.techList}>
              <li>Next.js, React.js</li>
              <li>JavaScript</li>
              <li>MySQL / MariaDB</li>
            </ul>
          </div>
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>
              플레이 중인 게임
            </h3>
            <ul className={styles.gameList}>
              <li>Minecraft</li>
              <li>Geometry Dash</li>
              <li>ADOFAI</li>
              <li>카트라이더: 드리프트</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 연우 | <a href="https://lyw.kr">lyw.kr</a></p>
      </footer>
    </div>
  );
}
