import React from "react";

const UserHeaderLogo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.6667 4.84847C26.6667 6.67393 23.8924 8.2638 19.7933 9.09093C23.8924 9.918 26.6667 11.5079 26.6667 13.3333C26.6667 15.1588 23.8924 16.7487 19.7933 17.5757C23.8924 18.4029 26.6667 19.9927 26.6667 21.8182C26.6667 24.4959 20.6971 26.6667 13.3333 26.6667C5.96953 26.6667 0 24.4959 0 21.8182C0 19.9927 2.77429 18.4029 6.87333 17.5757C2.77429 16.7487 0 15.1588 0 13.3333C0 11.5079 2.77429 9.918 6.87333 9.09093C2.77429 8.2638 0 6.67393 0 4.84847C0 2.17074 5.96953 0 13.3333 0C20.6971 0 26.6667 2.17074 26.6667 4.84847Z"
          fill="#EA2A33"
        />
      </svg>
      <span className="text-lg font-semibold text-gray-800">
        Consent Manager
      </span>
    </div>
  );
};

export default UserHeaderLogo;
