import { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { toggleRTL } from '../../store/themeConfigSlice';
import { useTranslation } from 'react-i18next';
import Dropdown from '../Dropdown';
import IconLogout from '../Icon/IconLogout';
import { usePageTitle } from '../../context/PageTitleContext';
import { setSelectedOption } from '../../store/headerSlice';
import i18next from 'i18next';
import IconCaretsDown from '../Icon/IconCaretsDown';
import { toggleSemidark } from "../../store/themeConfigSlice";

const CommonHeader = () => {
  const { pageTitle } = usePageTitle();
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
     

  const isRtl = useSelector(
    (state: IRootState) => state.themeConfig.rtlClass
  ) === 'rtl';
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const [flag, setFlag] = useState(themeConfig.locale);

  // ✅ Get selected value directly from Redux
  const selectedOption = useSelector(
    (state: IRootState) => state.header.selectedOption
  );

  const setLocale = (flag: string) => {
    setFlag(flag);
    dispatch(toggleRTL(flag.toLowerCase() === 'ae' ? 'rtl' : 'ltr'));
  };

  useEffect(() => {
    const selector = document.querySelector(
      `ul.horizontal-menu a[href="${window.location.pathname}"]`
    );
    if (selector) {
      selector.classList.add('active');
      const all = document.querySelectorAll(
        'ul.horizontal-menu .nav-link.active'
      );
      all.forEach((el, idx) => idx !== 0 && el.classList.remove('active'));
      const ul = selector.closest('ul.sub-menu');
      if (ul) {
        const parentLink = ul.closest('li.menu')?.querySelector('.nav-link');
        setTimeout(() => parentLink?.classList.add('active'));
      }
    }
  }, [location]);

  // ✅ Update Redux on change
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    dispatch(setSelectedOption(value));
    console.log('Selected value in header:', value);
  };

  // LanguageIcons.js
// LanguageIcons.tsx
const LanguageIcons: Record<string, ReactNode> = {
  hi: (
    <svg width="24" height="24" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32" fill="#FF9933" />
      <text x="32" y="40" fontSize="28" textAnchor="middle" fill="#fff">हिं</text>
    </svg>
  ),
  en: (
    <svg width="24" height="24" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32" fill="#3366CC" />
      <text x="32" y="40" fontSize="28" textAnchor="middle" fill="#fff">EN</text>
    </svg>
  ),
  pa: (
    <svg width="24" height="24" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32" fill="#009933" />
      <text x="32" y="40" fontSize="28" textAnchor="middle" fill="#fff">ਪੰ</text>
    </svg>
  ),
  ta: (
    <svg width="24" height="24" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32" fill="#FF6600" />
      <text x="32" y="40" fontSize="28" textAnchor="middle" fill="#fff">த</text>
    </svg>
  ),
  te: (
    <svg width="24" height="24" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32" fill="#FF3366" />
      <text x="32" y="40" fontSize="28" textAnchor="middle" fill="#fff">తె</text>
    </svg>
  ),
  ur: (
    <svg width="24" height="24" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32" fill="#663399" />
      <text x="32" y="40" fontSize="28" textAnchor="middle" fill="#fff">ارد</text>
    </svg>
  ),
};
console.log('Theme Config:', t('selectCompany'));
console.log('Theme Config:', t('contact_us_cover'));

  return (

  <header
  className="z-40 w-full commonHeader"

>

      <div className="flex flex-wrap justify-between items-center px-4 py-2">
        {/* Left: Logo & Title */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src="/assets/images/dpdplogo.png"
              alt="DPDP Logo"
              className="w-[118px] h-[52px] object-contain"
            />
          </Link>
          {/* <h2 className="hidden sm:block text-sm sm:text-base font-semibold text-gray-800 dark:text-white truncate">
            {pageTitle}
          </h2> */}
        </div>
        <div className='flex items-center space-x-4'>


          <label className="text-sm  font-semibold text-gray-800 dark:text-white hidden sm:block">
             {t('selectCompany')}:</label>
            
          <div className='flex w-100 justify-between items-center'>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="form-select1 border-primary w-full"
            >
               <option>DPDP Consultants</option>
        <option>ABC Corporation</option>
        <option>XYZ Solutions</option>
            </select>
          </div>
        </div>
   

        {/* Right: Dropdown Select + User */} 
        <div className="flex items-center space-x-2">



     <div className="dropdown ms-auto w-max me-4">
         <Dropdown
      offset={[0, 8]}
      placement={isRtl ? 'bottom-start' : 'bottom-end'}
      btnClassName="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black"
      button={
        <>
          {/* Selected SVG Icon */}
          <div className="w-5 h-5">{LanguageIcons[flag]}</div>

          {/* Selected Language Code */}
          <div className="text-base font-bold uppercase">{flag}</div>

          {/* Dropdown Caret */}
          <span className="shrink-0">
            <IconCaretsDown />
          </span>
        </>
      }
    >
      {/* Language List */}
      <ul className="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold w-[280px]">
        {themeConfig.languageList.map((item) => (
          <li key={item.code}>
            <button
              type="button"
              className={`flex w-full items-center hover:text-primary p-2 rounded-lg ${
                flag === item.code ? 'bg-primary/10 text-primary' : ''
              }`}
                  onClick={() => {
                        i18next.changeLanguage(item.code);
                        // setFlag(item.code);
                        setLocale(item.code);
                      }}
            >
              {/* Language SVG */}
              <span className="w-6 h-6">{LanguageIcons[item.code]}</span>

              {/* Language Name */}
              <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </Dropdown>
        </div>
          <span className="text-sm font-semibold text-gray-800 dark:text-white hidden sm:block">
       Jaspal Singh
          </span>
          <Dropdown
            offset={[0, 8]}
            placement={isRtl ? 'bottom-start' : 'bottom-end'}
            btnClassName="relative group block w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center"
            button="JS"
          >
            <ul className="text-dark bg-white dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
              <li>
                <div className="flex items-center px-4 py-4">
                  <img
                    className="rounded-md w-10 h-10 object-cover"
                    src="/assets/images/user-profile.jpeg"
                    alt="userProfile"
                  />
                  <div className="ltr:pl-4 rtl:pr-4 truncate">
                    <h4 className="text-base">Jaspal Singh</h4>
                  </div>
                </div>
              </li>
              <hr />
              <li className="border-t border-white-light dark:border-white-light/10">
                <Link
                  to="/login"
                  className="text-primary flex justify-between items-center !py-3"
                >
                  <span className="flex items-center gap-1 w-full px-5 py-2 text-sm font-medium text-red-400 bg-gray-200 rounded-lg shadow-sm hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
                    Sign Out <IconLogout className="icon rotate-90" />
                  </span>
                </Link>
              </li>
            </ul>
          </Dropdown>
        </div>
      </div>
    </header>
   
  );
};

export default CommonHeader;
