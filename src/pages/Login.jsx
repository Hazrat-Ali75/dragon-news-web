import React, { useContext, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const Login = () => {
  const { logIn, forgetPassword } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [isForget, setIsForget] = useState('');
  const location = useLocation()
  const inputRef = useRef()
  const navigate = useNavigate()
  const handleLogin = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    logIn(email, password)
      .then(userCredential => {
        const user = userCredential.user
        alert('Successfully login')
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        setError(errorCode)
      })
  }

  const resetPassword = () => {
    const email = inputRef.current.value
    forgetPassword(email)
      .then(() => {
        // Password reset email sent!
        setIsForget('an email sent to your email.');
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
      })
  }

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
        <div className='card-body'>
          <h1 className='text-center font-semibold text-2xl'>Login Now</h1>
          <form onSubmit={handleLogin} className='fieldset'>
            <label className='label'>Email</label>
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Email'
              ref={inputRef}
              required
            />
            <label className='label'>Password</label>
            <input
              type='password'
              name='password'
              className='input'
              placeholder='Password'
              required
            />
            <div>
              <a onClick={resetPassword} className='link link-hover'>
                Forgot password?
              </a>
              <p className='mt-2 text-red-500 text-xs'>{isForget}</p>
            </div>
            {error && <p className='text-xs text-red-500 mt-2'>{error}</p>}
            <button type='submit' className='btn btn-neutral mt-4'>
              Login
            </button>
            <p className='font-medium py-3 text-center'>
              Don't Have An Account?{' '}
              <Link className='text-red-500' to='/auth/register'>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
