import styles from './Logo.module.css';
import logoImage from '../../assets/vite.svg'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoImage} alt="Company Logo" />
    </div>
  );
};

export default Logo;
