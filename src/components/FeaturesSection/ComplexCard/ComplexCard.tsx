import { getAssetUrl } from '../../../utils/asset';
import styles from './ComplexCard.module.css';

interface ComplexCardProps {
  /** 카드 메인 제목 */
  title: string;
  /** 상세 설명 본문 */
  description: string;
  /** 모바일 배경 이미지 경로 */
  mobileSrc: string;
  /** 데스크톱 배경 이미지 경로 */
  desktopSrc?: string;
  /** 텍스트 색상 테마 */
  textColor: 'green' | 'blue';
  /** 외부 레이아웃 제어를 위한 선택적 클래스명 */
  className?: string;
}

/**
 * FeaturesSection 하단에 위치하며 배경 이미지 위에 텍스트가 오버레이되는 복합 카드
 * <picture> 요소를 배경 레이어로 깔고, 텍스트를 하단에 안전하게 배치
 */
export function ComplexCard({
  title,
  description,
  mobileSrc,
  desktopSrc,
  textColor,
  className,
}: ComplexCardProps) {
  const textColorClass =
    textColor === 'green' ? styles.textGreen : styles.textBlue;

  return (
    <article className={`${styles.card} ${textColorClass} ${className ?? ''}`}>
      <picture className={styles.bgPicture}>
        {desktopSrc && (
          <source media="(min-width: 768px)" srcSet={getAssetUrl(desktopSrc)} />
        )}
        <img
          src={getAssetUrl(mobileSrc)}
          alt=""
          aria-hidden="true"
          className={styles.bgImage}
          loading="lazy"
        />
      </picture>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}