import styles from './WelcomeSection.module.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <Logo />
      <h2 className={styles.subtitle}>Welcome to Our Tracker</h2>
      <h1 className={styles.title}>Track Your Activities</h1>
      <div className={styles.links}>
        <Link to="/signup" className={styles.Link}>Try tracker</Link>
        <Link to="/signin" className={styles.Link}>Sign In</Link>
      </div>
    </section>
  );
};

export default WelcomeSection;
