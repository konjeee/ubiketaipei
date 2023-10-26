"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navLinks}>
          <Link href="/">
            <Image
              src="./logo.svg"
              alt="Logo"
              width={95}
              height={95}
              priority={true}
              className={styles.logo}
            ></Image>
          </Link>
          <div className={styles.pages}>
            <Link
              className={
                router === "/usage" ? styles.activeClassName : undefined
              }
              href="/usage"
            >
              使用說明
            </Link>
            <Link
              className={
                router === "/pricing" ? styles.activeClassName : undefined
              }
              href="/pricing"
            >
              收費方式
            </Link>
            <Link
              className={
                router === "/locations" ? styles.activeClassName : undefined
              }
              href="/locations"
            >
              站點資訊
            </Link>
            <Link
              className={
                router === "/news" ? styles.activeClassName : undefined
              }
              href="/news"
            >
              最新消息
            </Link>
            <Link
              className={
                router === "/events" ? styles.activeClassName : undefined
              }
              href="/events"
            >
              活動專區
            </Link>
          </div>
        </div>
        <div className={styles.loginButton}>
          <Link href="/login" className={styles.loginLink}>
            登入
          </Link>
        </div>
        <div className={styles.hamburgerMenu}>
          <Image
            src={isMenuOpen ? "./x.svg" : "./hamburgerMenu.svg"}
            alt={isMenuOpen ? "X" : "HamburgerMenu"}
            width={24}
            height={24}
            onClick={handleHamburgerMenu}
          ></Image>
        </div>
        {isMenuOpen && (
          <div className={styles.menu}>
            <div className={styles.menuContent}>
              <div className={styles.menuPages}>
                <Link
                  className={
                    router === "/usage" ? styles.activeMenu : undefined
                  }
                  href="/usage"
                >
                  使用說明
                </Link>
                <Link
                  className={
                    router === "/pricing" ? styles.activeMenu : undefined
                  }
                  href="/pricing"
                >
                  收費方式
                </Link>
                <Link
                  className={
                    router === "/locations" ? styles.activeMenu : undefined
                  }
                  href="/locations"
                >
                  站點資訊
                </Link>
                <Link
                  className={router === "/news" ? styles.activeMenu : undefined}
                  href="/news"
                >
                  最新消息
                </Link>
                <Link
                  className={
                    router === "/events" ? styles.activeMenu : undefined
                  }
                  href="/events"
                >
                  活動專區
                </Link>
              </div>
              <div className={styles.menuLogin}>
                <Link href="/login">登入</Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
