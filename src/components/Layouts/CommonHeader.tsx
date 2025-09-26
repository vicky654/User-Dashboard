import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { toggleRTL } from '../../store/themeConfigSlice';
import { useTranslation } from 'react-i18next';
import Dropdown from '../Dropdown';
import IconLogout from '../Icon/IconLogout';
import { usePageTitle } from '../../context/PageTitleContext';
import { setSelectedOption } from '../../store/headerSlice';

const CommonHeader = () => {
  const { pageTitle } = usePageTitle();
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

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

  return (
    <header className="bg-white dark:bg-black shadow-sm z-40 w-full commonHeader">
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
            Select Company:</label>
<div className='flex w-100 justify-between items-center'>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="form-select1 border-primary w-full"
          >
            <option value="option1">DPDP Consultants</option>
            <option value="option2">DPDP Consultants</option>
            <option value="option3"> DPDP Consultants</option>
          </select>
</div>
</div>


        {/* Right: Dropdown Select + User */}
        <div className="flex items-center space-x-2">
      

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
                  <span className="flex justify-between items-center">
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
