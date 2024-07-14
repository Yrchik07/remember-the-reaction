import { Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css'

const SharedLayout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Application Header</h1>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>Application Footer</p>
      </footer>
    </div>
  );
};

export default SharedLayout;
