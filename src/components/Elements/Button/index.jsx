const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { color, children, type = "button", onClick = () => {} } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md hover:${color}/60 w-full text-white ${color}`} type={type} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
