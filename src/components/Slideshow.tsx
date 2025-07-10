import './Slideshow.scss';
import {useState} from 'react';

export interface SlideshowItem {
  title: string;
  imagePath: string;
  colour: string;
}

export function Slideshow({items}: {items: SlideshowItem[]}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // TODO: Add buttons to cycle through the ovals
  return (
    <div className="slideshow">
      {items.map((item, index) => (
        <OvalItem title={item.title} key={index} imagePath={item.imagePath} colour={item.colour} />
      ))}
    </div>
  );
}

function OvalItem({title, imagePath, colour}: {title: string; imagePath: string; colour: string}) {
  return (
    <div className="item-container">
      <div className="oval-item">
        {/* This is pulled directly from public/oval_outside */}
        <svg viewBox="0 0 1030 1094.94" className="outer-oval">
          <path
            d="M649.55,0C296.92,0,0,361.89,0,705.22c0,241.26,148.47,389.72,380.45,389.72,361.89,0,649.55-361.89,649.55-695.94C1030,167.03,881.52,0,649.55,0Z"
            fill={colour}
          />
        </svg>

        {/* This is pulled directly from public/oval_inside */}
        <svg viewBox="0 0 1030 1094.94" className="inner-oval">
          <path
            id="circlePath"
            d="M649.55,75.98c90.99,0,167.66,30.57,221.7,88.41,26.11,27.94,46.47,61.71,60.52,100.36,14.77,40.64,22.26,85.81,22.26,134.26,0,71.59-15.59,148.1-45.09,221.25-29.37,72.83-72.55,142.54-124.87,201.6-54.21,61.19-115.98,109.45-183.58,143.44-70.83,35.61-144.86,53.67-220.03,53.67-48.05,0-91.89-7.41-130.32-22.01-36.1-13.72-67.29-33.79-92.71-59.66-53.28-54.21-81.44-134.47-81.44-232.08,0-37.06,4-75.27,11.88-113.54,7.78-37.76,19.37-75.76,34.45-112.93,29.93-73.78,73.87-144.49,127.07-204.47,53.91-60.78,117.64-110.79,184.29-144.62,70.19-35.62,142.82-53.68,215.87-53.68"
            fill={colour}
          />
          <text className="title">
            <textPath href="#circlePath" startOffset="85%">
              {title}
            </textPath>
          </text>
        </svg>
        <div className="content">
          <img className="image" src={imagePath} alt="Order Now" />
        </div>
      </div>
    </div>
  );
}
