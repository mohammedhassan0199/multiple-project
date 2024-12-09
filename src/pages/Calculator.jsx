import React, { useState } from 'react'

function Calculator() {

    const[data,setData] = useState("")
    const getValue = (event) => {
        console.log(event.target.value);
        setData(data.concat(event.target.value) )
    }

    const calculation = () => {
        setData(eval(data).toString())
    }

    const back = () =>{
        setData(data.slice(0,-1))
    }

    const allClear = () => {
        setData("")
    }

  return (
    <>
    
    <div className="bg-[rgb(168,204,212)] w-[420px] p-4  mt-5 mr-[40%] ml-[40%] rounded-md">

        <div>
            <input type="text" className='outline-0 px-4 py-2 w-full mb-5 rounded-sm bg-black text-white' placeholder='0' value={data}/>
        </div>

        <div className='grid grid-cols-4 gap-3'>

            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="(">(</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value=")">)</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="%">%</button>
            <button onClick={allClear} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="AC">AC</button>

            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="7">7</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="8">8</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="9">9</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="*">*</button>

            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="4">4</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="5">5</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="6">6</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="-">-</button>

            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="1">1</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="2">2</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="3">3</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="+">+</button>

            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="0">0</button>
            <button onClick={back} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="x"><i className="fa-solid fa-delete-left"></i></button>
            <button onClick={calculation} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="=">=</button>
            <button onClick={getValue} className='bg-white px-3 py-2 rounded-md font-semibold text-xl buttons' value="/">/</button>

        </div>
        


    </div>

    </>
  )
}

export default Calculator