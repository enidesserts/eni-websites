import {Card} from '../components/Card';
import './AboutUs.scss';

export function AboutUs() {
  return (
    <Card className="about-us" backgroundColour="#efe8df">
      <div className="about-us-content">
        Eni, a micro bakery in Vancouver BC, invites you to join our journey of exploration and
        discovery. Our offerings are ever-evolving, as our curious team loves to experiment and
        challenge ourselves with new creations - so you'll always find something new to try!
      </div>
    </Card>
  );
}
