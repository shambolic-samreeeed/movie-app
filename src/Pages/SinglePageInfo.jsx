import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import SinglePageInfoCard from '../Components/SinglePageInfoCard';

const SinglePageInfo = () => {
    const {mov} = useParams()
    const [data, setData] = useState();

    const getData = async()=>{
        try {
            const response = await axios.get('http://www.omdbapi.com/?apikey=3f65253e',{
                params:{
                    i:mov
                }
            })
            setData([response?.data])
            console.log(response?.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[mov])
  return (
    <div>
        {data? (
            data.map((mov,i)=>{
                return<SinglePageInfoCard mov={mov} key={i}/>
            })
        ):(
            <h1>NO</h1>
        )}
    </div>
  )
}

export default SinglePageInfo
