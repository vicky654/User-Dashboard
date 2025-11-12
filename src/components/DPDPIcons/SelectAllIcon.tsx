import React from 'react';

const SelectAllIcon:React.FC<{ width?: number; height?: number }> = ({
  width = 40,
  height = 40,
}) => {
    return (
        <>
            <svg width={width}
      height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                <rect width="20" height="20" fill="url(#pattern0_1382_480)" />
                <defs>
                    <pattern id="pattern0_1382_480" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_1382_480" transform="scale(0.0111111)" />
                    </pattern>
                    <image
                        id="image0_1382_480"
                        width="90"
                        height="90"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkklEQVR4nO3cvWqUQRQG4C8i6gUIigpaBIWdWfYOct5zDBhBy/SWFkks1UK8CyvByhux8AeLmEbwEixlBZNCRmaDSMiPu8t+87fvCy8EdplwHobZj2SZrmMYhmEYhmEYhmEYhmG6myKXHOyJF/3kRH96WGixLs4m9tEDO6sbGxeTIg9FbjjRvdwIPnXFvsTZ0+3kZUTGP+wkO3tyXOQeFrmxdbt36HgmZx8UeetgH/qHho1zD+rzd5wCOveQoYQSGoQOLZXQIHRoqYQGoUNLJTQIHVoqoUHo0FIJDUKHIiq6P4Q9HYhcjY0/e9EDQmPByGt2/9hMos8IjYUhH7g1e3jiTGZXCI1+kWPurK9fIzT6OS6OzCT6nNDoFzm+Ht9HaPRzXMQ44J6H/ZpnfUKjf2RCIw0yoSUN8nJDSzrk5YWWtMhVQDvoOy/22IttOdjnkh/hqoV2Ym+7rlv5u5aInPeir2tDLh56JHLr+Iovz82FnRG5bGjR34PNzQsnrzojdmbksqFhYaBqp688JXYByMVDO9Fvt0Uuz41dCHLx0H5S/Rr/s3HGr1jxsFclPMJVDm2zYxeGXBG0TY9dIHJl0BbP7L3/ndlOdVTCmVw1tJ9uZxe1kyuGtrmwcyJXDG0zYedGrhzapsIuAbkBaDsTuxTkRqBt8jQSv9RyBFnuPsjxdNE0tD/E/u5FXwzFHjnom/hHqdy4TUL7wktoEDq0VEKD0KGlEhqEDi2V0CB0aKmEBqFDSyU0CB1aagpoXscm+qN/aF4wGBJdMIid3IP63BXb6h06XoAaL0LNPiyydff0b8UuOPFq3yXF3h2ZXe9S5nBn63Y8rxr/gBw76Pt4XCTbyQzDMAzDMAzDMAzDMF3Z+QNqoIiO1sTuKAAAAABJRU5ErkJggg=="
                    />
                </defs>
            </svg>
        </>
    );
}

export default SelectAllIcon;
