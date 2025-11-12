import React from 'react';

const TemplateTypeIcon: React.FC<{ width?: number; height?: number }> = ({ width = 40, height = 40 }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                <rect width="25" height="25" fill="url(#pattern0_1233_1489)" />
                <defs>
                    <pattern id="pattern0_1233_1489" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_1233_1489" transform="scale(0.0111111)" />
                    </pattern>
                    <image
                        id="image0_1233_1489"
                        width="90"
                        height="90"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2klEQVR4nO3cv2oUURTH8dFCLfQJFBURAvfeZa1T7DnnJmIsLFP6Bv7BB5CAVj6C1hZ5DgvFQqMgJo2IXbCTKG5sVu4qQiTZP7OZc+fO+X3hljM78+Hm7kzYmapCCCGEEEKFtLS8fC5w3PAUdwLJvuf4NZBsOqJruY+tM/WJLnuO24Hj6P/hOf7yJLdzH2NXkD8fhnwAW6Sf+1iLLgzi9UAynAQ9HiSbuY+1+HqDeHMatifZzX2cVrB/1t75JaIznuP9QPLak3yf+ufDRYzHjWBT/FBvp0QXPMn7FsCMtJDTF19ak2thkzysN5MNIvt0dUEyTJjzYctHR3R2bujxcmERmf/Nzpmx03Zp+6pOaU02i8yzY6dlpjbyeAcc91oANFp4kDyZdJ5udfWiJ/k0Yft9P4i3akPOAJ0fiTMja2BnR+KWIDeNnR2KM6zJ07GH0y797EDTMc/kg/v+0ltZuQJoKgw5lX1mcsdncpHQVChyUdBUMHIx0FQ4chHQ1AHk1kNTR5BbDU0dQk4ddTBVi3OlIZcI7UpELg3alYpcErQrGbkUaNcwsuf4qLIO7RSQVc63zdBOCdk0tFNENgvtlJFNQrsMyOagncIlXLbzbQu0U7pONg3tFG9GzEI75Ts+k9Auw221SWhP8rwO8iK/6jQJHVjeas1kw9AbJ+d+hOMY/gtnDrqfHm1QRjYJ3Uu/oldGNgntSB5oI5uEDhyfaSObhPYsLw77XE/yw5O8SZd+Cz0zckQGoeN2wvYUn6ZlxDPf+At7osnPNQedK0ArBWilAK0UoJUCtFKAVgrQSgFaKUArBWilAK0UoJUCtFKAVgrQSgFaKUAbgO7G69h4gUHyrXnobr1gcFRneI6vmodmvpf7REPuQfFO49BX19ZOB4rvsp8sZxtbbn39VKVReq2xUeytfoznK83+zGy5m9arjn9B7nmWl2m5UJvJCCGEEEIIIYQQQlW7+w0myCJiQajQMgAAAABJRU5ErkJggg=="
                    />
                </defs>
            </svg>
        </>
    );
};

export default TemplateTypeIcon;
