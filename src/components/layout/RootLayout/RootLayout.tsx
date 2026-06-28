import Wrapper from '@/components/ui/Wrapper/Wrapper';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './RootLayout.module.scss';
import Sidebar from './Sidebar/Sidebar';

const RootLayout = () => {
  return (
    <Wrapper>
      <div className={styles.global}>
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.box}>
            <Header />
            <div className={styles.content}>
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Wrapper>
  );
};

export default RootLayout;
