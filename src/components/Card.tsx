import './Card.scss';
/**
 * A reusable component for each section of the website. It keeps padding for the dividers
 */
export function Card({children, className}: {children: React.ReactNode; className?: string}) {
  return (
    <div className="card">
      <div className={`card-content ${className}`}>{children}</div>
    </div>
  );
}
