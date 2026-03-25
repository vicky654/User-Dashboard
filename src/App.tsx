// src/App.tsx
import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { IRootState } from './store';
import {
  toggleRTL,
  toggleTheme,
  toggleLocale,
  toggleMenu,
  toggleLayout,
  toggleAnimation,
  toggleNavbar,
  toggleSemidark,
} from './store/themeConfigSlice';
import { PageTitleProvider } from './context/PageTitleContext';
import { ThemeProvider } from '../src/components/ThemeProvider';   // ✅ ADD THIS
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { fetchAdminData } from '../src/api/domains/admin.api';
import withApiHandler from '../src/api/withApiHandler';

import { setAuthMetaData, updateBreach_templates, updatePermissions, updateProcessingActivities, updateTemplates } from '../src/store/authSlice';
import useErrorHandler from './CustomHooks/useErrorHandler';


function App({ children, execute }: PropsWithChildren & any) {

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleTheme(localStorage.getItem('light') || themeConfig.theme));
    dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu));
    dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout));
    dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass));
    dispatch(toggleAnimation(localStorage.getItem('animation') || themeConfig.animation));
    dispatch(toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar));
    dispatch(toggleLocale(localStorage.getItem('i18nextLng') || themeConfig.locale));
    dispatch(toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark));
  }, [
    dispatch,
    themeConfig.theme,
    themeConfig.menu,
    themeConfig.layout,
    themeConfig.rtlClass,
    themeConfig.animation,
    themeConfig.navbar,
    themeConfig.locale,
    themeConfig.semidark,
  ]);
<<<<<<< HEAD
   const handleApiError = useErrorHandler();

=======
    const handleApiError = useErrorHandler();
>>>>>>> bba60b802440fe120d7a8c2a57de1978841733b5
  const loadAdminData = async () => {
    try {
      const response = await execute(() => fetchAdminData());
    
      dispatch(setAuthMetaData(response.data.data));
      dispatch(updateTemplates(response?.data?.data?.templates));
      dispatch(updatePermissions(response?.data?.data?.Default_permissions));
      dispatch(updateProcessingActivities(response?.data?.data?.processing_activities));
      dispatch(updateBreach_templates(response?.data?.data?.Breach_templates));
    } catch (error) {
<<<<<<< HEAD
       
      handleApiError(error);
=======
        handleApiError(error);
>>>>>>> bba60b802440fe120d7a8c2a57de1978841733b5
      console.error("Admin API Failed:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) loadAdminData();
  }, []);


  return (
    <ThemeProvider>   {/* ✅ WRAP EVERYTHING */}
      <PageTitleProvider>
        <div
          className={`${store.getState().themeConfig.sidebar ? 'toggle-sidebar' : ''
            } ${themeConfig.menu} ${themeConfig.layout} ${themeConfig.rtlClass} main-section antialiased relative font-nunito text-sm font-normal`}
        >
          {children}
        </div>

        <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      </PageTitleProvider>
    </ThemeProvider>
  );
}
export default withApiHandler(App);


