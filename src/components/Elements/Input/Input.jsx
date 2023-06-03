const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:text-slate-700/60 mb-8"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
