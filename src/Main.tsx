import {Overview} from './overview/Overview';
import {Divider} from './components/Divider';
import {AboutUs} from './aboutus/AboutUs';
import {TopBar} from './components/TopBar';
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
      <Location />
      <Divider />
      <Menu />
      <Divider />
      <AboutUs />
      <Divider />
      <ContactUs />
      <Divider isLast />

      <OrderButton />
    </div>
  );
}
