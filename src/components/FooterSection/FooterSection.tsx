import { getAssetUrl } from '../../utils/asset';
import styles from './FooterSection.module.css';

/**
 * 사이트 최하단 푸터 컴포넌트
 * 브랜드 로고, 보조 네비게이션 메뉴, 소셜 링크, 출처 크레딧
 */
export function FooterSection() {
  return (
    <footer className={styles.footer}>
      <a href="/" className={styles.logoLink} aria-label="Sunnyside Home">
        <span className={styles.logo} aria-hidden="true" />
      </a>

      <nav className={styles.nav} aria-label="Footer Navigation">
        <ul className={styles.navList}>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#services" className={styles.navLink}>Services</a></li>
          <li><a href="#projects" className={styles.navLink}>Projects</a></li>
        </ul>
      </nav>

      <ul className={styles.socialList} aria-label="Social media links">
        <li>
          <a
            href="https://facebook.com"
            className={styles.socialLink}
            aria-label="Sunnyside on Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getAssetUrl('/images/icon-facebook.svg')} alt="" aria-hidden="true" className={styles.socialIcon} />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com"
            className={styles.socialLink}
            aria-label="Sunnyside on Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getAssetUrl('/images/icon-instagram.svg')} alt="" aria-hidden="true" className={styles.socialIcon} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            className={styles.socialLink}
            aria-label="Sunnyside on Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getAssetUrl('/images/icon-twitter.svg')} alt="" aria-hidden="true" className={styles.socialIcon} />
          </a>
        </li>
        <li>
          <a
            href="https://pinterest.com"
            className={styles.socialLink}
            aria-label="Sunnyside on Pinterest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getAssetUrl('/images/icon-pinterest.svg')} alt="" aria-hidden="true" className={styles.socialIcon} />
          </a>
        </li>
      </ul>
    </footer>
  );
}