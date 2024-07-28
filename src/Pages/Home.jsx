import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HomePageCard from '../Components/HomePageCard';
import { useFormik } from 'formik';
import { IoSearchSharp } from "react-icons/io5";
import { useParams } from 'react-router';


const Home = () => {

    const [data, setData] = useState();
    const [search, setSearch] = useState('spider');

    const formik = useFormik({
        initialValues:{
            search:''
        },
        onSubmit:(val)=>{
            setSearch(val.search)
        }
    })


    const getData = async()=>{
        try{
            const response = await axios.get(`http://www.omdbapi.com/?apikey=3f65253e&s=${search}`,{

            })
            console.log(response.data.Search)
            setData(response.data.Search)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getData()
    },[search])

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


      <div className='grid grid-cols-5 p-2 bg-gray-100 w-[70%] m-auto'>
      {data?(
        data.map((mov,i)=>{
            return<HomePageCard mov={mov} key={i}/>
        })
      ):(
        <p>HWHW</p>
      )}
      </div>
    </div>
  )
}

export default Home
