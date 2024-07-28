import React from 'react'

const SinglePageInfoCard = ({mov:{Title,Poster,Actors,Awards,BoxOffice,Country,Director,Genre,Language,Metascore,Plot,Rated,Released,Runtime,Writer,Year,imdbRating}}) => {
  return (
    <div>
        <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:w-[90%]  shadow-sm bg-gray-100 mt-5  m-auto w-[60%] p-5'>

        <div className='m-auto'><img src={Poster}/></div>

        <div><h1 className='font-semibold text-[30px]'>{Title}</h1>
            <ul>
                <li><b>Actors</b> : {Actors}</li>
                <li><b>Country</b> : {Country}</li>
                <li><b>Director</b> : {Director}</li>
                <li><b>Writer</b> : {Writer}</li>
                <li><b>Genre</b> : {Genre}</li>
                <li><b>Language</b> : {Language}</li>
                <li><b>Rating</b> : {Rated}</li>
                <li><b>Runtime</b> : {Runtime}</li>
                <li><b>Released</b> : {Released}</li>
                <li><b>Year</b> : {Year}</li>
                <li><b>BoxOffice</b> : {BoxOffice}</li>
                <li><b>Metascore</b> : {Metascore}</li>
            </ul>
            <p className='text-[14px]'><b>Plot</b> : {Plot}</p>
        </div>

        </div>
    </div>
  )
}

export default SinglePageInfoCard
