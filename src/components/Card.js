import React from 'react'
import img1 from '../assets/img1.jpeg';

function Card({items}) {
  return (
    <div className='w-[100%] flex flex-col bg-white gap-2 rounded-lg'>
        <img src={items.img} alt="" className="w-full rounded-t-lg h-[180px]"/>
        <div className='flex flex-col gap-2 px-2'>
        <h3 className='text-xl font-semibold'>$ {items.price}</h3>
        <span className='text-2xl font-semibold'>{items.title}</span>
        <p className='text-sm text-gray-500 font-normal'>{items.address}</p>
        <hr/>
        </div>
        <div className='flex px-2 flex-row justify-between text-sm pb-2 text-gray-500 font-normal'>
            <span>{items.bed}</span>
            <span>{items.bathroom}</span>
            <span>{items.fit} m<sup>2</sup></span>

        </div>

    </div>
  )
}

export default Card