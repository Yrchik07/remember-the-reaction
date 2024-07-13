import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        {/* Header content */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default SharedLayout;
