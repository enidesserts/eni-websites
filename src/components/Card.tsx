import './Card.scss';
/**
 * A reusable component for each section of the website. It keeps padding for the dividers
 */
export function Card({
  children,
  className,
  backgroundImagePath,
}: {
  children: React.ReactNode;
  className?: string;
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
      }}
    >
      <div className={`card-content ${className}`}>{children}</div>
    </div>
  );
}
