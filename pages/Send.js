import React from 'react'
import Side from './Side'
import Header from './header'
import Search from './Search'

const Send = () => {
    return (
        <>
            <div className='flex '>
                <Side />
                <div className='w-[80%] flex flex-col'>
                    <Header />

                    <div className='flex flex-col justify-between h-[75vh]'>
                        <div className='flex justify-end px-[40px] py-[20px]'>

                            <select className='flex  rounded-full font-bold  items-center py-[6px] border-none outline-none text-[#000000] text-[13px] '>

                                <option className=' mt-[20px]'> Mindmap</option>
                                <option> Last 30 days</option>
                                <option> Last 1 Year</option>
                                <option> Time period: All time</option>
                            </select>

                        </div>
                        <div className='bg-[#FFFFFF] items-center flex flex-col justify-center pb-[13px] w-[60vw] self-center rounded-[10px]   shadow-[0px_6px_8px_rgba(0,0,0,0.06)]'>
                            <p className='text-[#625BF7] bg-[#EBEEF2]'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <p className='text-[#625BF7]'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <p className='text-[#625BF7]'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <p className='text-[#625BF7]'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <p className='text-[#625BF7]'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

                        </div>
                    </div>
                    <Search />
                </div>
            </div>
        </>
    )
}

export default Send