const FormInput = ({
  label,
  className,
  type,
  name,
  id,
  value,
  onChange,
  errorMsg,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      <p>{errorMsg}</p>
    </div>
  );
};
export default FormInput;
