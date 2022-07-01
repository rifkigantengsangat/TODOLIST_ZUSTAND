import create from "zustand";
import axios from "axios"

 const dataStore = create((set)=>({
    data :[],
    loading : false,
    error : false,
   fetch :async()=>{
    set(()=>({loading : true}));
    try {
        const response = await axios.get( "https://jsonplaceholder.typicode.com/users")
        return set((state)=>({data : (state.data =response.data ),loading : false}));
    } catch (error) {
        set(()=> ({error : true , loading : false}))
    }
   },
   delet: async (id)=>{
     axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    return set((state)=>({data: state.data.filter((datas)=>datas.id !== state.data.id) }))
    
   }
}))
export default dataStore