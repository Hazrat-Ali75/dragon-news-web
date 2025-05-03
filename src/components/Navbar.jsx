import React, { useContext } from 'react'
import userIcon from '../assets/user.png'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logout Successfull")
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className='flex justify-between items-center'>
      <div>{user && user.email}</div>
      <nav className='flex gap-4 text-gray-400'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </nav>
      <div className='flex items-center gap-2'>
        <img className='cursor-pointer w-11 h-11 rounded-full' src={`${user ? user.photoURL: userIcon}`} alt='' />
        {user ? (
          <button
            onClick={handleLogout}
            className='text-white font-medium btn bg-[#222222] px-7'
          >
            Logout
          </button>
        ) : (
          <Link
            to='/auth/login'
            className='text-white font-medium btn bg-[#222222] px-7'
          >
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
