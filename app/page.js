"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Globe, Gamepad2, Code, Server } from "lucide-react";

export default function Home() {
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

        {/* 서버 정보 섹션 */}
        <section className={`${styles.section} ${styles.serverSection}`}>
          <h2 className={styles.sectionTitle}>
            <Server size={20} />
            운영 중인 서버
          </h2>

          <div className={styles.linkBox}>
            <span className={styles.label}>마인크래프트 SMP 서버</span>
            <code className={styles.address}>smp.lyw.kr</code>
            <p className={styles.description}>
              그냥평범한생야생
            </p>
          </div>

          <div className={styles.linkBox}>
            <span className={styles.label}>Globed Korea 서버</span>
            <code className={styles.address}>http://gd.globedkoreaserver.shop</code>
            <code className={styles.address}>
              <a href="https://globedkoreaserver.shop" target="_blank">[웹사이트] (필독)</a>
            </code>
            <p className={styles.description}>
              유일한 globed한국서버
            </p>
          </div>
        </section>

        {/* 기술 스택 + 게임 섹션 */}
        <section className={`${styles.section} ${styles.infoSection}`}>
          <h2 className={styles.sectionTitle}>
            <Code size={20} />
            기술 스택 및 게임
          </h2>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>기술 스택</h3>
            <ul className={styles.techList}>
              <li>Next.js, React.js</li>
              <li>Python</li>
              <li>MySQL / MariaDB</li>
            </ul>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>
              <Gamepad2 size={16} /> 플레이 중인 게임
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
