import React from 'react'

const SinglePageInfoCard = ({mov:{Title,Poster}}) => {
  return (
    <div>
        <div className='flex gap-5 bg-red-50 mt-5  m-auto w-[95%] p-5'>

        <div><img src={Poster}/></div>

        <div><h1 className='font-semibold text-[20px]'>{Title}</h1></div>

        </div>
    </div>
  )
}

export default SinglePageInfoCard
