import './Divider.scss'
import { useRef, useState, useEffect, ReactNode } from 'react';


export function Divider({titleElement}:{titleElement?: ReactNode}){
    const dividerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    // Since we aren't sure how tall the divider is, we need to dynamically fetch
    // the height of the divider in order to set a negative margin on it
    useEffect(() => {
        const element = dividerRef.current;
        const resizeObserver = new ResizeObserver(() => {
        if (element) {
            setHeight(element.getBoundingClientRect().height);
            setWidth(element.getBoundingClientRect().height)
        }
        });

        if (element) {
            resizeObserver.observe(element);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [dividerRef, setHeight, setWidth]);

    return(
        <div ref={dividerRef} className="divider" style={{margin: `-${height/2}px 0px`}}>
            <img
                src="/Divider.svg"
                alt="divider"
                className="frosting"
            />
            <div className="divider-title">{titleElement}</div>
        </div>
    );
}
