import './Card.scss';
/**
 * A reusable component for each section of the website. It keeps padding for the dividers
 */
export function Card({
  children,
  className,
  backgroundColour,
  backgroundImagePath,
}: {
  children: React.ReactNode;
  className?: string;
  backgroundColour?: string;
  backgroundImagePath?: string;
}) {
  return (
    <div
      className="card"
      style={{
        ...(backgroundImagePath && {
          backgroundImage: `url(${backgroundImagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }),
        ...(backgroundColour && {
          backgroundColor: backgroundColour,
        }),
      }}
    >
      <div className={className}>{children}</div>
    </div>
  );
}
