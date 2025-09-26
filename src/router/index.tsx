import { createBrowserRouter } from 'react-router-dom';
import BlankLayout from '../components/Layouts/BlankLayout';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import { routes } from './routes';
import PrivateRouter from './PrivateRouter';

const finalRoutes = routes.map((route) => {
  const element = route.layout === 'blank'
    ? <BlankLayout>{route.element}</BlankLayout>
    : (
        <PrivateRouter>
          <DefaultLayout>{route.element}</DefaultLayout>
        </PrivateRouter>
      );

  return {
    ...route,
    element,
  };
});

const router = createBrowserRouter(finalRoutes);

export default router;
