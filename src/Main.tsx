import { Overview } from "./overview/Overview";
import { Divider } from "./components/Divider";
import { AboutUs } from "./aboutus/AboutUs";

export function Main(){
    return(
        <div className="main">
            <Overview/>
            <Divider/>
            <AboutUs/>
            <Divider titleElement={<div style={{color: '#9DB652'}}>JUNE CAKE FEATURES</div>}/>
        </div>
    );
}
