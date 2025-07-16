import {Card} from '../components/Card';
import {Slideshow, SlideshowItem} from '../components/Slideshow';
import './CakeFeatures.scss';

export function CakeFeatures() {
  const items: SlideshowItem[] = [
    {
      title: 'Placeholder',
      imagePath: './GreenGrapeCake.png',
      colour: '#C4D87C',
    },
    {
      title: 'Placeholder',
      imagePath: './GreenGrapeCake.png',
      colour: '#C4D87C',
    },
    {
      title: 'Placeholder',
      imagePath: './GreenGrapeCake.png',
      colour: '#C4D87C',
    },
  ];
  return (
    <Card className="cake-features" backgroundColour="#9db652">
      <Slideshow items={items} />
    </Card>
  );
}
