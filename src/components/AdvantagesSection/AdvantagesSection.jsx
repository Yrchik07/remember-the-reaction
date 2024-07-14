import styles from './AdvantagesSection.module.css';

const AdvantagesSection = () => {
  return (
    <div className={styles.advantagesSection}>
      <h2 className={styles.title}>Advantages of Our Application</h2>
      <ul className={styles.list}>
        <li className={styles.item}>Easy to use</li>
        <li className={styles.item}>Real-time tracking</li>
        <li className={styles.item}>Detailed reports</li>
      </ul>
    </div>
  );
};

export default AdvantagesSection;
