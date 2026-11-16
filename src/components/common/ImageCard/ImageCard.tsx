import { getAssetUrl } from '../../../utils/asset'
import styles from './ImageCard.module.css';

interface ImageCardProps {
  /** 모바일 화면 이미지 경로 */
  mobileSrc: string;
  /** 데스크톱 화면 확장 시 적용할 이미지 경로 */
  desktopSrc?: string;
  /** 스크린 리더 및 SEO를 위한 대체 텍스트 */
  alt: string;
  /** 부모 그리드 레이아웃 등에서 추가 제어할 수 있는 선택적 클래스명 */
  className?: string;
}

/**
 * 모바일 및 데스크톱 반응형 이미지를 서빙하는 공용 이미지 카드 컴포넌트
 * HTML5 <picture> 태그를 사용하여 불필요한 고해상도 이미지 다운로드를 방지
 */
export function ImageCard({
  mobileSrc,
  desktopSrc,
  alt,
  className,
}: ImageCardProps) {
  return (
    <div className={`${styles.imageContainer} ${className ?? ''}`}>
      <picture>
        {desktopSrc && (
          <source media="(min-width: 768px)" srcSet={getAssetUrl(desktopSrc)} />
        )}
        <img
          src={getAssetUrl(mobileSrc)}
          alt={alt}
          className={styles.image}
          loading="lazy"
        />
      </picture>
    </div>
  );
}