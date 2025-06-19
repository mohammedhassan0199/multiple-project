import {useState} from 'react'
import Todos from './Todos'
// import Calculator from './pages/Calculator'


function Toggle() {
  const[display,setDisplay] = useState(true)

  const toggleDisplay = () => {
    setDisplay(!display)
  }

  return (
    <>
    
      <div className='bg-black  text-white text-center'>

          <h1 className='text-4xl'>Toggle App</h1>
          <button 
          onClick={toggleDisplay} className='bg-white my-4 text-black py-1 px-3'>Toggle</button>
          
          {
            display ? <Todos /> : null
          }


      </div>

    </>
  )
}

export default Toggle