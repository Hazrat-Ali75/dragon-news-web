import React, { use } from 'react'
import { NavLink } from 'react-router'

const categoriesPromise = fetch('../../public/categories.json').then(res =>
  res.json()
)
const Categories = () => {
  const category = use(categoriesPromise)
  return (
    <div>
      <h2 className='font-bold mb-3'>All Categories</h2>
      <div className='grid grid-cols-1 gap-2'>
        {category.map(cat => (
          <NavLink className='cat btn btn-outline flex justify-start border-0 w-full font-semibold text-gray-400'
          to={`/categories/${cat.id}`}
          key={cat.id}>
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Categories
