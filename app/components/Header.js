"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = usePathname();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navLinks}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={95}
              height={95}
              priority={true}
              className={styles.logo}
            ></Image>
          </Link>
          <Link
            className={router === "/usage" ? styles.activeClassName : undefined}
            onClick={() => handleFilterClick("usage")}
            href="/usage"
          >
            使用說明
          </Link>
          <Link
            className={
              router === "/pricing" ? styles.activeClassName : undefined
            }
            onClick={() => handleFilterClick("pricing")}
            href="/pricing"
          >
            收費方式
          </Link>
          <Link
            className={
              router === "/locations" ? styles.activeClassName : undefined
            }
            onClick={() => handleFilterClick("locations")}
            href="/locations"
          >
            站點資訊
          </Link>
          <Link
            className={router === "/news" ? styles.activeClassName : undefined}
            onClick={() => handleFilterClick("news")}
            href="/news"
          >
            最新消息
          </Link>
          <Link
            className={
              router === "/events" ? styles.activeClassName : undefined
            }
            onClick={() => handleFilterClick("events")}
            href="/events"
          >
            活動專區
          </Link>
        </div>
        <div className={styles.loginButton}>
          <Link href="/login" className={styles.loginLink}>
            登入
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
