const Badge = ({ variant, children }) => {
  const badgeClasses = `inline-block px-2 py-1 text-sm font-semibold rounded-full ${
    variant === "secondary" ? "bg-blue-500 text-white" : "bg-red-500 text-white"
  }`;

  return <span className={badgeClasses}>{children}</span>;
};

export default Badge;
