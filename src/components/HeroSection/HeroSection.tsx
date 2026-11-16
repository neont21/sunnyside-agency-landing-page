import { getAssetUrl } from '../../utils/asset';
import { Navigation } from './Navigation/Navigation';
import styles from './HeroSection.module.css';

/**
 * 사이트 최상단 히어로 섹션 컴포넌트
 */
export function HeroSection() {
  return (
    <header className={styles.hero}>
      <Navigation />

      <div className={styles.content}>
        <h1 className={styles.title}>We are creatives</h1>
        <a
          href="#features"
          className={styles.scrollLink}
          aria-label="Scroll down to features"
        >
          <img
            src={getAssetUrl('/images/icon-arrow-down.svg')}
            alt=""
            aria-hidden="true"
            className={styles.arrowIcon}
          />
        </a>
      </div>
    </header>
  );
}