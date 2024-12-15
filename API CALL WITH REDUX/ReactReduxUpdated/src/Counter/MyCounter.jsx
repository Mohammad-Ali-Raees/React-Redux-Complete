import React from 'react'
import "../App.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { Increment, Decrement } from '../Store/Slices/MySlice';


const MyCounter = () => {

  // const CounterValue = useSelector(state => state.MySlice.counter)
  // const dispatch = useDispatch();
  // console.log(CounterValue)



  return (
    <div className="container">
      <div className="counter">

        <div className="odometer" id="odometer">{CounterValue}</div>
        {/* <button className='btn minus' onClick={() => { dispatch(Decrement()) }} >MINUS</button>
        <button className='btn plus' onClick={() => { dispatch(Increment()) }} >PLUS</button> */}

      </div>
    </div>
  )
}

export default MyCounter