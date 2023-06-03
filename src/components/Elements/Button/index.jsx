const Button = (props) => {
  const { variant = "bg-black", children = "..." } = props;
  return <button className={`h-10 px-6 font-semibold rounded-md hover:bg-slate-600 text-white ${variant}`}>{children}</button>;
};

export default Button;
