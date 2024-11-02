import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'
function Courses() {
  return (
   <>
   <NavBar/>
   <div className=''>
    <Course/>
    </div>
   <Footer/>
   </>
  )
}

export default Courses