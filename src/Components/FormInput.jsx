const FormInput = ({ label, type, name, id, value, onChange, errorMsg }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {type === "textArea" ? (
        <textarea
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      )}
      <div>{errorMsg}</div>
    </div>
  );
};
export default FormInput;
