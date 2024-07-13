import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import TrackerPage from './pages/TrackerPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="tracker" element={<TrackerPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
