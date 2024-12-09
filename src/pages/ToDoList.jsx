import { info } from "autoprefixer";
import { useState } from "react"

function ToDoList(){
const [todos,setTodos] = useState("");
const [data,setData] = useState([])

const getInput = (event) => {
    console.log(event.target.value);
    setTodos(event.target.value)
   

}

const getTodos = () => {
    console.log(todos);
    let store = [...data,todos]
    setData(store)
    setTodos('')
    if(todos !== ""){
        return data
    }
}

const deleteTask= (index) => {
 console.log(index);

 let filterData = data.filter((currentElement,id) => {
    return id != index
 })

 setData(filterData)
 
}
console.log(data);

    return(
        <>
        
            <div className="flex justify-center items-center flex-col bg-[rgb(1,112,112)] mx-[30%] mt-10 p-5 ">
                <h1 className="mb-3 text-4xl font-semibold">Todo List</h1>
                <div className="w-full flex items-center justify-center">

                    <input className="w-[85%] py-1 px-3 outline-0 text-black text-lg" type="text" placeholder="Enterr Your Tast" value={todos} onChange={getInput}/>
                    <button onClick={getTodos} className=" w-[15%] bg-black text-white py-[6.3px] px-3">Add</button>
                </div>
                            {
                        data.map((currentValue,index) => {
                          return(
                            <>
                                  <div className="flex items-center justify-between w-full ">

                                  <span className="text-2xl font-semibold my-3">{currentValue == '' ? todos : currentValue}</span>
                                  <i onClick={() => deleteTask(index)} id="deleteIcon" className="fa-solid fa-trash text-2xl my-3 cursor-pointer"></i>

                                  </div>
                            </>
                          )
                        })} 
                          
                   
                
            </div>
        
        </>
    )
}
export default ToDoList