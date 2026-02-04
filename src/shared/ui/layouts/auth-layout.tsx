import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      {/* TODO: Header 추가 */}
      <Outlet />
    </Suspense>
  );
};

export default AuthLayout;
