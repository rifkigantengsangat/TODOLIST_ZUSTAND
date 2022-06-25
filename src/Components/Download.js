import React,{useContext} from 'react'
import dataContext from '../Context/DataContext'
import gambar from '../halo.png'
import './download.css'
const Download = () => {
    const {data}= useContext(dataContext)
    
   
  
  return (
   <div className='container-download'>
    <div className='download'>
    <div className='container-image'>
        <h1>Ada {data.length} Yang Mirip Dengan Text Anda </h1>
    </div>
    <div className='container-semua'>
   <div className='gambar'>
  {data.map((e,i)=>{
   
    return(
    <div key={i} className='container-link'>
        <div className='link'>
        <a href={e?.url}>{e?.title}</a>
        </div>
        <div className='plagiat'>
           {e.matches.map((f)=>{
            return (
                <p>{f.matchText}</p>
            )
           })}

        </div>
    </div>
    )

  })}
   </div>
    </div>
    </div>

   </div>
  )
}

export default Download