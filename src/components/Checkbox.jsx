import '../styles/_checkbox.scss';

const Checkbox = ({label, type, disabled}) => {

  return (
    <label className={['checkbox', type].join(' ')}>
      <input
        disabled={disabled}
        className="input"
        type="checkbox"/>
      {type !== 'switch' && <span className="label">{label}</span>}
    </label>
  );
};

export default Checkbox;
