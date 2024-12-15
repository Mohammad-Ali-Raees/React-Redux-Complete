import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {IncrementNumber,DecreamentNumber} from './actions/index';

const Counter = () => {
    const MyState = useSelector((state) => state.ChangeTheNumber);
    const dispatch = useDispatch();

    const handleEvent = ()=>{
        
    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <button className='btn btn-sm btn-primary' onClick={()=>{dispatch(IncrementNumber())}}>PLUS</button>
                    <input className='form-control form-control-sm ' onChange={handleEvent} value={MyState} />
                    <button className='btn btn-sm btn-danger' onClick={()=>{dispatch(DecreamentNumber())}}>MINUS</button>
                </div>
            </div>
        </div>
    )
}

export default Counter