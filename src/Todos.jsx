import { useState } from 'react'

function Todos() {

    const[input,setInput] = useState('')
    
    const[todos,setTodos] = useState([])

    const handleInput = (e) => {

        setInput(e.target.value)
        console.log(e.target.value);
        
    }

    const addTodos = (e) => {
        
        e.preventDefault()

        if(input.trim() === '') return;

        setTodos([...todos,input])
        
        setInput('')

    }

    const handleDelete = (index) => {
        const newTodo = [...todos]
        newTodo.splice(index,1)
        setTodos(newTodo)
    }

  return (
    <>
    
    <div className='text-white text-center '>
        <h1 className='text-4xl font-semibold'>Todo App</h1>

        <div className='border-white border-2 rounded-lg w-[320px] mx-auto mt-8 p-[2%]'>

            <form className='flex justify-between text-[rgb(1,1,38)]'>

                <input type="text"
                value={input} 
                onChange={handleInput}
                className='w-[60%] px-5 py-1 rounded-sm outline-none' placeholder='Enter your task'/>
                <button 
                onClick={addTodos}
                className='border-white border px-5 text-white' >Add Todo</button>

            </form>

            {
                todos.map((todo, index) => {
                    return (
                        <>
                        
                            <div key={index} className='flex gap-5 mt-2 w-full'>

                                <p className='bg-white   px-4 py-2 rounded-md text-[rgb(1,1,38)] w-[60%]'>{todo}</p>

                                <button className='border-[1px] px-5 py-1 rounded-md' onClick={handleDelete}>delete</button>

                            </div>
                        
                        </>
                    )
                })
            }

        </div>

    </div>
    
    </>
  )
}

export default Todos