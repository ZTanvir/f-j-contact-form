const FormInput = ({ label, name, id, value, onChange, errorMsg }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default FormInput;
