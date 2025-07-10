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
    <div className="cake-features">
      <Slideshow items={items} />
    </div>
  );
}
