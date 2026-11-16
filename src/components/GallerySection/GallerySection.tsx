import { ImageCard } from '../common/ImageCard/ImageCard';
import styles from './GallerySection.module.css';

/**
 * 프로젝트 쇼케이스 비주얼을 2x2(모바일) 그리드로 보여주는 갤러리 섹션
 */
export function GallerySection() {
  return (
    <section className={styles.gallery} aria-label="Photo Gallery">
      <ImageCard
        mobileSrc="/images/mobile/image-gallery-milkbottles.jpg"
        desktopSrc="/images/desktop/image-gallery-milkbottles.jpg"
        alt="Glass milk bottles with blue sky and clouds pattern"
      />
      <ImageCard
        mobileSrc="/images/mobile/image-gallery-orange.jpg"
        desktopSrc="/images/desktop/image-gallery-orange.jpg"
        alt="An orange slice placed in a bowl"
      />
      <ImageCard
        mobileSrc="/images/mobile/image-gallery-cone.jpg"
        desktopSrc="/images/desktop/image-gallery-cone.jpg"
        alt="An empty waffle ice cream cone"
      />
      <ImageCard
        mobileSrc="/images/mobile/image-gallery-sugar-cubes.jpg"
        desktopSrc="/images/desktop/image-gallery-sugarcubes.jpg"
        alt="Sugar cubes stacked against a pink background"
      />
    </section>
  );
}