import { FC, Fragment, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface props {
  children: ReactNode;
}

const Layout: FC<props> = ({ children }) => {
  return (
    <Fragment>
      <div className="">
        <div className="container p-4 pb-0 sm:p-2 xl:max-w-5xl">
          <Header />
          <main style={{ minHeight: 'calc(100vh - 8rem)' }}>{children}</main>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
