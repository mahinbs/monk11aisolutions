import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const inner = (children) => (
  <>
    <span>{children}</span>
    <span className="agency-btn-icon">
      <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
    </span>
  </>
);

export const AgencyButton = ({
  to,
  href,
  children,
  onClick,
  className = "",
  variant = "default",
}) => {
  const classes = `${variant === "fill" ? "agency-btn-fill" : "agency-btn"} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
      >
        {inner(children)}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {inner(children)}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {inner(children)}
    </button>
  );
};

export default AgencyButton;
