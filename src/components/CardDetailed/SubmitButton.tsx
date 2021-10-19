import { FC } from 'react';

interface IProps {
  error: any 
  children: any 
  disabled: any
  processing: any 
}

const SubmitButton: FC<IProps> = ({processing, error, children, disabled}) => (
  <button
    className={`SubmitButton ${error ? 'SubmitButton--error' : ''}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? 'Processing...' : children}
  </button>
);

export default SubmitButton;
