'use client'
const DashNavButton = ({ onClick, className, children, icon, isAbsolute, position }) => {
  const buttonStyle = isAbsolute
    ? {
        position: 'absolute',
        ...position,
      }
    : {};

  return (
    <button onClick={onClick} className={`btn glass ${className}`} style={buttonStyle}>
      {icon && icon}
      {children}
    </button>
  );
};

export default DashNavButton;
