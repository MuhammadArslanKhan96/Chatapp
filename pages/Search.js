import React from 'react'
import { BsSend } from "react-icons/bs";


const Search = () => {
    return (
        <div>
            <div className='flex flex-col justify-center  items-center'>
                <div className='bg-[#625BF74D] flex justify-between rounded-[15px] py-[18px] px-[30px]  w-[60vw]'>
                    <input placeholder='Send a message' className='placeholder:text-[#625BF7] bg-transparent border-none outline-none' />
                    <div className='text-[#625BF7]'> <BsSend /> </div>
                </div>
            </div></div>
    )
}

export default Search