import React from 'react'
import { useNavigate } from 'react-router'

const HomePageCard = ({mov:{Title, Poster,imdbID}}) => {

  const nav = useNavigate()

  return (
    <>
      <div className='m-auto w-[100%]'>
            <img src={Poster} alt={Title} className=' m-auto w-[90%] h-[370px]'/>
            <h1 className='font-semibold text-center'>{Title}</h1>

            <div className='flex justify-center'>
            <button className='bg-gray-700 text-white mb-2 py-1 m-2 px-3'
            onClick={()=>nav(`/single-page-info/${imdbID}`)}
            >Read More</button>
            </div>
      </div>
    </>
  )
}

export default HomePageCard
