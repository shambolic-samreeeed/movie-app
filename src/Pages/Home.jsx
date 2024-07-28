import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HomePageCard from '../Components/HomePageCard';
import { useFormik } from 'formik';
import { IoSearchSharp } from "react-icons/io5";
import { useParams } from 'react-router';
import LoadingScreen from '../Components/LoadingScreen';
import ErrorPage from './ErrorPage';


const Home = () => {

    
    const [data, setData] = useState();
    const [search, setSearch] = useState('spider');
    const [isLoading, setIsLoading] = useState(true)
    

    const formik = useFormik({
        initialValues:{
            search:''
        },
        onSubmit:(val)=>{
            setSearch(val.search)
        }
    })


    const getData = async()=>{
        setIsLoading(true)
        try{
            const response = await axios.get(`http://www.omdbapi.com/?apikey=3f65253e&s=${search}`,{

            })
            console.log(response.data.Search)           
            setData(response.data.Search)
        }catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getData()
    },[search])

    if(isLoading){
        return<LoadingScreen/>
    }
  return (
    <div>


        <form onSubmit={formik.handleSubmit}
        className=' flex justify-center p-5  gap-2'>
            <input
                name='search'
                onChange={formik.handleChange}
                value={formik.values.search}
                label='search here'
                placeholder='eg: Spiderman'
                className=' border border-gray-400 text-center w-[400px]'
            ></input>

            <button type='submit'
                    className='bg-gray-700 px-7 py-2 text-white'
            ><IoSearchSharp size='20'/></button>
        </form>


      <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 bg-gray-100 w-[70%] m-auto sm:w-[80%]'>

      {data?(
        data.map((mov,i)=>{
            return<HomePageCard mov={mov} key={i}/>
        })
      ):(
        <ErrorPage/>
      )}
      </div>
    </div>
  )
}

export default Home
