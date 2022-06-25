import React , { createContext,useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const dataContext = createContext()


export const DataProvider = ({children}) =>{
    const [value,setValue] = useState('')
const [data,setData] = useState([])
const [text,setText] = useState('')
const navigate = useNavigate()
const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '6f7b138495mshfb1e96b52210655p1c7904jsn4f787ad14abb',
    'X-RapidAPI-Host': 'plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com'
  },
  data: {
   text: value,
   language: "en",
   includeCitations: false,
   scrapeSources: false


  }
};
const handleSubmit =async(e)=>{
  e.preventDefault();
  const response = await axios.request(options)
  setData(response.data.sources)
  
  
//  if(response?.data?.YoutubeAPI ===null){
//    setText('Link Yang Anda Tidak Valid')

//  } else{
//     setData( response.data)
    navigate('/download')
//  }
}
    return(
        <dataContext.Provider value={{
            handleSubmit,
            data,
            setValue,
            value,
            text
        }}>
 {children}
        </dataContext.Provider>
    )
}
export default dataContext