import { NavLink, useLocation, matchPath } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../store/themeConfigSlice';
import { IRootState } from '../../store';
import { useEffect, useState, useRef } from 'react';
import { useSidebarItems } from './sidebarItems';
import type { SidebarItem } from './sidebarItems';
import ListingIcon from '../DPDPIcons/ListingIcon';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Dsidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
  const sidebarItems = useSidebarItems(); // ✅ get items dynamically with translation

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 100, left: 179 });
  const [subsubmenuPosition, setSubsubmenuPosition] = useState({ top: 100, left: 380 });
  const menuItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const submenuRefs = useRef<(HTMLLIElement | null)[]>([]);
  const { t } = useTranslation();
  useEffect(() => {
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar());
    }
  }, [location]);

  const handleParentEnter = (index: number) => {
    const menuItem = menuItemRefs.current[index];
    if (menuItem) {
      const rect = menuItem.getBoundingClientRect();
      const submenuHeight = 250;
      const viewportHeight = window.innerHeight;
      let top = rect.top;
      if (rect.top + submenuHeight > viewportHeight) {
        top = Math.max(viewportHeight - submenuHeight - 10, 10);
      }
      setSubmenuPosition({ top, left: rect.right });
    }
    setOpenIndex(index);
    setOpenSubIndex(null);
  };

  const handleChildEnter = (cIndex: number, rectFromParent: DOMRect) => {
    const submenuHeight = 200;
    const viewportHeight = window.innerHeight;
    let top = rectFromParent.top;
    if (rectFromParent.top + submenuHeight > viewportHeight) {
      top = Math.max(viewportHeight - submenuHeight - 10, 10);
    }
    setSubsubmenuPosition({ top, left: rectFromParent.right });
    setOpenSubIndex(cIndex);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
    setOpenSubIndex(null);
  };

  const isParentActive = (item: SidebarItem): boolean => {
    const currentPath = location.pathname;
    if (item.path && matchPath({ path: item.path, end: false }, currentPath)) {
      return true;
    }
    if (item.children) {
      return item.children.some((child) => {
        if (child.path && matchPath({ path: child.path, end: false }, currentPath)) {
          return true;
        }
        if (child.children) {
          return child.children.some(
            (subChild) => subChild.path && matchPath({ path: subChild.path, end: false }, currentPath)
          );
        }
        return false;
      });
    }
    return false;
  };
  console.log('Sidebar items:', t('privacyGovernance')); // Debugging line

  return (
      <div onMouseLeave={handleMouseLeave} className="flex">
        {/* Sidebar */}
        <nav className="sidebar sidebar-color fixed top-0 bottom-0 min-h-screen w-[179px] z-50 shadow  dark:bg-black transition-all duration-300">
          {/* Toggle Button */}
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button
              type="button"
              className="w-8 h-8 rounded-full bg-secondary shadow-md flex items-center justify-center hover:bg-gray-700 transition"
              onClick={() => dispatch(toggleSidebar())}
            >
              <i className={`text-white fa ${themeConfig.sidebar ? 'fa-angle-right' : 'fa-angle-left'}`} />
            </button>
          </div>

          {/* Scrollable Menu */}
          <PerfectScrollbar className="h-full px-2 py-4">
            <ul className="space-y-3 font-semibold">
              {sidebarItems.map((item, index) => (
                <li key={index} className="relative">
                  <div
                    ref={(el) => (menuItemRefs.current[index] = el)}
                    className={`cursor-pointer  flex flex-col items-center text-center px-3 py-2 rounded-md transition ${
                      isParentActive(item)
                        ? 'bg-secondary text-white font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-secondary/10'
                    }`}
                    onMouseEnter={() => handleParentEnter(index)}
                  >
                    {item.icon && (
                      <div className="w-[30px] h-[30px] flex items-center justify-center mb-1">
                        {typeof item.icon === 'string' ? (
                          <img
                            src={item.icon}
                            alt={typeof item.name === 'string' ? item.name : 'menu-icon'}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          item.icon
                        )}
                      </div>
                    )}
                    {/* <span className="text-xs">{item.name} {t({item.name})}</span> */}
                    <span className="text-xs">{t(item.name)} </span>

                  </div>
                </li>
              ))}
            </ul>
          </PerfectScrollbar>
        </nav>

        {/* 1st Level Submenu */}
        {openIndex !== null && sidebarItems[openIndex]?.children?.length ? (
          <div
            className="fixed z-[9999]  sidebar-color shadow-lg rounded-lg p-3 w-[230px] overflow-auto"
            style={{ top: submenuPosition.top, left: submenuPosition.left }}
          >
            <div className="text-md flex items-center gap-2 px-2 py-0 font-semibold text-gray-800 dark:text-white mb-3">
              <ListingIcon width={20} height={20} />
              <span>{t('ListItems')}</span>
            </div>
            <ul className="space-y-1">
              {sidebarItems[openIndex].children!.map((child, cIndex) => (
                <li
                  key={cIndex}
                  className="relative group"
                  ref={(el) => (submenuRefs.current[cIndex] = el)}
                >
                  <NavLink
                    to={child.path ?? '#'}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 rounded transition ${
                        isActive ? 'bg-secondary/10 text-primary font-semibold' : 'text-gray-700 dark:text-gray-200'
                      }`
                    }
                    onMouseEnter={(e) =>
                      child.children?.length
                        ? handleChildEnter(cIndex, e.currentTarget.getBoundingClientRect())
                        : null
                    }
                  >
                    {child.icon && (
                      <div className="w-4 h-4">
                        {typeof child.icon === 'string' ? (
                          <img
                            src={child.icon}
                            alt={typeof child.name === 'string' ? child.name : 'sub-icon'}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          child.icon
                        )}
                      </div>
                    )}
                    <span className="text-sm"> {t(child.name)}</span>
                    {child.children?.length && <i className="fa fa-angle-right ml-auto text-gray-500" />}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* 2nd Level Submenu */}
        {openIndex !== null &&
          openSubIndex !== null &&
          sidebarItems[openIndex]?.children?.[openSubIndex]?.children?.length ? (
          <div
            className="fixed z-[9999]  sidebar-color  rounded-lg p-2 overflow-auto max-h-[250px]"
            style={{
              top: subsubmenuPosition.top,
              left: subsubmenuPosition.left,
              minWidth: '200px',
            }}
          >
            <ul className="space-y-1">
              {sidebarItems[openIndex].children![openSubIndex].children!.map((subChild, sIndex) => (
                <li key={sIndex}>
                  <NavLink
                    to={subChild.path ?? '#'}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm rounded ${
                        isActive ? 'bg-secondary/10 font-semibold text-primary' : 'text-gray-700 dark:text-gray-200'
                      }`
                    }
                  >
                    {t(subChild.name)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
 
  );
};

export default Dsidebar;
