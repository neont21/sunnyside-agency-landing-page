import { TestimonialCard } from './TestimonialCard/TestimonialCard';
import styles from './TestimonialsSection.module.css';

/**
 * Sunnyside 실제 고객들의 추천사와 후기를 보여주는 섹션 컴포넌트
 */
export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className={styles.section}
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className={styles.heading}>
        Client testimonials
      </h2>

      <ul className={styles.cardsList}>
        <li className={styles.cardItem}>
          <TestimonialCard
            avatarSrc="/images/image-emily.jpg"
            name="Emily R."
            role="Marketing Director"
            quote="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          />
        </li>
        <li className={styles.cardItem}>
          <TestimonialCard
            avatarSrc="/images/image-thomas.jpg"
            name="Thomas S."
            role="Chief Operating Officer"
            quote="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          />
        </li>
        <li className={styles.cardItem}>
          <TestimonialCard
            avatarSrc="/images/image-jennie.jpg"
            name="Jennie F."
            role="Business Owner"
            quote="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          />
        </li>
      </ul>
    </section>
  );
}