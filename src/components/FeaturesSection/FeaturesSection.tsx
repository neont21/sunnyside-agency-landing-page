import { ImageCard } from '../common/ImageCard/ImageCard';
import { TextCard } from './TextCard/TextCard';
import { ComplexCard } from './ComplexCard/ComplexCard';
import styles from './FeaturesSection.module.css';

/**
 * Sunnyside 서비스 가치와 포트폴리오 쇼케이스를 소개하는 핵심 피처 섹션
 * 모바일 화면에서는 1열 세로 스택으로 렌더링
 */
export function FeaturesSection() {
  return (
    <section id="features" className={styles.section} aria-label="Features and Services">
      <ImageCard
        mobileSrc="/images/mobile/image-transform.jpg"
        desktopSrc="/images/desktop/image-transform.jpg"
        alt="A white egg against a bright yellow background"
      />
      <TextCard
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        accentColor="yellow"
      />
      <ImageCard
        mobileSrc="/images/mobile/image-stand-out.jpg"
        desktopSrc="/images/desktop/image-stand-out.jpg"
        alt="A pink glass cup against a warm pink background"
      />
      <TextCard
        title="Stand out to the right audience"
        description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        accentColor="red"
      />
      <ComplexCard
        title="Graphic design"
        description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        mobileSrc="/images/mobile/image-graphic-design.jpg"
        desktopSrc="/images/desktop/image-graphic-design.jpg"
        textColor="green"
      />
      <ComplexCard
        title="Photography"
        description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        mobileSrc="/images/mobile/image-photography.jpg"
        desktopSrc="/images/desktop/image-photography.jpg"
        textColor="blue"
      />
    </section>
  );
}