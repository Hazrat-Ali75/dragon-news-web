import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-[30px]'>
                <img className='w-[400px] ' src={logo} alt="" />
                <p className='text-center text-gray-400 mt-2'>Journalism without Fear or Favour</p>
                <p className='font-semibold text-slate-400 mt-2'>
                    {
                        format(new Date(),'EEEE, MMMM d, yyyy')
                    }
                </p>
        </div>
    );
};

export default Header;