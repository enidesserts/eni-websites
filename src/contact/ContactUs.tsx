import {Card} from '../components/Card';
import {Oval} from '../components/Oval';
import './ContactUs.scss';

export function ContactUs() {
  return (
    <Card className="contact-us" backgroundColour="#efe8df">
      <div className="description-section">
        <div className="text-section">
          <p>
            Location <br />
            <a
              className="location-url"
              rel="noreferrer"
              target="_blank"
              href="https://maps.app.goo.gl/tat81NuT6ZkK7UbC6?g_st=ipc"
            >
              417 Industrial Ave
            </a>
            <br />
            Vancouver, BC V6A 2P3
          </p>
          <p>
            Hours of Operation <br /> Sat: 11AM - 3PM
          </p>
        </div>
        <div className="icon-section">
          <a className="oval-icon" href="https://www.instagram.com/eni.desserts/">
            <Oval
              ovalFillColour="white"
              content={<img className="contact-icon-ig" src="/Instagram.svg" alt="instagram" />}
            />
          </a>
          <a className="oval-icon" href="mailto:eni.desserts@gmail.com">
            <Oval
              ovalFillColour="white"
              content={<img className="contact-icon-mail" src="/Mail.svg" alt="mail" />}
            />
          </a>
        </div>
      </div>
      <div className="logo-section">
        <img src="/eni_logo.svg" alt="Logo" className="logo" />
      </div>
    </Card>
  );
}
