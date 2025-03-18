import { PropsWithChildren } from 'react';

import Footer from '@/components//Footer';
import Header from '@/components/Header';

import styles from './Layout.module.scss';

interface LayoutProps {
  hero?: boolean;
}

const Layout = ({ children, hero }: PropsWithChildren<LayoutProps>) => (
  <>
    <Header hero={hero} />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
);

export default Layout;
