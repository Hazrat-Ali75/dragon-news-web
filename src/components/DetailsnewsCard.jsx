import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router'

const DetailsnewsCard = ({ news }) => {
  const { category_id, title, image_url,  details } = news || {}
  return (
    <div className='border-1 border-gray-200 rounded-lg p-3'>
      <img className='w-full rounded-lg h-[350px] object-cover' src={image_url} alt='' />
      <h2 className='pt-4 text-2xl font-semibold'>{title}</h2>
      <p className='py-5'>{details}</p>
      <Link
        className='bg-red-500 text-white p-3 flex items-center gap-2 w-[270px] '
        to={`/categories/${category_id}`}
      >
        <FaArrowLeftLong />All news in this categories
      </Link>
      <p className='mt-5'></p>
    </div>
  )
}

export default DetailsnewsCard
