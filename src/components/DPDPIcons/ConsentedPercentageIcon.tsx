import React from 'react';

const ConsentedPercentageIcon: React.FC<{ width?: number; height?: number }> = ({ width = 40, height = 40 }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L13.0622 10.5H0.937822L7 0Z" fill="#0E751C" />
            </svg>
        </>
    );
};

export default ConsentedPercentageIcon;
