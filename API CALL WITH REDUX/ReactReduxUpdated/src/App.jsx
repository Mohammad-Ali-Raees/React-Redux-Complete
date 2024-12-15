import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import MyCounter from './Counter/MyCounter'
import APICall from './API DATA/APICall'



const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/counter' element={<MyCounter/>} />
      <Route path='/users' element={<APICall/>} />
    </Routes>
  </Router>
  )
}

export default App