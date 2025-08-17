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
      name: 'Cheddar Cheese Ganache Cookie',
      price: '$4.50',
      description:
        'Cheese cookie with a cheese white chocolate ganache, topped with a cheese cracker',

      imagePath: './menuitems/CheddarCheeseGanacheCookie.png',
    },
    {
      name: 'Matcha Chocolate Ganache Cookie',
      price: '$4.50',
      description: 'Matcha and chocolate cookie with a matcha white chocolate ganache',
      imagePath: './menuitems/MatchaChocolateGanacheCookie.png',
    },
    {
      name: 'Chocolate Chip Cookie',
      price: '$3.50',
      description: 'Your classic cookie with milk and dark chocolate chunks',
      imagePath: './menuitems/ChocolateChipCookie.png',
    },
    {
      name: 'Eni Cookie Trio',
      price: '$12',
      description: 'Bundle the three cookies, perfect for sharing ',
      imagePath: './menuitems/CookieTrio.png',
    },
  ];

  const cakeMenuItems: MenuItem[] = [
    {
      name: 'Strawberry Earl Grey Cake Box',
      price: '$10',
      description:
        'Earl grey whipped ganache, strawberry cremeux, fresh strawberries, chiffon cake',
      imagePath: './menuitems/StrawberryEarlGreyCakeBox.png',
    },
    {
      name: 'Green Grape Jasmine Cake Box',
      price: '$10',
      description: 'Jasmine whipped ganache, jasmine jelly, fresh grapes, chiffon cake',
      imagePath: './menuitems/GreenGrapeJasmineCakeBox.png',
    },
    {
      name: 'Mango Matcha Cake Box',
      price: '$10',
      description: 'Matcha whipped ganache, fresh mangoes, chiffon cake',
      imagePath: './menuitems/MangoMatchaCakeBox.png',
    },
    {
      name: 'Lychee Genmaicha Cake Box',
      price: '$10',
      description: 'Genmaicha whipped ganache, lychees, coconut jelly, chiffon cake',
      imagePath: './menuitems/LycheeGenmaichaCakeBox.png',
    },
  ];

  return (
    <Card className="menu" backgroundColour="#EFE8DF">
      <MenuTable menuItems={cookieMenuItems} title="COOKIES" />
      <MenuTable
        menuItems={cakeMenuItems}
        title="CAKE BOXES"
        footer={
          <div className="footer-cell">
            <div className="item-description">
              <p>Eni Cake Box Set $35</p>
              <p>One of each flavour </p>
            </div>
            <div className="item-image">
              <img src="./menuitems/CakeBoxSet.png" alt="Cake Box Set" />
            </div>
          </div>
        }
      />
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
