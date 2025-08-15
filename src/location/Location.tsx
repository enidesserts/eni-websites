import './Location.scss';

export function Location() {
  return (
    // We can't use the Card component here as we want to image to be covered by the divider
    <div className="location">
      <div className="description-section">
        <p>
          <strong>We are open for pick up once a week, on Saturdays.</strong> We will send you an
          invoice once we receive your order, and you can e-transfer the amount due to confirm your
          order.
        </p>
        <p>
          You can preorder through our form here.
          <strong>The order cut off for each week is Thursday at 10AM.</strong>
        </p>
        <p>
          If you need products for a different pick up date or time, please send us a message on{' '}
          <a className="underline hyperlink" href="https://www.instagram.com/eni.desserts/">
            Instagram
          </a>{' '}
          or an{' '}
          <a className="underline hyperlink" href="mailto:eni.desserts@gmail.com ">
            email
          </a>{' '}
          and we'll see what we can do!
        </p>
      </div>
      <div className="map-section">
        <img src="/Map.png" alt="Logo" className="logo" />
      </div>
    </div>
  );
}
