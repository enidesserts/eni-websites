import {Card} from '../components/Card';
import './Menu.scss';

type MenuItem = {
  name: string;
  price: string;
  description: string;
  imagePath: string;
};

export default function Menu() {
  const cookieMenuItems: MenuItem[] = [
    {
      name: 'Ube Leche Flan',
      price: '$4.50',
      description: 'Ube cookie, ube halaya, leche flan',

      imagePath: './menuitems/Cookie/ube_cookie.png',
    },
    {
      name: 'Thai Tea Ganache',
      price: '$4.50',
      description: 'Thai tea cookie, thai tea ganache',

      imagePath: './menuitems/Cookie/thaitea_cookie.png',
    },
  ];

  const cakeMenuItems: MenuItem[] = [
    {
      name: 'Ube Cream Cheese',
      price: '$10',
      description: 'Ube sponge cake, cream cheese mousse, ube whipped ganache, leche flan',
      imagePath: './menuitems/CakeBox/ube_cakebox.png',
    },
    {
      name: 'Coconut Pandan',
      price: '$10',
      description:
        'Pandan sponge cake, coconut whipped ganache, macapuno strings, pandan jellies, toasted coconut',
      imagePath: './menuitems/CakeBox/pandan_cakebox.png',
    },
  ];

  return (
    <Card className="menu" backgroundColour="#EFE8DF">
      <MenuTable menuItems={cookieMenuItems} title="COOKIES" />
      <MenuTable menuItems={cakeMenuItems} title="CAKE BOXES" />
    </Card>
  );
}

/**
 * This component renders a table for the menu
 * TODO: it always assumes there will be an even number of items, we should be able to acocunt for odd items
 */
function MenuTable({
  menuItems,
  title,
  footer,
}: {
  menuItems: MenuItem[];
  title: string;
  footer?: React.ReactNode;
}) {
  return (
    <div className="menu-table">
      <div className="title">{title}</div>
      {menuItems.map((item) => (
        <MenuItemCell item={item} tableHasFooter={!!footer} />
      ))}
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
}

/**
 * A single entry in the menu table. It just contains a brief section for text and an image
 */
function MenuItemCell({item, tableHasFooter}: {item: MenuItem; tableHasFooter?: boolean}) {
  return (
    <div className={`menu-item ${!tableHasFooter ? 'without-footer' : ''}`}>
      <div className="item-description">
        <p>
          {item.name} {item.price}
        </p>
        <p>{item.description}</p>
      </div>
      <div className="item-image">
        <img src={item.imagePath} alt="Menu item" />
      </div>
    </div>
  );
}
