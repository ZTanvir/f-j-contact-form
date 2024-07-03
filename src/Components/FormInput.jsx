const FormInput = ({
  label,
  className,
  type,
  name,
  id,
  value,
  onChange,
  errorMsg,
  isRequired,
  handleOnBlur,
  focus,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>
        {label} <span className="isFieldRequired">*</span>
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={isRequired}
        onBlur={handleOnBlur}
        focus={focus}
      />
      <p className="errorMessage">{errorMsg}</p>
    </div>
  );
};
export default FormInput;
