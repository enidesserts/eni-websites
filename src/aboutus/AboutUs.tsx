import {Card} from '../components/Card';
import './AboutUs.scss';
import {Oval} from '../components/Oval';

export function AboutUs() {
  return (
    <Card className="about-us" backgroundColour="#FFCB00">
      <div className="about-us-content">
        <p>eni: is in, is among, has place, is present</p>
        <p>
          Celine and Haluka have been friends for over 15 years, and Brian joined the duo soon
          after. For years, we talked about starting a project together, a fun idea we always put on
          the back burner.
        </p>
        <p>
          Then, at the end of 2024, we finally decided to make it happen. With Celine’s
          long-standing love for baking, Haluka’s incredible talent for design, and Brian’s passion
          for creating content, we knew we had everything we needed to get started. We're so excited
          to have you join us on this journey!
        </p>
      </div>
      <div className="about-us-image">
        <Oval backgroundImagePath="/EniTeamPic.jpg" />
      </div>
    </Card>
  );
}
