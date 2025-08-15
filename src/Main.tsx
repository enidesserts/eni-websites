import {Overview} from './overview/Overview';
import {Divider} from './components/Divider';
import {AboutUs} from './aboutus/AboutUs';
import {TopBar} from './components/TopBar';
import {CakeFeatures} from './cakefeatures/CakeFeatures';
import {Location} from './location/Location';
import {ContactUs} from './contact/ContactUs';
import {OrderButton} from './components/OrderButton';
import Menu from './menu/Menu';

export function Main() {
  return (
    <div className="main">
      <TopBar />
      <Overview />
      <Divider />
      <AboutUs />
      <Divider titleElement={<div style={{color: '#9DB652'}}>JUNE CAKE FEATURES</div>} />
      <CakeFeatures />
      <Divider />
      <Location />
      <Divider titleElement={<div style={{color: '#EA7E42'}}>JUNE CAKE FEATURES</div>} />
      <Menu />
      <Divider />
      <ContactUs />
      <Divider isLast />

      <OrderButton />
    </div>
  );
}
