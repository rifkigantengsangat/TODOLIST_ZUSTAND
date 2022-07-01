import logo from './logo.svg';
import './App.css';
import React ,{useState,useContext, useEffect,useCallback} from 'react';
import TodoStore from './store/Todo';
import dataStore from './store/data';
import Select from 'react-select'
import debounce from "lodash/debounce";

import { Link } from 'react-router-dom';
function App() {
 
  const {data,fetch,delet} = dataStore ((state)=>state)
  
  const [show,setShow ] =useState(false)
  const {todo,addTodo,removeTodo,searchTodo,filter} = TodoStore((state) =>state) 
  const [value,setValue] = useState('')
  const [yangdipilih,setYangdipilih] = useState ('')
  const [hasil,setHasil] = useState ('')
  const [search,setSearch] = useState('')
  const [tebakan,setTebakan] = useState ('')
  const [type,setType] = useState(false)
  const sort = data.sort((a,b)=> a.name.localeCompare(b.name))
  
  const datas = sort.map(e=>{
  
    return ({
      label : e.name,
      value : e.email,
    })
  })
  const handleChange = (value) => {
    setYangdipilih(value);
  }
  const typed = (e) =>{
    setTebakan(e.target.value)
    setType(true)
    handleTyping()
  } 
 const handleTyping = useCallback(
  debounce(()=>{
    setType(false)
  },500)
 ) 
const openData = ()=>{
  setShow(!show)
}
const adaTidak = ()=>{
  if(yangdipilih === ''){
    return <>Data Belum Di select</>
  }else{
    return yangdipilih
  }
}
const handleSubmit = (e)=>{
  e.preventDefault()
  const tebaktoLower = tebakan.toLowerCase();
  const pilihlower = yangdipilih.toLowerCase();
  if(tebaktoLower === pilihlower){
    setHasil('benar')
  }else{
    setHasil("salah")
  }
}
  useEffect(()=>{
    fetch()   
  },[yangdipilih])
  return (
    <div className='container-app'>
      <input type="text" onChange={(e)=> setValue(e.target.value)}/>
      <input type="text" onChange={(e)=> setSearch(e.target.value)}/>
      
      <button onClick={()=>addTodo(value)}>Add</button>
      <button onClick={()=>searchTodo(search)}>cari</button>

       {filter === undefined || filter === null ||filter ===[] ? <h1>Tidak Ada Data </h1> : filter.map(e=> <h1>{e}</h1>)}
      {todo.length > 0 && todo.map((e,i)=>{
        return <div key={i}>
          <p>{e}</p>
          <button onClick={()=>removeTodo(i)}>Remove</button>
          <Link to ={`edit/${i}`}>Edit</Link>
          <div>
            <Select options={datas} onChange={(e)=>handleChange(e.label)} ></Select>
            <button onClick={openData}>{show === true? <p>tutup</p> : <span>buka</span>}</button>
           {show && adaTidak()}
          
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input type='text' onChange={(event)=>typed(event)}/>
              <p>{hasil}</p>
            </form>
            <span>{type && <p>sedang mengetik...</p>}</span>
           
          </div>
          {data.map((e)=>{
            console.log(e)
           return <div className="as" key={e.id}>
            <h1>{e.name}</h1>
            <button onClick={()=>delet(e.id)}>delet</button>
           </div>
          })}
        </div>
      })}
    

  
    
  </div>
  );
}

export default App;
