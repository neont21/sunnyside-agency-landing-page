import styles from './TextCard.module.css';

interface TextCardProps {
  /** 카드 메인 제목 */
  title: string;
  /** 상세 설명 본문 */
  description: string;
  /** 액션 링크 텍스트 */
  linkText?: string;
  /** 이동할 링크 주소 */
  linkHref?: string;
  /** 밑줄 강조 색상 */
  accentColor: 'yellow' | 'red';
  /** 외부 레이아웃 제어를 위한 선택적 클래스명 */
  className?: string;
}

/**
 * FeaturesSection에서 브랜드 핵심 가치를 전달하는 텍스트 카드 컴포넌트
 * 타이틀, 설명, 형광펜 밑줄 링크 포함
 */
export function TextCard({
  title,
  description,
  linkText = 'Learn more',
  linkHref = '#',
  accentColor,
  className,
}: TextCardProps) {
  const underlineColorClass =
    accentColor === 'yellow' ? styles.underlineYellow : styles.underlineRed;

  return (
    <article className={`${styles.card} ${className ?? ''}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.linkWrapper}>
        <a href={linkHref} className={`${styles.link} ${underlineColorClass}`}>
          {linkText}
        </a>
      </div>
    </article>
  );
}