import React from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom';
const routes = () => {
  return (
    <div>
    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route>
</Routes></div>
  )
}

export default routes