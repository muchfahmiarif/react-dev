import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const InputForm = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { title, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputForm;
