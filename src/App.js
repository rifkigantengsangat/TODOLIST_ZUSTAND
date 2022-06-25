import logo from './logo.svg';
import './App.css';
import React ,{useState,useContext} from 'react';
import axios from 'axios'
import dataContext from './Context/DataContext';
function App() {
  const {setValue,value,handleSubmit,text} = useContext(dataContext)

  return (
    <div className='container-app'>

  
    <div className="container">
    <div className="brand-logo"></div>
    <div className="brand-title">SHOTGAN PLAGIARISM</div>
    <form className="inputs" onSubmit={handleSubmit}>
      <label>MASUKAN MINIMAL 40 HURUF</label>
      <textarea type="text" placeholder="masukan Text Anda" onChange={(e)=>setValue(e.target.value)}/>
   
      <button type="submit">Cari</button>
      <p>{text}</p>
    </form>
  
   
  </div>
  </div>
  );
}

export default App;
