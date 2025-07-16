import {Card} from '../components/Card';
import './Overview.scss';

export function Overview() {
  return (
    <Card className="overview" backgroundImagePath="./Cream.jpg">
      <div className="overview-content">
        Cakes and pastries <br /> for eni occasion
      </div>
    </Card>
  );
}
