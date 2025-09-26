import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { toggleRTL, toggleSidebar } from '../../store/themeConfigSlice';
import { useTranslation } from 'react-i18next';
import Dropdown from '../Dropdown';
import IconMenu from '../Icon/IconMenu';
import IconUser from '../Icon/IconUser';
import IconMail from '../Icon/IconMail';
import IconLockDots from '../Icon/IconLockDots';
import IconLogout from '../Icon/IconLogout';

const Header: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // Determine RTL
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  // Highlight active horizontal menu items
  useEffect(() => {
    const selector = document.querySelector(
      `ul.horizontal-menu a[href="${window.location.pathname}"]`
    );
    if (selector) {
      selector.classList.add('active');
      const all = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
      all.forEach((el, idx) => idx !== 0 && el.classList.remove('active'));
      const ul = selector.closest('ul.sub-menu');
      if (ul) {
        const parentLink = ul.closest('li.menu')?.querySelector('.nav-link');
        setTimeout(() => parentLink?.classList.add('active'));
      }
    }
  }, [location]);

  // Profile dropdown items
  const [notifications, setNotifications] = useState([]);

  return (
    <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
      <div className="shadow-sm">
        <div className="relative bg-white dark:bg-black flex flex-wrap items-center justify-between px-4 py-3 lg:px-6">

          {/* Logo & Sidebar Toggle (Mobile) */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
              <img className="w-8 h-8" src="/assets/images/logo.svg" alt="logo" />
              <span className="text-xl font-semibold text-black dark:text-white hidden sm:inline">
                DPDP
              </span>
            </Link>

            <button
              type="button"
              className="p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60 lg:hidden ml-auto"
              onClick={() => dispatch(toggleSidebar())}
            >
              <IconMenu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Center Title & Profile Dropdown */}
          <div className="w-full mt-2 lg:mt-0 lg:w-auto flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-2 sm:gap-4 lg:gap-6 dark:text-[#d0d2d6]">

            <NavLink to="/" className="flex items-center sm:text-lg font-semibold dark:text-white hidden sm:flex">
              {t('DPDP')}
            </NavLink>

            <div className="shrink-0">
              <Dropdown
                offset={[0, 8]}
                placement={isRtl ? 'bottom-start' : 'bottom-end'}
                btnClassName="relative group block"
                button={
                  <img
                    className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                    src="/assets/images/user-profile.jpeg"
                    alt="user"
                  />
                }
              >
                <ul className="text-dark dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
                  <li>
                    <div className="flex items-center px-4 py-4">
                      <img
                        className="rounded-md w-10 h-10 object-cover"
                        src="/assets/images/user-profile.jpeg"
                        alt="user"
                      />
                      <div className="ltr:pl-4 rtl:pr-4 truncate">
                        <h4 className="text-base">
                          John Doe{' '}
                          <span className="text-xs bg-success-light rounded text-success px-1 ml-2">
                            Pro
                          </span>
                        </h4>
                        <button
                          type="button"
                          className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white"
                        >
                          johndoe@gmail.com
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/users/profile">
                      <IconUser className="icon" /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/apps/mailbox">
                      <IconMail className="icon" /> Inbox
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth/boxed-lockscreen">
                      <IconLockDots className="icon" /> Lock Screen
                    </Link>
                  </li>
                  <li className="border-t border-white-light dark:border-white-light/10">
                    <Link to="/auth/boxed-signin" className="text-danger !py-3">
                      <IconLogout className="icon rotate-90" /> Sign Out
                    </Link>
                  </li>
                </ul>
              </Dropdown>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
