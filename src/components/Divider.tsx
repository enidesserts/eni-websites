import './Divider.scss';
import {useRef, useState, useEffect, ReactNode} from 'react';

export function Divider({titleElement, isLast}: {titleElement?: ReactNode; isLast?: boolean}) {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Since we aren't sure how tall the divider is, we need to dynamically fetch
  // the height of the divider in order to set a negative margin on it
  useEffect(() => {
    const element = dividerRef.current;
    const resizeObserver = new ResizeObserver(() => {
      if (element) {
        setHeight(element.getBoundingClientRect().height);
      }
    });

    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [dividerRef, setHeight]);

  return (
    <div
      ref={dividerRef}
      className={`divider ${isLast && 'last'}`}
      style={{margin: `-${height / 2}px 0px`}}
    >
      <div className={`svg-container ${!isLast ? 'frosting' : 'bottom-frosting'}`} />
      <div className="divider-title">{titleElement}</div>
    </div>
  );
}
