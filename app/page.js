"use client";

import Image from "next/image";
import styles from "./page.module.css";

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
        <p className={styles.subtitle}>개발자 | 서버 관리자</p>

        <div className={styles.links}>
          <div className={styles.linkBox}>
            <span className={styles.label}>마인크래프트 SMP</span>
            <code className={styles.address}>smp.lyw.kr</code>
          </div>
          <div className={styles.linkBox}>
            <span className={styles.label}>Globed Korea Server</span>
            <code className={styles.address}>http://gd.globedkoreaserver.shop</code><br />
            <code className={styles.addresssde}><a href="https://globedkoreaserver.shop">[웹사이트](필독)</a></code>
          </div>
          <div className={styles.linkBox}>
            <span className={styles.label}>그냥저냥</span>
            <code className={styles.address}>nextjs</code><br />
            <code className={styles.address}>reactjs</code><br />
            <code className={styles.address}>python</code><br/>
            <code className={styles.address}>mysql, mariadb</code>
          </div>
          <div className={styles.linkBox}>
            <span className={styles.label}>이연우이런게임함</span>
            <code className={styles.address}>Minecraft</code><br />
            <code className={styles.address}>Geometry Dash</code><br />
            <code className={styles.address}>ADOFAI</code><br/>
            <code className={styles.address}>카트라이더:드리프트</code>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 연우 | lyw.kr</p>
      </footer>
    </div>
  );
}
