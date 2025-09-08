import React,{useState} from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState("Login") // login, signup, forgotPassword

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-10 gap-4 text-gray-800 mb-15'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState === "Login" && (
        <>
          <input type="email" placeholder='Email' className='w-full p-2 border border-gray-300 rounded'/>
          <input type="password" placeholder='Password' className='w-full p-2 border border-gray-300 rounded'/>
          <button type='submit' className='w-full bg-black text-white p-2 rounded hover:bg-blue-700 transition'>Login</button>
          <p className='text-sm'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setCurrentState("SignUp")}>Sign Up</span></p>
          <p className='text-sm'><span className='text-blue-600 cursor-pointer' onClick={() => setCurrentState("forgotPassword")}>Forgot Password?</span></p>
        </>
      )}

      {currentState === "SignUp" && (
        <>
          <input type="text" placeholder='Username' className='w-full p-2 border border-gray-300 rounded'/>
          <input type="email" placeholder='Email' className='w-full p-2 border border-gray-300 rounded'/>
          <input type="password" placeholder='Password' className='w-full p-2 border border-gray-300 rounded'/>
          <button type='submit' className='w-full bg-black text-white p-2 rounded hover:bg-blue-700 transition'>Sign Up</button>
          <p className='text-sm'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setCurrentState("Login")}>Login</span></p>
        </>
      )}
    </form>
  )
}

export default Login
