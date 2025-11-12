import React from 'react';

const NoticeToSeekConsentIcon: React.FC<{ width?: number; height?: number }> = ({ width = 40, height = 40 }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16634 12.5L7.49967 12.5V17.5H12.4997V12.5H15.833L9.99967 6.66667L4.16634 12.5ZM15.833 5V3.33333L4.16634 3.33333V5L15.833 5Z" fill="white" />
            </svg>
        </>
    );
};

export default NoticeToSeekConsentIcon;
