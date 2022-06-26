import create from "zustand";

const TodoStore = create((set)=>({
    todo : [],
    filter : [],
    addTodo : (newTodo)=>set((state)=>({
        todo: [newTodo,...state.todo]
    })),
    removeTodo : (id) =>set((state)=>({
    todo : state.todo.filter((todo,i)=> i !== id)
    })),
    searchTodo: (value) =>set((state)=>({
        filter :  state.todo.filter((key)=> key.toLowerCase() === value.toLowerCase())
    })),
    editTodo : (id,update) =>set((state)=>({
        todo : state.todo.map((key,i) => i ===id ? update : state.todo)
        
    }))
}))
export default TodoStore