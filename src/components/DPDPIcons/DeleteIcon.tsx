import React from 'react';

const DeleteIcon: React.FC<{ width?: number; height?: number }> = ({
  width = 40,
  height = 40,
}) => {
    return (
        <>
            <svg width={width}
      height={height} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.2 12.4479C1.2 13.3017 1.91993 14 2.80001 14H9.20003C10.0801 14 10.8 13.3017 10.8 12.4479V3.5H1.2V12.4479ZM12 1.16667H9L7.99556 0H4.00448L3 1.16667H0V2.33333H12V1.16667Z"
                    fill="white"
                />
            </svg>
        </>
    );
}

export default DeleteIcon;
