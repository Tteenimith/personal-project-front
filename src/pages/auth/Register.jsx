import React from 'react'

const Register = () => {
  return (
    
        <div className="flex flex-row  h-screen bg-gradient-to-b from-teal-400 to-blue-500 text-white">
            {/* left */}
            <div className='w-2/5'>
            
            <img className='w-full' src="https://picsum.photos/1200" />
            </div>
            {/* right */}
            <div className='w-3/5 flex flex-col justify-between p-8'>
                {/* head register */}
                <div className='flex flex-col gap-4'>
                    <h4 className='text-3xl '>Register</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, atque.</p>
                </div>
                {/* input register */}
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="">Name</label>
                    <input className='p-2 w-3/4 rounded-lg shadow-md bg-white text-black' type="text" />
                    <label htmlFor="">E-mail</label>
                    <input className='p-2 w-3/4 rounded-lg shadow-md bg-white text-black' type="text" />
                    <label htmlFor="">Password</label>
                    <input className='p-2 w-3/4 rounded-lg shadow-md bg-white text-black' type="text" />
                    <label htmlFor="">Confirm Password</label>
                    <input className='p-2 w-3/4 rounded-lg shadow-md bg-white text-black' type="text" />
                    <label htmlFor="">Phone no.</label>
                    <input className='p-2 w-3/4 rounded-lg shadow-md bg-white text-black' type="text" />
                    <label htmlFor="">Branch</label>
                    <input className='p-2 w-3/4 rounded-lg shadow-md bg-white text-black' type="text" />

                    <button className="cursor-pointer transition-all bg-green-500 text-white w-1/3 mt-4 px-6 py-2 rounded-lg
                    border-blue-600
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                        sign up
                        </button>
                </div>
                {/* button register */}
                
                

            </div>
        </div>
    
  )
}

export default Register