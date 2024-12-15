import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import MyCounter from './Counter/MyCounter'


const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/counter' element={<MyCounter/>} />
    </Routes>
  </Router>
  )
}

export default App