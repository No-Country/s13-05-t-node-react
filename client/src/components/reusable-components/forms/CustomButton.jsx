// eslint-disable-next-line react/prop-types
function CustomButton({ onClick, text, icon: Icon, className }) {
  const handleClick = () => {
    onClick();
  };

  const combinedClasses = `flex items-center ${className}`;

  return (
    <button className={combinedClasses} onClick={handleClick}>
      {Icon && <Icon />}
      {text}
    </button>
  );
}

export default CustomButton;
