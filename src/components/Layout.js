import { Outlet } from 'react-router-dom';
import { AppBarMenu } from 'components/Menu/AppBarMenu';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBarMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
