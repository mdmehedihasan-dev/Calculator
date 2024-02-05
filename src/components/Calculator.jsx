import { useState } from "react"

const Calculator = () => {

    const [result , setResult] = useState("");

    const handleClick = (e)=>{
        setResult(result.concat(e.target.value))
    }

    const handleClear = ()=>{
        setResult("")
    }

    const calculate =()=>{
        setResult(eval(result).toString())
    }


  return (
    <div className=" text-white w-screen h-screen flex justify-center items-center">
        
     <div className="w-72 h-auto bg-gray-900 rounded-2xl  border-4 border-blue-400 shadow-2xl">

        {/* input here  */}
                <div className="screen p-2">
                    <input value={result} type="text"
                        className='shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]text-white px-1 text-right placeholder-black outline-none rounded-lg bg-gray-300 text-2xl pt-10 w-full text-black'
                        placeholder='0'
                    />
                </div>


                {/* brand name  */}


                <div className="brand flex justify-center mb-2 shadow-md text-gray-500  bg-blue-300 bg-opacity-90">
                    <h1 className=' text-gray-200 text-xs font-bold'> <a href="https://github.com/mehedijs">meHedi</a> </h1>
                </div>

                {/* keybord starts  */}

                <div className="keybord">

                <div className="m-2 flex justify-between">
                        <input onClick={handleClear} type="button"  value="C" className="bg-red-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="<" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="%" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="/" className="bg-pink-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                    </div>

                <div className="m-2 flex justify-between">
                        <input onClick={handleClick} type="button" value="7" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="8" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="9" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="*" className="bg-green-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                    </div>
                    <div className="m-2 flex justify-between">
                        <input onClick={handleClick } type="button" value="4" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="5" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="6" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="-" className="bg-indigo-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                    </div>
                    <div className="m-2 flex justify-between">
                        <input onClick={handleClick} type="button" value="1" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="2" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="3" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="+" className="bg-purple-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                    </div>
                    <div className="m-2 flex justify-between">
                        <input onClick={handleClick} type="button" value="0" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="00" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={handleClick} type="button" value="." className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input onClick={calculate} type="button"  value="=" className="bg-orange-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                    </div>
                </div>





                </div>







            </div>
        
    
    
  )
}

export default Calculator