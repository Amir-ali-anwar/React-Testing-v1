
const labelStyles = 'block text-grey-700 font-medium mb-2';
const inputStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md';
const buttonsStyles =
  'w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600';

const Sandbox = () => {
  return <div className='container mx-auto max-w-md mt-10 p-6 bg-white rounded-lg shadow-md'>
    <form className='space-y-4'>
    <div className='mb-3'>
          <label htmlFor='email' className={labelStyles}>
            Email address
          </label>
          <input
            type='email'
            id='email'
            className={inputStyles}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className={labelStyles}>
          Password
          </label>
          <input
             type='password'
            id='password'
            className={inputStyles}
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
          />
        </div>
    </form>
  </div>
};
export default Sandbox;
