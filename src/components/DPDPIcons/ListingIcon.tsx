// components/icons/ListingIcon.tsx
import React from 'react';

const ListingIcon: React.FC<{ width?: number; height?: number }> = ({
  width = 40,
  height = 40,
}) => {
  return (
  <svg width={width}
      height={height} viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_d_1251_1573)">
<rect x="4" width="45" height="45" fill="url(#pattern0_1251_1573)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_1251_1573" x="0" y="0" width="53" height="53" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1251_1573"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1251_1573" result="shape"/>
</filter>
<pattern id="pattern0_1251_1573" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_1251_1573" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_1251_1573" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQklEQVR4nO3cS0oDQRQF0IsDQ9xCtmiyGD/oioyOdCUq/qYtDSU4MKQ7n2cI58CD0GmK4tFUdcilEgAAAAAANjRJskhyn+SjVf953r5jB2ZJnpJ0K+qx3cMWJmua/LvZnuwtLAY0+afOB455luQ6yeuIsf+jXpJcJZmmwMOIiS0Hjnl7AE0cU/189+59xITeBox3kuTrAJo3pj7bvDU6R9BoS0dykwLzPWyG0ySXbbPpDriek1xUbYaT9uq2blL9PacVEzpmszXN9oNlh07b0rBsbyJ93bVrnmQAAAAA/iTXUUCuo4BcRxG5jsh1dEX/Hcp1pKbRch05okbLdUSuo5PrYCNyHYXkOgAAAAAYTa6jgFxHAbmOInIdkevo5DpWc17HCg5GiVxHV7R0OK8j+22w8zqOlVxHIbkOAAAAAAAy0Dd4tmCNEUvuHwAAAABJRU5ErkJggg=="/>
</defs>
</svg>
  );
};

export default ListingIcon;


