const Button = (props) => {
  const { color = "bg-black", children = "...", submit } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md hover:${color}/60 w-full text-white ${color}`} type={submit}>
      {children}
    </button>
  );
};

export default Button;
