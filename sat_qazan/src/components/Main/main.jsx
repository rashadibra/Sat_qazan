import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './MainComponents/About'
import Contact from './MainComponents/Contact'
import Info from './MainComponents/Info'
import Categorys from './MainComponents/Category/Categorys'
import './main.css'

function main() {
  return (
    <div className='main'>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Info' element={<Info/>}/>
          <Route path='/Categorys' element={<Categorys/>}/>
        </Routes>
    </div>
    
  )
}

export default main