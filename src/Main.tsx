import { Overview } from "./overview/Overview";
import { Divider } from "./components/Divider";
import { AboutUs } from "./aboutus/AboutUs";
import { TopBar } from "./TopBar";
import { CakeFeatures } from "./cakefeatures/CakeFeatures";

export function Main(){
    return(
        <div className="main">
            <TopBar/>
            <Divider/>
            <Overview/>
            <Divider/>
            <AboutUs/>
            <Divider titleElement={<div style={{color: '#9DB652'}}>JUNE CAKE FEATURES</div>}/>
            <CakeFeatures/>
        </div>
    );
}
