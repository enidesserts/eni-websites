import {Card} from '../components/Card';
import './Menu.scss';

type MenuItem = {
  name: string;
  price: string;
  description: string[];
  imagePath: string;
};

export default function Menu() {
  const menuItems: MenuItem[] = [
    {
      name: 'Cheddar Cheese Ganache Cookie',
      price: '$4.50',
      description: [
        'cheese cookie with a cheese white chocolate ganache, topped with a cheese cracker',
      ],
      imagePath: './CheeseCookie.png',
    },
    {
      name: 'Matcha Chocolate Ganache Cookie',
      price: '$4.50',
      description: ['matcha and chocolate cookie with a matcha white chocolate ganache'],
      imagePath: './MatchaChocolateCookie.png',
    },
    {
      name: 'Chocolate Chip Cookie',
      price: '$3.50',
      description: ['Your classic cookie with milk and dark chocolate chunks'],
      imagePath: './ChocolateChipCookie.png',
    },
    {
      name: 'Chocolate Chip Cookie',
      price: '$3.50',
      description: ['Your classic cookie with milk and dark chocolate chunks'],
      imagePath: './ChocolateChipCookie.png',
    },
  ];

  return (
    <Card className="menu" backgroundColour="#EFE8DF">
      <MenuTable menuItems={menuItems} title="COOKIES" />
      <MenuTable
        menuItems={menuItems}
        title="CAKE BOXES"
        footer={
          <div className="footer-cell">
            <div className="item-description">
              <p>Eni Cookie Trio $12</p>
              <p>Bundle the three cookies, perfect for sharing</p>
            </div>
            <div className="item-image">
              <img src="./GreenGrapeCake.png" alt="Order Now" />
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
        <MenuItem item={item} tableHasFooter={!!footer} />
      ))}
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
}

/**
 * A single entry in the menu table. It just contains a brief section for text and an image
 */
function MenuItem({item, tableHasFooter}: {item: MenuItem; tableHasFooter?: boolean}) {
  return (
    <div className={`menu-item ${!tableHasFooter ? 'without-footer' : ''}`}>
      <div className="item-description">
        <p>
          {item.name} {item.price}
        </p>
        <p>{item.description}</p>
      </div>
      <div className="item-image">
        <img src={item.imagePath} alt="Order Now" />
      </div>
    </div>
  );
}
