import {Card} from '../components/Card';
import './ContactUs.scss';

export function ContactUs() {
  return (
    <Card className="contact-us" backgroundColour="#efe8df">
      <div className="description-section">
        <br />
        <br />
        <br />
        Location <br />
        <br />
        417 Industrial Ave
        <br />
        Vancouver, BC V6A 2P3
        <br />
        <br />
        <br />
        Hours of Operation
        <br />
        Sat & Sun: 11AM - 3PM
      </div>
      <div className="logo-section">
        <img src="/eni_logo.svg" alt="Logo" className="logo" />
      </div>
    </Card>
  );
}
