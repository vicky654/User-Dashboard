import React from 'react';

const ScanIcon: React.FC<{ width?: number; height?: number }> = ({ width = 40, height = 40 }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                <rect width="20" height="20" fill="url(#pattern0_1764_7399)" />
                <defs>
                    <pattern id="pattern0_1764_7399" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_1764_7399" transform="scale(0.0111111)" />
                    </pattern>
                    <image
                        id="image0_1764_7399"
                        width="90"
                        height="90"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEU0lEQVR4nO2dzWsVVxTAHyZaxURb0YVgoVoo9R+Qbv1A69e2tl24sTYotF3rsosad9ZoBBGk+LFx1SpK1600khJ0obWrajXaSmj9Klip/srBm1Iec+7MvTNzncw7PxgIj8k5N7/cd+bOmfuSTscwDMMwDMMwDMMwDKOHAOYCnwGXgMcY04iLMeBT4JWykpcBV/4LbWhcFldlZrJJDpMdPrNduTDC+CRGtNRkI4wfYkQ/CkxiwKMY0UYEJjoRJjoRJjoRJjoRJjoRJjoRJjoRJjoRJjoRJjoRJnqmiQ4O1FIw0Wkw0Ykw0Ykw0Ykw0Ykw0Ykw0Ykw0b0kGpgD7AfuAJPAsLxW8PyU5I6tDj+VBXKD72Y48PyUDKf0U1kgZWbeDTw/JXdT+qkskHtLdjMZeH4d/A6cAfYAG4CVwFLZZ5jST2WBlFKwL/D8qrgPjAKrgb5gETX4qSyQu7gNu5k6WfBiOH1+VdwD9gILg3/4mSK6FwAOAP+Y6AQA7wC/mOgEAK8B35roLoA3gd3AaWACmAKeumPKvXYK2AWs6BQAmA181fOigT7gA+AiYTwHvgfez1uxALOAEz0rGlgPXKc814C1Obn629jr+BV41RNzHnCU6jkSc4Pjk5VJQ3odz32zC1gCjFMf8vmexbFuuwebSUNuwb/MkfwT9XOtEtla9AaIvq+VDFcuxguWnRHgXeBtYL475OuNwCHgVoE4Y6XLiBa5Ab2Ozz1x8mrybeCjIj0PubABOwtMgtEiTnyJMnnJvY4HwCLP6sLH18BghIdB4Juc2GtC41Yi+iWtk697RByUdW6J+LNcqdG4Gt0ZnGGiP/RIOF9Fe9TJlneFxnu9IPqipyYPVphngWet/12rRfOidyHr6ix21JDvYyWXjOGNNove7VnC9dWQr9+9U7IYarPo08pQR2rMeVjJebLNoieUoW6sMedmJeePbRY9pQz1rRpzyh1kFvfaLPpvZagDNeYcUHI+6UXRgzXmlGVeFo/bLHqqQaXjRptFTzToYjjeZtGnlKEeqjGn7HzK4libRe9Shnor6hleuRuW7W0WvcJzC76zhnxDSq5nwOsxAZvGH1pP220JyGKy4qbSQtniq+S6EBu0iWxSxir7LjQuVNgmPevJs6VNoo97Gv/ysFRjpILGvzxH1BiPjk8zeeh5lLUu53tlNi6ILBfnPHGlNq+Kktxg0XkPZ2Vzi487rp/cX3B1MeSpydP8XOpJOM3lT892g7kF/3jtbbcW3uQ+XjHgjpXuZmTUs4TTrgPV7V6aCQCLc+p1XZzvVdljJjsBroxot8qxPHM12WR3I5tb3L6LssgSbpX7BUpNNtnKOnibbAnw3K5rM1ikbv3/OtnJFpkmWwNY7pZtJ+UZn+tny8ODv4CbbuYekwaRr3cRILvcvw4xOia7gbLVnbRGAG43rG/H6W8h8Yx42eomfCMCqcVKGfkiJp7R0XGy97kGlhzy9Zx/AWqPu9hsd7FnAAAAAElFTkSuQmCC"
                    />
                </defs>
            </svg>
        </>
    );
};

export default ScanIcon;
