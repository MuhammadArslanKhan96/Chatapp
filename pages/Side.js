import React from 'react'
import { GoPlus } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";


const Side = () => {
    return (
        <div className="w-[20%] h-screen bg-white  border-r-[1px]">
            <div className="flex flex-col h-full py-[20px] justify-between">
                <div className="flex justify-center pt-[40px]">
                    <div className="flex justify-start py-[20px] w-fit gap-x-3 pl-3 items-center pr-14 bg-[#EBEEF2] rounded-[10px]">
                        <div className='text-[#625BF7]'><GoPlus /></div>
                        <div className="text-[16px] text-[#625BF7] font-bold">New Chat</div>
                    </div>
                </div>
                <div className='flex justify-center flex-col gap-y-4 px-[20px]'>
                    <div className="h-[1px] w-full text-transparent bg-[#a2a2a2bd] rounded-full">
                        m
                    </div>
                    <div className='flex justify-center items-center gap-x-3'>
                        <div className='text-[20px] text-[#625BF7]'><BiDollar /></div>
                        <div className='text-[16px] text-[#625BF7] font-bold'>Pricing Plans</div>
                    </div>
                    <div className='flex justify-center '>
                        <div className='flex justify-start items-center gap-x-4'>
                            <div className='text-[20px] text-[#625BF7]'><FiSettings /></div>
                            <div className='text-[16px] text-[#625BF7] font-bold'>Setting</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Side