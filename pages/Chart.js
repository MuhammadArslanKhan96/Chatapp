import React from 'react'
import Search from './Search'
import Header from './header'
import Side from './Side'
import { MdEdit } from "react-icons/md";
import Image from "next/image";

const Chart = () => {
    return (
        <>
            <div className='flex '>
                <Side />
                <div className='w-[80%] relative flex flex-col'>
                    <Header />

                    <div className='flex flex-col justify-between '>
                        <div className='flex justify-end px-[40px] py-[20px]'>

                            <select className='flex  rounded-full font-bold  items-center py-[6px] border-none outline-none text-[#000000] text-[13px] '>

                                <option className=' mt-[20px]'> Trello</option>
                                <option> Last 30 days</option>
                                <option> Last 1 Year</option>
                                <option> Time period: All time</option>
                            </select>

                        </div>
                        <div className='flex flex-col justify-center items-center  '>
                            <div className='flex items-center gap-x-4 mb-6'>
                                <div>
                                    <Image src="/Profile.svg" width={50} height={50} alt='' />
                                </div>
                                <div className='text-[16px] text-[#625BF7] font-bold'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
                            </div>
                            <div className='bg-[#03003D] mb-6 py-[34px] gap-y-28 px-[50px] rounded-[10px] items-center flex flex-col justify-center'>
                                <div className='flex justify-around gap-x-[250px] '>
                                    <div className='bg-[#46F7B7] rounded-[10px] p-[20px]'>
                                        <p className='text-center'>Worem ipsum dolor sit <br />
                                            amet, consectetur <br />
                                            adipiscing elit.</p>
                                    </div>
                                    <div className='bg-[#1B3CE9] rounded-[10px] p-[20px]'>
                                        <p className='text-center'>Worem ipsum dolor sit <br />
                                            amet, consectetur <br />
                                            adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className='flex justify-around gap-x-[250px] '>
                                    <div className='bg-[#FFA775] rounded-[10px] p-[20px]'>
                                        <p className='text-center'>Worem ipsum dolor sit <br />
                                            amet, consectetur <br />
                                            adipiscing elit.</p>
                                    </div>
                                    <div className='bg-[#CC0707] rounded-[10px] p-[20px]'>
                                        <p className='text-center'>Worem ipsum dolor sit <br />
                                            amet, consectetur <br />
                                            adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='bg-white sticky bottom-0 w-full  right-20 z-10'>
                        <Search />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart