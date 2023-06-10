const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { color, children, submit } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md hover:${color}/60 w-full text-white ${color}`}
      type={submit}
      onClick={() => console.log("anda mengklik tombol ini")}>
      {children}
    </button>
  );
};

export default Button;
