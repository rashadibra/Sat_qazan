import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './MainComponents/About/About'
import Contact from './MainComponents/Contact/Contact'
import Categorys from './MainComponents/Category/Categorys'
import './main.css'

function main() {

  return (
    <div className='main'>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Categorys' element={<Categorys/>}/>
        </Routes>
    </div>
    
  )
}

export default main