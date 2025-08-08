"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Globe, Gamepad2, Code, Server } from "lucide-react";

import Galaxy from "./components/Galaxy";
import BlurText from "./components/BlurText";
import GradientText from "./components/GradientText";
import ScrollReveal from "./components/ScrollReveal";
import TextType from "./components/TextType";

export default function Home() {
  return (
    <div className={styles.page}>
      <div style={{ width: "100%", height: "30vh", position: "relative" }}>
        {/* 배경 Galaxy */}
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />

        {/* Galaxy 위에 올라갈 글씨 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <BlurText
            text="글한섭 못고쳐서 죄송요ㅠ"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
          />
        </div>

        {/* 🟡 연우 로고: 왼쪽 하단에, Galaxy와 메인 영역을 반쯤 걸치게 */}
        <Image
          src="/profile.png"
          alt="연우 로고"
          width={120}
          height={120}
          style={{
            position: "absolute",
            bottom: "-60px", // Galaxy와 메인에 반쯤 걸치도록
            left: "6px", // 왼쪽에 고정
            marginLeft: "20px", // 너무 붙지 않도록 여백
            zIndex: 2,
            borderRadius: "20px",
          }}
        />
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>이연우</h1>
        <p className={styles.subtitle}>개발자 · 서버 관리자</p>
        <big>
          <big>
            <big>
              <code className={styles.code}>
                <TextType
                  text={["print('니 하오')", "앙기모띠", "아 배고프다"]}
                  typingSpeed={50}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </code>
            </big>
          </big>
        </big>
        <section className={`${styles.section} ${styles.serverSection}`}>
          <h2 className={styles.sectionTitle}>
            <Server size={20} />
            운영 중인 서버
          </h2>

          <div className={styles.linkBox}>
            <GradientText
              colors={[
                "#d240ffff",
                "#ff009dff",
                "#d240ffff",
                "#ff009dff",
                "#ff40ffff",
              ]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              SMP
            </GradientText>
            <code className={styles.address}>smp.lyw.kr</code>
            <p className={styles.description}>그냥평범한생야생</p>
          </div>

          <div className={styles.linkBox}>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Globed Korea Server
            </GradientText>
            <code className={styles.address}>
              http://gd.globedkoreaserver.shop
            </code>
            <a
              href="https://globedkoreaserver.shop"
              className={styles.address}
              target="_blank"
              rel="noopener noreferrer"
            >
              [웹사이트] (필독)
            </a>
            <p className={styles.description}>유일한 globed한국서버</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.infoSection}`}>
          <h2 className={styles.sectionTitle}>
            <Code size={20} />
            <Gamepad2 size={20} />
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
            <h3 className={styles.subTitle}>플레이 중인 게임</h3>
            <ul className={styles.gameList}>
              <li>Minecraft</li>
              <li>Geometry Dash</li>
              <li>ADOFAI</li>
              <li>카트라이더: 드리프트</li>
            </ul>
          </div>
        </section>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        ></ScrollReveal>
      </main>

      <footer className={styles.footer}>
        <p>
          © 2025 | lyw.kr
        </p>
      </footer>
    </div>
  );
}
