import React from 'react'
import Header from '../components/Header'
import { Outlet, useNavigation } from 'react-router'
import LeftAside from '../homeLayout/LeftAside'
import RightAside from '../homeLayout/RightAside'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'

const RootLayout = () => {
    const {state} = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
        <div className='w-11/12 mx-auto mt-8'>
          <LatestNews></LatestNews>
        </div>
        <nav className='w-11/12 mx-auto mt-3'>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className='w-11/12 mx-auto mt-[40px] grid grid-cols-12 gap-5 mb-[50px]'>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <LeftAside></LeftAside>
        </aside>
        <section className='col-span-6'>
          {
            state == "loading" ?
             <div className='flex justify-center min-h-screen items-center'>
                <span className='loading loading-spinner text-error'></span>
             </div> : <Outlet></Outlet>
          }
        </section>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  )
}

export default RootLayout
