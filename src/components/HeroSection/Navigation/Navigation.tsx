import { useState } from 'react';
import styles from './Navigation.module.css';

/**
 * Sunnyside 웹사이트의 글로벌 네비게이션 컴포넌트
 * 모바일 화면에서는 햄버거 버튼과 토글 드롭다운 메뉴로 렌더링
 */
export function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav} aria-label="Main Navigation">
      <a href="/" className={styles.logoLink} aria-label="Sunnyside Home">
        <img src="/images/logo.svg" alt="Sunnyside" className={styles.logo} />
      </a>

      <button
        type="button"
        className={styles.toggleButton}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle navigation menu"
        onClick={handleToggle}
      >
        <img src="/images/icon-hamburger.svg" alt="" aria-hidden="true" />
      </button>

      <ul id="primary-navigation" className={`${styles.menuList} ${isOpen ? styles.menuListOpen : ''}`}>
        <li className={styles.menuItem}>
          <a href="#about" className={styles.menuLink}>About</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#services" className={styles.menuLink}>Services</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#projects" className={styles.menuLink}>Projects</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#contact" className={`${styles.menuLink} ${styles.contactButton}`}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}