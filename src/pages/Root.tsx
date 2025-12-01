import { Outlet } from 'react-router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Root() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
