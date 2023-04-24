export const Input = ({ label, id, type = "text", setValue, value }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};
