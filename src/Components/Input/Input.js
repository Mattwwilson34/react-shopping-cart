import './Input.css';

const Input = (props) => {
  const { type, value, className, onChange } = props;
  return (
    <input
      onChange={onChange}
      className={className}
      type={type}
      value={value}></input>
  );
};

export default Input;
