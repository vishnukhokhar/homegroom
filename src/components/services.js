import React from 'react'
import ServiceCards from './ServiceCards'
import About from './About'

const Services = () => {
  return (
    <div className='services' id='sercvices'>
        <h1 style={{color:' rgb(255, 195, 31)'}}>Featured services</h1>
        <h4>We offer best services by providing professional servants</h4>
         <ServiceCards/>
         <About/>
    </div>
  )
}

export default Services
