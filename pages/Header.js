import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between  px-[30px] py-[20px]'>
                <div className='text-transparent'> john doe</div>
                <div className='flex gap-x-4 items-center'>
                    <div className='text-black text-[20px] font-bold'>John Doe</div>
                    <div className='bg-[#D9D9D9] rounded-full w-[50px] h-[50px]'></div>
                </div>
            </div>
            <div className="h-[1px] w-full text-transparent bg-[#a2a2a2bd] rounded-full">
                m
            </div>
        </div>
    )
}

export default Header