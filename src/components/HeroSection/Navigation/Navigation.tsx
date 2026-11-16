import { useState, useEffect } from 'react';
import { getAssetUrl } from '../../../utils/asset';
import styles from './Navigation.module.css';

/**
 * Sunnyside 웹사이트의 글로벌 네비게이션 컴포넌트
 * 모바일 화면에서는 햄버거 버튼과 토글 드롭다운 메뉴로 렌더링
 * 데스크톱 분기점으로 전환 시 열려 있던 모바일 메뉴 상태를 자동으로 정리
 */
export function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia('(min-width: 768px)');

    const handleMediaChange = (event: MediaQueryListEvent): void => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQueryList.addEventListener('change', handleMediaChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return (
    <nav className={styles.nav} aria-label="Main Navigation">
      <a href="/" className={styles.logoLink} aria-label="Sunnyside Home">
        <img src={getAssetUrl('/images/logo.svg')} alt="Sunnyside" className={styles.logo} />
      </a>

      <button
        type="button"
        className={styles.toggleButton}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle navigation menu"
        onClick={handleToggle}
      >
        <img src={getAssetUrl('/images/icon-hamburger.svg')} alt="" aria-hidden="true" />
      </button>

      <ul
        id="primary-navigation"
        className={`${styles.menuList} ${isOpen ? styles.menuListOpen : ''}`}
      >
        <li className={styles.menuItem}>
          <a href="#about" className={styles.menuLink} onClick={handleClose}>
            About
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#services" className={styles.menuLink} onClick={handleClose}>
            Services
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#projects" className={styles.menuLink} onClick={handleClose}>
            Projects
          </a>
        </li>
        <li className={styles.menuItem}>
          <a
            href="#contact"
            className={`${styles.menuLink} ${styles.contactButton}`}
            onClick={handleClose}
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}