import Header from '@widgets/header/header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;
