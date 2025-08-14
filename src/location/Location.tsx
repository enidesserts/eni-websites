import './Location.scss';

export function Location() {
  return (
    // We can't use the Card component here as we want to image to be covered by the divider
    <div className="location">
      <div className="description-section">
        <p>
          <strong>We are open for pick up once a week,
            <br />
            on Saturdays.
          </strong> We will send you an
          <br />invoice once we receive your order,
          <br />and you can e-transfer the amount due
          <br />to confirm your order.
          
        </p>

        <p>
          You can preorder through our form
          <br />here. <strong>The order cut off for each week 
            <br />is Thursday at 10AM.
          </strong>
        </p>

        <p>
          If you need products for a different
          <br /> pick up date or time, please send us
          <br /> a message on{' '}
          <a className="underline hyperlink" href="https://www.instagram.com/eni.desserts/">
            Instagram
          </a>{' '}
          or an{' '}
          <a className="underline hyperlink" href="mailto:eni.desserts@gmail.com ">
            email
          </a>{' '}
          <br />and we'll see what we can do!
        </p>
      </div>
      <div className="map-section">
        <img src="/Map.png" alt="Logo" className="logo" />
      </div>
    </div>
  );
}
