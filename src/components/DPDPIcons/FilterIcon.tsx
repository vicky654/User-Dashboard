<<<<<<< HEAD
import React from 'react';

const FilterIcon: React.FC<{ width?: number; height?: number }> = ({ width = 40, height = 40 }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21 6H19M21 12H16M21 18H16M7 20V13.5612C7 13.3532 7 13.2492 6.97958 13.1497C6.96147 13.0615 6.93151 12.9761 6.89052 12.8958C6.84431 12.8054 6.77934 12.7242 6.64939 12.5617L3.35061 8.43826C3.22066 8.27583 3.15569 8.19461 3.10948 8.10417C3.06849 8.02393 3.03853 7.93852 3.02042 7.85026C3 7.75078 3 7.64677 3 7.43875V5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H13.4C13.9601 4 14.2401 4 14.454 4.10899C14.6422 4.20487 14.7951 4.35785 14.891 4.54601C15 4.75992 15 5.03995 15 5.6V7.43875C15 7.64677 15 7.75078 14.9796 7.85026C14.9615 7.93852 14.9315 8.02393 14.8905 8.10417C14.8443 8.19461 14.7793 8.27583 14.6494 8.43826L11.3506 12.5617C11.2207 12.7242 11.1557 12.8054 11.1095 12.8958C11.0685 12.9761 11.0385 13.0615 11.0204 13.1497C11 13.2492 11 13.3532 11 13.5612V17L7 20Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </>
    );
}

export default FilterIcon;
=======
// import React from 'react'

// export default function FilterIcon() {
//   return (
//     <div>FilterIcon</div>
//   )
// }

// components/icons/ConsentManagerIcon.tsx
import React from 'react';

const FilterIcon: React.FC<{ width?: number; height?: number }> = ({
  width = 40,
  height = 40,
}) => {
  return (
<svg width={width}
      height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
<rect width="20" height="20" fill="url(#pattern0_1764_7399)"/>
<defs>
<pattern id="pattern0_1764_7399" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_1764_7399" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_1764_7399" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEU0lEQVR4nO2dzWsVVxTAHyZaxURb0YVgoVoo9R+Qbv1A69e2tl24sTYotF3rsosad9ZoBBGk+LFx1SpK1600khJ0obWrajXaSmj9Klip/srBm1Iec+7MvTNzncw7PxgIj8k5N7/cd+bOmfuSTscwDMMwDMMwDMMwDKOHAOYCnwGXgMcY04iLMeBT4JWykpcBV/4LbWhcFldlZrJJDpMdPrNduTDC+CRGtNRkI4wfYkQ/CkxiwKMY0UYEJjoRJjoRJjoRJjoRJjoRJjoRJjoRJjoRJjoRJjoRJnqmiQ4O1FIw0Wkw0Ykw0Ykw0Ykw0Ykw0Ykw0Ykw0b0kGpgD7AfuAJPAsLxW8PyU5I6tDj+VBXKD72Y48PyUDKf0U1kgZWbeDTw/JXdT+qkskHtLdjMZeH4d/A6cAfYAG4CVwFLZZ5jST2WBlFKwL/D8qrgPjAKrgb5gETX4qSyQu7gNu5k6WfBiOH1+VdwD9gILg3/4mSK6FwAOAP+Y6AQA7wC/mOgEAK8B35roLoA3gd3AaWACmAKeumPKvXYK2AWs6BQAmA181fOigT7gA+AiYTwHvgfez1uxALOAEz0rGlgPXKc814C1Obn629jr+BV41RNzHnCU6jkSc4Pjk5VJQ3odz32zC1gCjFMf8vmexbFuuwebSUNuwb/MkfwT9XOtEtla9AaIvq+VDFcuxguWnRHgXeBtYL475OuNwCHgVoE4Y6XLiBa5Ab2Ozz1x8mrybeCjIj0PubABOwtMgtEiTnyJMnnJvY4HwCLP6sLH18BghIdB4Juc2GtC41Yi+iWtk697RByUdW6J+LNcqdG4Gt0ZnGGiP/RIOF9Fe9TJlneFxnu9IPqipyYPVphngWet/12rRfOidyHr6ix21JDvYyWXjOGNNove7VnC9dWQr9+9U7IYarPo08pQR2rMeVjJebLNoieUoW6sMedmJeePbRY9pQz1rRpzyh1kFvfaLPpvZagDNeYcUHI+6UXRgzXmlGVeFo/bLHqqQaXjRptFTzToYjjeZtGnlKEeqjGn7HzK4libRe9Shnor6hleuRuW7W0WvcJzC76zhnxDSq5nwOsxAZvGH1pP220JyGKy4qbSQtniq+S6EBu0iWxSxir7LjQuVNgmPevJs6VNoo97Gv/ysFRjpILGvzxH1BiPjk8zeeh5lLUu53tlNi6ILBfnPHGlNq+Kktxg0XkPZ2Vzi487rp/cX3B1MeSpydP8XOpJOM3lT892g7kF/3jtbbcW3uQ+XjHgjpXuZmTUs4TTrgPV7V6aCQCLc+p1XZzvVdljJjsBroxot8qxPHM12WR3I5tb3L6LssgSbpX7BUpNNtnKOnibbAnw3K5rM1ikbv3/OtnJFpkmWwNY7pZtJ+UZn+tny8ODv4CbbuYekwaRr3cRILvcvw4xOia7gbLVnbRGAG43rG/H6W8h8Yx42eomfCMCqcVKGfkiJp7R0XGy97kGlhzy9Zx/AWqPu9hsd7FnAAAAAElFTkSuQmCC"/>
</defs>
</svg>

  );
};

export default FilterIcon;





>>>>>>> c4c06e637b55c413ba7a3f8a983e54f600caf793
