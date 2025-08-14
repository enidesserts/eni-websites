import './Location.scss';

export function Location() {
  return (
    // We can't use the Card component here as we want to image to be covered by the divider
    <div className="location">
      <div className="description-section">
        <p>
          Eni Desserts is open <strong>Sat & Sun</strong>
          <br />
          between <strong>11am-3pm</strong> at{' '}
          <strong className="underline">417 Industrial Ave.</strong>
        </p>

        <p>
          Preorders are strongly encouraged, but we will have some selection available in store.
        </p>

        <p>
          Please contact us via{' '}
          <a className="underline hyperlink" href="https://www.instagram.com/eni.desserts/">
            Instagram DM
          </a>{' '}
          or{' '}
          <a className="underline hyperlink" href="mailto:eni.desserts@gmail.com ">
            email
          </a>{' '}
          for day-of inquiries.
        </p>
      </div>
      <div className="map-section">
        <img src="/Map.png" alt="Logo" className="logo" />
      </div>
    </div>
  );
}
