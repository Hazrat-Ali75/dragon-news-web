import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../components/NewsCard'

const CategoryNews = () => {
  const [news, setNews] = useState([])

  const { id } = useParams()
  const data = useLoaderData()

  useEffect(() => {
    if (id == '0') {
      setNews(data)
    } else if (id == '1') {
      const filteredNews = data.filter(
        news => news.others.is_today_pick === true
      )
      setNews(filteredNews)
    } else {
      const filteredNews = data.filter(
        news => news.category_id == id
      )
      setNews(filteredNews)
    }
  }, [data, id])

  return (
    <div>
      <h2 className='mb-3 font-bold'>Dragon News Homepage - {news.length}</h2>
      <div className='grid grid-cols-1 gap-4'>
        {news.map(newses => (
          <NewsCard key={newses.id} newses={newses}></NewsCard>
        ))}
      </div>
    </div>
  )
}

export default CategoryNews
