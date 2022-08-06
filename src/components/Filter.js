import React from 'react'

function Filter({check,setCheck,submitHandler}) {
    const inputHandler=(e)=>{
        setCheck({...check,
        [e.target.name]:e.target.value})
    }
    console.log("check",check);
  return (
    <div className='w-full py-5'>
        <div className='w-10/12 mx-auto bg-white rounded-lg flex px-6 py-3 justify-between'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-xs'>Location</h3>
                <input className='w-[140px] outline-none border-none  bg-gray-50' name='address' onChange={inputHandler} type="text" placeholder='Location'/>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-xs'>When</h3>
                <input className='w-[150px] outline-none border-none  bg-gray-50'  name='date' onChange={inputHandler} type="date" placeholder='Location'/>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-xs'>Price</h3>
                <select className='outline-none border-none'  name='price' onChange={inputHandler}>
                    <option value="">Choose Price</option>
                    <option  value="500-1000">$500-$1000</option>
                    <option  value="1000-1500">$1000-$1500</option>
                    <option  value="2000-2500">$2000-$2500</option>
                </select>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-xs'>Property Type</h3>
                <select className='outline-none border-none'  name='property' onChange={inputHandler}>
                    <option value="">Choose Property</option>
                    <option  value="houses">Houses</option>
                    <option  value="flats">Flat</option>
                </select>
            </div>
            <div className="p-3 rounded-lg bg-purple-500 text-white font-semibold text-center w-[120px]" onClick={submitHandler}>
                Search
            </div>
        </div>
    </div>
  )
}

export default Filter