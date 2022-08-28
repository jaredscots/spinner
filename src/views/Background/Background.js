import background from './background.jpg';
import styles from './Background.css';

export function Background() {
  return (
    <div className={styles.background}>
      <img alt="Carnival" src={background} className={styles.img} />
    </div>
  );
}
