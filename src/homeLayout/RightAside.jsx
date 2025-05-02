import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import Swiming from '../assets/swimming.png';
import Class from '../assets/class.png';
import Play from '../assets/playground.png';

const RightAside = () => {
  return (
    <div>
      <h2 className='font-bold mb-3'>Login With</h2>
      <div className='grid grid-cols-1 gap-2'>
        <button className='btn btn-outline w-full'>
          <FcGoogle></FcGoogle> Login with google
        </button>
        <button className='btn btn-outline w-full'>
          <FaGithub></FaGithub> Login with github
        </button>
      </div>
      <h2 className='font-bold mt-8 mb-3'>Find us on</h2>
      <div className='join join-vertical lg:join-horizontal grid grid-cols-1'>
        <button className='btn join-item flex justify-start'><FaFacebook></FaFacebook> Facebook</button>
        <button className='btn join-item flex justify-start'><FaTwitter></FaTwitter> Twitter</button>
        <button className='btn join-item flex justify-start'><FaInstagram></FaInstagram> Instagram</button>
      </div>
      <div className='bg-gray-100 p-4 mt-8'>
        <h2 className='font-bold'>Q-Zone</h2>
        <img className='my-3' src={Swiming} alt="" />
        <img className='my-3' src={Class} alt="" />
        <img src={Play} alt="" />
      </div>
    </div>
  )
}

export default RightAside
