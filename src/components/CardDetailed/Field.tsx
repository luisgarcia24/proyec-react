import { FC } from 'react';

interface IProps {
  id:           string
  type:         string
  value:        string
  label:        string
  required:     boolean
  placeholder:  string
  autoComplete: string
  onChange: (e: any) => void
}

const Field: FC<IProps> = ({
  id,
  type,
  value,
  label,
  required,
  placeholder,
  autoComplete,
  onChange,
}) => (
  <div className="FormRow">
    <label htmlFor={id} className="FormRowLabel">{label}</label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Field;
