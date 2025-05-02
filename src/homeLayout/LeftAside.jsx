import React, { Suspense } from 'react'
import Categories from '../components/Categories'

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className='flex justify-center mt-[50px]'>
            <span className='loading loading-spinner text-error'></span>
          </div>
        }
      >
        <Categories></Categories>
      </Suspense>
    </div>
  )
}

export default LeftAside
