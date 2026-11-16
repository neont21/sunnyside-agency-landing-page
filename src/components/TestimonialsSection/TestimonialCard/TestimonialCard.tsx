import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  /** 고객 프로필 아바타 이미지 경로 */
  avatarSrc: string;
  /** 고객 이름 */
  name: string;
  /** 고객 직책 및 소속 */
  role: string;
  /** 고객 추천사 인용 본문 */
  quote: string;
  /** 외부 레이아웃 제어를 위한 선택적 클래스명 */
  className?: string;
}

/**
 * 고객의 프로필과 추천사를 렌더링하는 카드 컴포넌트
 */
export function TestimonialCard({
  avatarSrc,
  name,
  role,
  quote,
  className,
}: TestimonialCardProps) {
  return (
    <figure className={`${styles.card} ${className ?? ''}`}>
      <img
        src={avatarSrc}
        alt={name}
        className={styles.avatar}
        loading="lazy"
      />

      <blockquote className={styles.quote}>
        <p className={styles.quoteText}>{quote}</p>
      </blockquote>

      <figcaption className={styles.author}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </figcaption>
    </figure>
  );
}