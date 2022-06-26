import React,{useEffect, useState} from 'react'
import TodoStore from './store/Todo'
import {useParams,useNavigate} from 'react-router-dom'

const Edit = () => {

    const {id} = useParams()
  const [baru,setBaru] = useState('')
    const {editTodo}  = TodoStore((state) =>state)
    const Navigate = useNavigate()
       const handleSubmit =(e)=>{
        e.preventDefault()
        editTodo(id,baru)
        Navigate('/')
       }
  return (
    <div>
        <h1>EDIT</h1>
     <form onSubmit={handleSubmit}>       
        <input type = "text"  onChange={(e)=>setBaru(e.target.value)} />
       <button type = "submit">halo</button>
       
        </form>
    </div>
  )
}

export default Edit