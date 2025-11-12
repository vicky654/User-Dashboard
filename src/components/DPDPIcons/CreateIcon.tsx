<<<<<<< HEAD
import React from "react";


=======
// components/icons/CreateIcon.tsx
import React from 'react';
>>>>>>> c4c06e637b55c413ba7a3f8a983e54f600caf793

const CreateIcon: React.FC<{ width?: number; height?: number }> = ({
  width = 40,
  height = 40,
}) => {
  return (
<<<<<<< HEAD
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="17" height="17" fill="url(#pattern0_1763_7183)" />
      <defs>
        <pattern
          id="pattern0_1763_7183"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1763_7183" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_1763_7183"
          width="90"
          height="90"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEB0lEQVR4nO2czUsVURTABwLNfVBarUKqRWiWRgulct3/UVC5Stv1sfFFYbQIS4igfV9ISC3bWBvpw9y3MCHNBFuoSb+4zNWFzcybe+/Mnfdmzg8ePJ7zzpz5cb0z586ZFwSCIAiCIAiCIAiCIAgVAtgNDAEfgN8IWygX74ErQKur5APAp+3QQhwflSuXkSySzWSbj2w9XQhmXLYRreZkwYxpG9GrhjsRYNVGtGCBiPaEiPaEiPaEiPaEiPaEiPaEiPaEiPaEiPaEiPaEiG420caBSgoi2g8i2hMi2hMi2hMi2hMi2hMi2hMiukqigRbgNvAdmAdq6rOU2/ukbm55+MkskE5+JzXD7X1S8+kns0AxI3PBcHufLPj0k1kg/S+5k3nD7fPkLzALPAAuAmd9+sksUMxUMGq4fR5y3wEXgL3GQv7PeTpqJzaBIkn53RYtb97gZFjLaWSvA4+Bo8YS6h/nSeAJsFaI6KoBHASeimhPAIM2X5IR7YOyiwZa1dUGcAt4AcwBy8CGntfV+6/6bzeBM87PqlRJNHACmABWLE6sv4BHQE+WCZVKNNADvCE7poDuQkV7XusYrZNLG3Af2CR7/gD31INVNo63EoykwdY63gK7EuIeBj7j54msziJE+yjBvwF7EmKeApbwxyLQV0bR5+tILuJhp1Vj2XGRGmStY6rOdOFzJEeN7PTTSFyUBljr2ACOJJz4fMzJaebsdCfIuAhBA0N4dWGLKlKuAu36Naw/s2UsbdKRBI19nbzpIGY4IuaI46VfV5rEIwkaFNyLkfaImPscY75Ok3gkQeOW1U4kxHa92XC8XvJGCRUJ4dqFEwmxXRmvl7xRQgWvwq242kiI78pyYjuDaUJFAZzLQEaeohUDSQdglFBREK4nO5MQPwtuJB2AUUJFAbzKwkRC/Cx4nnQARgkVBeGdkdTFSIb7NSlqZssgesmmGMlw/2mKmsUyiF5PcaDtOe4/TVGzVhXRHTnuf39VRC+lONCRHPd/rSpTx1yKA13Xc2lmI1vF0jHzORkWyGBMni+zCJ6zh2fNJHooJk/V3OJMzh6uN5PoiZg8VbeRMzl76G8m0bMJi0qqg8iJHD38tFpUKphDlVkmLZhLCbexnMhx4d+9bayRIOyFc6HDshhJYjIoG0C3viFqy4hlMRKHyuVYUEYIGw5t2S5qDIuROO4EZYXw5/JnKB71k/1tQZkBOnVbVlH8iLs6Kh1AX4FNjr1BlQB69ejyhSpMTgdVhHAaUQ2HeTNTmemizglyzPHSLw4V867ToxVlA+hSvXC6WnNFxZgs7XVyFqheOOCh7iCymYfHS1dWBzmim98HVHOL6rvQPyuhboupIkW91PsvatFeb9Nv80s1W/wD8uG/gNASoIAAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
=======
<svg width={width}
      height={height} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
<rect width="17" height="17" fill="url(#pattern0_1763_7183)"/>
<defs>
<pattern id="pattern0_1763_7183" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_1763_7183" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_1763_7183" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEB0lEQVR4nO2czUsVURTABwLNfVBarUKqRWiWRgulct3/UVC5Stv1sfFFYbQIS4igfV9ISC3bWBvpw9y3MCHNBFuoSb+4zNWFzcybe+/Mnfdmzg8ePJ7zzpz5cb0z586ZFwSCIAiCIAiCIAiCIAgVAtgNDAEfgN8IWygX74ErQKur5APAp+3QQhwflSuXkSySzWSbj2w9XQhmXLYRreZkwYxpG9GrhjsRYNVGtGCBiPaEiPaEiPaEiPaEiPaEiPaEiPaEiPaEiPaEiPaEiG420caBSgoi2g8i2hMi2hMi2hMi2hMi2hMi2hMiukqigRbgNvAdmAdq6rOU2/ukbm55+MkskE5+JzXD7X1S8+kns0AxI3PBcHufLPj0k1kg/S+5k3nD7fPkLzALPAAuAmd9+sksUMxUMGq4fR5y3wEXgL3GQv7PeTpqJzaBIkn53RYtb97gZFjLaWSvA4+Bo8YS6h/nSeAJsFaI6KoBHASeimhPAIM2X5IR7YOyiwZa1dUGcAt4AcwBy8CGntfV+6/6bzeBM87PqlRJNHACmABWLE6sv4BHQE+WCZVKNNADvCE7poDuQkV7XusYrZNLG3Af2CR7/gD31INVNo63EoykwdY63gK7EuIeBj7j54msziJE+yjBvwF7EmKeApbwxyLQV0bR5+tILuJhp1Vj2XGRGmStY6rOdOFzJEeN7PTTSFyUBljr2ACOJJz4fMzJaebsdCfIuAhBA0N4dWGLKlKuAu36Naw/s2UsbdKRBI19nbzpIGY4IuaI46VfV5rEIwkaFNyLkfaImPscY75Ok3gkQeOW1U4kxHa92XC8XvJGCRUJ4dqFEwmxXRmvl7xRQgWvwq242kiI78pyYjuDaUJFAZzLQEaeohUDSQdglFBREK4nO5MQPwtuJB2AUUJFAbzKwkRC/Cx4nnQARgkVBeGdkdTFSIb7NSlqZssgesmmGMlw/2mKmsUyiF5PcaDtOe4/TVGzVhXRHTnuf39VRC+lONCRHPd/rSpTx1yKA13Xc2lmI1vF0jHzORkWyGBMni+zCJ6zh2fNJHooJk/V3OJMzh6uN5PoiZg8VbeRMzl76G8m0bMJi0qqg8iJHD38tFpUKphDlVkmLZhLCbexnMhx4d+9bayRIOyFc6HDshhJYjIoG0C3viFqy4hlMRKHyuVYUEYIGw5t2S5qDIuROO4EZYXw5/JnKB71k/1tQZkBOnVbVlH8iLs6Kh1AX4FNjr1BlQB69ejyhSpMTgdVhHAaUQ2HeTNTmemizglyzPHSLw4V867ToxVlA+hSvXC6WnNFxZgs7XVyFqheOOCh7iCymYfHS1dWBzmim98HVHOL6rvQPyuhboupIkW91PsvatFeb9Nv80s1W/wD8uG/gNASoIAAAAAASUVORK5CYII="/>
</defs>
</svg>
>>>>>>> c4c06e637b55c413ba7a3f8a983e54f600caf793
  );
};

export default CreateIcon;
<<<<<<< HEAD
=======



>>>>>>> c4c06e637b55c413ba7a3f8a983e54f600caf793
