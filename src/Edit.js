import React,{useEffect, useState} from 'react'
import './edit.css'
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
    <span>R</span>
    <span>I</span>
    <span>F</span>
    <span>K</span>
    <span>I</span>
    </div>
  )
}

export default Edit