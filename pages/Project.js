import React from 'react'
import Search from './Search'
import Header from './Header'
import Side from './Side'
import { MdEdit } from "react-icons/md";
import Image from "next/image";


const Project = () => {
    return (
        <>
            <div className='flex '>
                <Side />
                <div className='w-[80%] relative flex flex-col'>
                    <Header />

                    <div className='flex flex-col justify-between '>
                        <div className='flex justify-between px-[40px] py-[20px]'>
                            <div className='flex items-center gap-x-3'>
                                <div className='text-[#625BF7] font-bold'>Project Name</div>
                                <div className='text-[#625BF7]'><MdEdit /></div>
                            </div>
                            <select className='flex  rounded-full font-bold  items-center py-[6px] border-none outline-none text-[#000000] text-[13px] '>

                                <option className=' mt-[20px]'> Trello</option>
                                <option> Last 30 days</option>
                                <option> Last 1 Year</option>
                                <option> Time period: All time</option>
                            </select>

                        </div>
                        <div className='flex justify-center gap-x-7'>
                            <div className='flex items-center  justify-center '>
                                <div className='bg-[#DDDFE7] p-[16px] rounded-[4px]'>
                                    <div className='text-[18px] py-[10px]'>TO DO </div>
                                    <div className="flex flex-col gap-y-3">
                                        <div className="p-[24px]  bg-white rounded-lg">
                                            <div className="flex justify-between gap-x-40">
                                                <div className="flex flex-col gap-y-[14px]">
                                                    <div className='bg-[#46F7B7] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                        <p className="text-[10px] font-bold text-[#096343]">low priority</p> </div>
                                                    <div > <p className="text-[14px] text-[#1B1C1D]">Lorem ipsum dolor sit amet, consectetur <br />
                                                        adipiscing elit. Integer viverra venenatis <br />
                                                        accumsan.</p> </div>

                                                    <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                        <div>
                                                            <Image src="/calendar_today.svg" width={10} height={11} alt='' />
                                                        </div>
                                                        <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="p-[24px]  bg-white rounded-lg">
                                            <div className="flex justify-between gap-x-40">
                                                <div className="flex flex-col gap-y-[14px]">
                                                    <div className='bg-[#F5EB88] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                        <p className="text-[10px] font-bold text-[#653408]">medium priority</p> </div>
                                                    <div > <p className="text-[14px] text-[#1B1C1D]">Lorem ipsum dolor sit amet, consectetur <br />
                                                        adipiscing elit. Integer viverra venenatis <br />
                                                        accumsan.</p> </div>

                                                    <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                        <div>
                                                            <Image src="/calendar_today.svg" width={10} height={11} alt='' />
                                                        </div>
                                                        <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="p-[24px]  bg-white rounded-lg">
                                            <div className="flex justify-between gap-x-40">
                                                <div className="flex flex-col gap-y-[14px]">
                                                    <div className='bg-[#FFA775] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                        <p className="text-[10px] font-bold text-[#622808]">high priority</p> </div>
                                                    <div > <p className="text-[14px] text-[#1B1C1D]">Lorem ipsum dolor sit amet, consectetur <br />
                                                        adipiscing elit. Integer viverra venenatis <br />
                                                        accumsan.</p> </div>

                                                    <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                        <div>
                                                            <Image src="/calendar_today.svg" width={10} height={11} alt='' />
                                                        </div>
                                                        <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='flex items-center  justify-center '>
                                <div className='bg-[#DDDFE7] p-[16px] rounded-[4px]'>
                                    <div className='text-[18px] py-[10px]'>In Progress </div>
                                    <div className="flex flex-col gap-y-3">
                                        <div className="p-[24px]  bg-white rounded-lg">
                                            <div className="flex justify-between gap-x-40">
                                                <div className="flex flex-col gap-y-[14px]">
                                                    <div className='bg-[#46F7B7] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                        <p className="text-[10px] font-bold text-[#096343]">low priority</p> </div>
                                                    <div > <p className="text-[14px] text-[#1B1C1D]">Lorem ipsum dolor sit amet, consectetur <br />
                                                        adipiscing elit. Integer viverra venenatis <br />
                                                        accumsan.</p> </div>

                                                    <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                        <div>
                                                            <Image src="/calendar_today.svg" width={10} height={11} alt='' />
                                                        </div>
                                                        <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="p-[24px]  bg-white rounded-lg">
                                            <div className="flex justify-between gap-x-40">
                                                <div className="flex flex-col gap-y-[14px]">
                                                    <div className='bg-[#F5EB88] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                        <p className="text-[10px] font-bold text-[#653408]">medium priority</p> </div>
                                                    <div > <p className="text-[14px] text-[#1B1C1D]">Lorem ipsum dolor sit amet, consectetur <br />
                                                        adipiscing elit. Integer viverra venenatis <br />
                                                        accumsan.</p> </div>

                                                    <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                        <div>
                                                            <Image src="/calendar_today.svg" width={10} height={11} alt='' />
                                                        </div>
                                                        <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="p-[24px]  bg-white rounded-lg">
                                            <div className="flex justify-between gap-x-40">
                                                <div className="flex flex-col gap-y-[14px]">
                                                    <div className='bg-[#FFA775] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                        <p className="text-[10px] font-bold text-[#622808]">high priority</p> </div>
                                                    <div > <p className="text-[14px] text-[#1B1C1D]">Lorem ipsum dolor sit amet, consectetur <br />
                                                        adipiscing elit. Integer viverra venenatis <br />
                                                        accumsan.</p> </div>

                                                    <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                        <div>
                                                            <Image src="/calendar_today.svg" width={10} height={11} alt='' />
                                                        </div>
                                                        <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='flex items-center  justify-center '>
                                <div className='bg-[#DDDFE7] p-[16px] rounded-[4px]'>
                                    <div className='text-[18px] py-[10px]'>Completed</div>
                                    <div className="flex flex-col gap-y-3">
                                        <div className="p-[24px]  bg-white rounded-lg">
                                            <div className="flex justify-between gap-x-40">
                                                <div className="flex flex-col gap-y-[14px]">
                                                    <div className='bg-[#46F7B7] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                        <p className="text-[10px] font-bold text-[#096343]">low priority</p> </div>
                                                    <div > <p className="text-[14px] text-[#1B1C1D]">Lorem ipsum dolor sit amet, consectetur <br />
                                                        adipiscing elit. Integer viverra venenatis <br />
                                                        accumsan.</p> </div>

                                                    <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                        <div>
                                                            <Image src="/calendar_today.svg" width={10} height={11} alt='' />
                                                        </div>
                                                        <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="p-[24px]  bg-white rounded-lg">
                                            <div className="flex justify-between gap-x-40">
                                                <div className="flex flex-col gap-y-[14px]">
                                                    <div className='bg-[#F5EB88] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                        <p className="text-[10px] font-bold text-[#653408]">medium priority</p> </div>
                                                    <div > <p className="text-[14px] text-[#1B1C1D]">Lorem ipsum dolor sit amet, consectetur <br />
                                                        adipiscing elit. Integer viverra venenatis <br />
                                                        accumsan.</p> </div>

                                                    <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                        <div>
                                                            <Image src="/calendar_today.svg" width={10} height={11} alt='' />
                                                        </div>
                                                        <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="p-[24px]  bg-white rounded-lg">
                                            <div className="flex justify-between gap-x-40">
                                                <div className="flex flex-col gap-y-[14px]">
                                                    <div className='bg-[#FFA775] px-[8px] w-fit rounded-[2px] py-[2px]'>
                                                        <p className="text-[10px] font-bold text-[#622808]">high priority</p> </div>
                                                    <div > <p className="text-[14px] text-[#1B1C1D]">Lorem ipsum dolor sit amet, consectetur <br />
                                                        adipiscing elit. Integer viverra venenatis <br />
                                                        accumsan.</p> </div>

                                                    <div className='bg-[#F7F7F7] gap-x-2 rounded-[2px] w-fit flex px-[8px] py-[6px]'>
                                                        <div>
                                                            <Image src="/calendar_today.svg" width={10} height={11} alt='' />
                                                        </div>
                                                        <div className='text-[#646570] text-[10px]'>Jan 29th, 2022 </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
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

export default Project