
import { useState } from "react";
import validator from 'validator'
const labelStyles = 'block text-grey-700 font-medium mb-2';
const inputStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md';
const buttonsStyles =
  'w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600';
const defaultState = {
  email: '',
  password: '',
  confirmPassword: '',
}
type FormType = {
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
};
const Sandbox = () => {
  const [fromInput, SetFormInput] = useState<FormType>(defaultState)
  const [error, setError] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    SetFormInput({ ...fromInput, [id]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fromInput.email || !validator.isEmail(fromInput?.email)) {
      console.log('clicked');
      
      return setError('Invalid email');
    }
    if (!fromInput.password || !validator.isLength(fromInput.password, { min: 5 })) {
      return setError('Password must be at least 5 characters');
    }
    if (fromInput.password !== fromInput.confirmPassword) {
      console.log(fromInput.password);
      console.log(fromInput.confirmPassword);

      return setError('Passwords do not match');
    }

    setError('')
    SetFormInput({ email: '', password: '', confirmPassword: '' });
  }
  return <div className='container mx-auto max-w-md mt-10 p-6 bg-white rounded-lg shadow-md'>
    <form className='space-y-4' onSubmit={handleSubmit}>
      <div className='mb-3'>
          <label htmlFor='email' className={labelStyles}>
            Email address
          </label>
          <input
            type='email'
            id='email'
            className={inputStyles}
            onChange={handleChange}
            value={fromInput.email ?? ''}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className={labelStyles}>
            Password
          </label>
          <input
            type='password'
            id='password'
            className={inputStyles}
          onChange={handleChange}
          value={fromInput.password ?? ''}
          />
        </div>
      <div className='mb-3'>
        <label htmlFor='confirmPassword' className={labelStyles}>
          Confirm Password
        </label>
        <input
          type='password'
          id='confirmPassword'
          className={inputStyles}
          onChange={handleChange}
          value={fromInput.confirmPassword ?? ''}
        />
      </div>
      {error && <p className='text-red-500 text-sm'>{error}</p>}
      <button type='submit' className={buttonsStyles}>
        Submit
      </button>
    </form>
  </div>
};
export default Sandbox;
