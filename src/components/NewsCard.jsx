import React from 'react'
import { FaStar, FaRegEye, FaShareAlt, FaBookmark } from 'react-icons/fa'
import { format } from 'date-fns'
import { Link } from 'react-router'

const NewsCard = ({ newses }) => {
  const {id, title, author, thumbnail_url, details, total_view, rating } = newses

  const publishedDate = format(new Date(author?.published_date), 'yyyy-MM-dd')

  return (
    <div className='card bg-base-100 shadow border-1 border-gray-300 rounded-lg overflow-hidden'>
      {/* Author section */}
      <div className='flex items-center justify-between p-4 bg-gray-100 mb-2'>
        <div className='flex items-center gap-4'>
          <img
            src={author?.img}
            alt='Author'
            className='w-10 h-10 rounded-full'
          />
          <div>
            <p className='font-semibold text-sm'>{author?.name}</p>
            <p className='text-xs text-gray-500'>{publishedDate}</p>
          </div>
        </div>
        <div className='text-gray-500 cursor-pointer flex gap-2'>
            <FaBookmark size={20}></FaBookmark>
          <FaShareAlt size={20} />
        </div>
      </div>

      {/* Title */}
      <h2 className='px-4 text-lg font-bold leading-snug'>{title}</h2>

      {/* Image */}
      <div className='px-4 py-2'>
        <img
          src={thumbnail_url}
          alt='News'
          className='w-full rounded-md max-h-[220px] object-cover'
        />
      </div>

      {/* Details */}
      <div className='px-4 pb-4 text-sm text-gray-700'>
        <p>
          {details.slice(0, 300)}...
          <Link to={`/newsDetails/${id}`} className='text-primary font-medium cursor-pointer ml-1'>
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className='flex items-center justify-between px-4 pb-4 text-sm border-t border-gray-300 pt-3'>
        {/* Rating */}
        <div className='flex items-center gap-1 text-orange-400'>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating?.number ? 'text-orange-400' : 'text-gray-300'
              }
            />
          ))}
          <span className='text-gray-700 ml-2 font-semibold'>
            {rating?.number}
          </span>
        </div>

        {/* Views */}
        <div className='flex items-center gap-1 text-gray-500'>
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  )
}

export default NewsCard

