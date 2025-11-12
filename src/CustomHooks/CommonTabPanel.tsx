import React, { Fragment, ReactNode } from 'react';
import { Tab } from '@headlessui/react';

interface TabItem {
  title: any;
  icon?: ReactNode;
  content: ReactNode;
}

interface CommonTabsProps {
  tabs: TabItem[];
  defaultIndex?: number;
}

const CommonTabs: React.FC<CommonTabsProps> = ({ tabs, defaultIndex }) => {
  return (
    <div className="panel">
      <Tab.Group
        defaultIndex={defaultIndex}
        onChange={(index) => {
          console.log('🟢 Active Tab Index:', index);
          console.log('🟢 Active Tab Title:', tabs[index]?.title,defaultIndex);
        }}
      >
        <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
          {tabs.map((tab, index) => (
            <Tab as={Fragment} key={index}>
              {({ selected }) => (
                <button
                  className={`${
                    selected
                      ? 'border-b !border-secondary bg-secondary text-white !outline-none'
                      : ''
                  } -mb-[1px] flex items-center border-transparent p-5 py-3 hover:border-b hover:!border-secondary hover:text-secondary`}
                >
                  {/* Optional icon */}
                  {tab.icon && <span className="mr-2">{tab.icon}</span>}
                  {tab.title}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {tabs.map((tab, index) => (
            <Tab.Panel key={index}>
              <div className="pt-5">{tab.content}</div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default CommonTabs;
