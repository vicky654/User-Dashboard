// components/icons/ConsentIcon.tsx
import React from 'react';

const ConsentIcon: React.FC<{ width?: number; height?: number }> = ({
  width = 40,
  height = 40,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="40" height="40" fill="url(#pattern0_1216_2746)" />
      <defs>
        <pattern
          id="pattern0_1216_2746"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1216_2746"
            transform="scale(0.0111111)"
          />
        </pattern>
        <image
          id="image0_1216_2746"
          width="90"
          height="90"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABv0lEQVR4nO2czU0DMRBGfQJ6AIkLJ/ZDlODZOaWBdEFCl/ycAqWgcA8yRKKAxB47eU9yAX47+9Z7cUoAAAAAAAAAAJBuc76azJ+V5/cpz98y353imsresr/JbH23WFw2ffQPOd9Mef6MlqDWK/tH2Xu7ST5HyfYvu8lk/+YierMWLXteVRddmhy+UYtdk/lrfdHm2+iNKn5tW4iO3uSuh4VoQ/QuegqZaIsXRzosXiqNthMWDQAAANCG0Y9fGuV4Fy1QiI6XKybaEU06nEaLdMQ3WDS6j5U43jmiOUf7wW8MPyx7aqfpaES3VzQ6Xq5aTlxtogUK0fFyxUQ7oklHp0QnQaRjjEZrlAcZLVCIjpcrJtoRTTqcRot0xDdYNLqPlTjeOaI5R/vBbww/LHtqp+loRLdXNDperlpOXG2iBQrR8XLFRDuiSUenRCdBpGOMRmuUBxktUIiOlysm2hFNOpxG68zTMcR1bKmm6Dx/1Rc9yAWDqaLoRhcM2vrcRSv7U3XR5QLUchHqGYve3C+XF6kF5Wrf3mWnOqI3j+7XqSV/kz2vSq96/ECm44neTja/lFw0m2QAAAAAAAAAgNQ3P70BeVgKAyclAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default ConsentIcon;
