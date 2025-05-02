import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext)
  const [nameError, setNameError] = useState('')
  const navigate = useNavigate();
  const handleRegister = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    if (name.length < 5) {
      setNameError('name should contain at least 5 character')
      return
    } else {
      setNameError('')
    }
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value

    createUser(email, password)
      .then(result => {
        const user = result.user
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
              setUser({...user, displayName: name, photoURL: photo })
              navigate("/");
          })
          .catch(error => {
            console.log(error);
            setUser(user);
          })
      })
      .catch(error => {
        alert(error.message)
      })
  }
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
        <div className='card-body'>
          <h1 className='text-center font-semibold text-2xl'>Register Now</h1>
          <form onSubmit={handleRegister} className='fieldset'>
            <label className='label'>Your Name</label>
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Name'
            />
            {nameError && <p className='text-xs text-red-500'>{nameError}</p>}
            <label className='label'>Photo Url</label>
            <input
              type='text'
              name='photo'
              className='input'
              placeholder='Photo Url'
            />
            <label className='label'>Email</label>
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Email'
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
            <button type='submit' className='btn btn-neutral mt-4'>
              Register
            </button>
            <p className='font-medium py-3 text-center'>
              Already Have An Account?{' '}
              <Link className='text-red-500' to='/auth/login'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
