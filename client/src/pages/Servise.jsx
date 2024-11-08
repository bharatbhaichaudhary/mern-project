import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './service.css'

const Servise = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    const service = async () =>{
      try {
        const responce = await axios("http://localhost:9000/api/data/service")
        setData(responce.data);
        // console.log(responce.data);
        
      } catch (error) {
        console.log(`service data ${error}`);
      }
    }
    service()
  },[])
  return (
   <section className='service'>
    <div className="ser_container">
      <div className="ser_main">
          {
            data.map((ser, i)=>{
              return(
              <div key={i} className="ser_card">
                <h1>{ser.service}</h1>
                <h2>{ser.provider}</h2>
                <p>{ser.descriptions}</p>
                <button>{ser.price}</button>
              </div>
              )
            })
          }
      </div>
    </div>
   </section>
  )
}

export default Servise
