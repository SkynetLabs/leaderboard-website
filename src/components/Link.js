export default function Link({ children, href, ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-primary-light transition-colors duration-200"
      {...props}
    >
      {children}
    </a>
  );
}
