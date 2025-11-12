import React from 'react';

const ExportIcon: React.FC<{ width?: number; height?: number }> = ({ width = 40, height = 40 }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8337 7.5H12.5003V2.5H7.50033V7.5H4.16699L10.0003 13.3333L15.8337 7.5ZM4.16699 15V16.6667H15.8337V15H4.16699Z" fill="white" />
            </svg>
        </>
    );
};

export default ExportIcon;
