import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { UsersData } from "../Store/Slices/MySlice";

const APICall = () => {
  const dispatch = useDispatch()
  const FetchAllPosts = useSelector(state=>state.MySlice.APIDATA);

  const CallAPI = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const response = await data.json();
    dispatch(UsersData(response));
  }

useEffect(()=>{
  CallAPI()
},[])

  return (
    <div className='container'>
      <div className='row justify-content-center'>
     
        {
          FetchAllPosts.map((elem)=>{
            return(
              <div className='col-md-4' key={elem.id} >
            <Card id={elem.id} body={elem.body} title={elem.title}/>
            </div>
            )
          })
        }
       
       
      </div>
    </div>
  )
}

export default APICall