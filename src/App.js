import logo from './logo.svg';
import './App.css';
import React ,{useState,useContext, useEffect} from 'react';
import TodoStore from './store/Todo';
import { Link } from 'react-router-dom';
function App() {
  const {todo,addTodo,removeTodo,searchTodo,filter} = TodoStore((state) =>state)
console.log(filter)
 
  const [value,setValue] = useState('')
  const [search,setSearch] = useState('')

  return (
    <div className='container-app'>
      <input type="text" onChange={(e)=> setValue(e.target.value)}/>
      <input type="text" onChange={(e)=> setSearch(e.target.value)}/>
      
      <button onClick={()=>addTodo(value)}>Add</button>
      <button onClick={()=>searchTodo(search)}>cari</button>

       {filter === undefined || filter === null ||filter ===[] ? <h1>Tidak Ada Boy</h1> : filter.map(e=> <h1>{e}</h1>)}
      {todo.length > 0 && todo.map((e,i)=>{
        return <div key={i}>
          <p>{e}</p>
          <button onClick={()=>removeTodo(i)}>Remove</button>
          <Link to ={`edit/${i}`}>Edit</Link>
        </div>
      })}
    

  
    
  </div>
  );
}

export default App;
