
import { configureStore } from '@reduxjs/toolkit'
import  MySlice  from './Slices/MySlice'

//* Define A Complete Store  -- We have get root redcer from All Reducer
const store = configureStore({
    reducer: {
       MySlice
    }

});

export default store