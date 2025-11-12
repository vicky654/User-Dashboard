import React from 'react';

const TableRowIcon: React.FC<{ width?: number; height?: number }> = ({ width = 40, height = 40 }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.5417 12H21.875M13.5417 8H21.875M13.5417 16H21.875M6.25 7V17M6.25 17L3.125 14M6.25 17L9.375 14"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </>
    );
};

export default TableRowIcon;
