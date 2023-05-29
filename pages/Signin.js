import Image from "next/image";
import React from "react";
import { BsGoogle } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { RiEyeOffFill } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import { HiOutlineLockClosed } from "react-icons/hi";




const Signin = () => {

    return (
        <>
            <section className="flex justify-center bg-[#FFFFFF]">
                <div className="flex  flex-col items-center justify-center  py-8 mx-auto md:h-screen lg:py-0">
                    <div className=" px-[40px]  py-[20px] bg-[#FFFFFF] shadow-[0px_6px_8px_rgba(0,0,0,0.05)] rounded-[5px] ">
                        <div className="flex" >
                            <p className="text-[#757575] text-[14px]">Welcome back!</p>
                            <p className="text-[#333333]">👋</p>
                        </div>
                        <div className="text-black font-bold text-[24px]">Sign in to your account</div>
                        <div className="text-black  text-[18px] pt-[16px]">Email address or username</div>
                        <div className="flex items-center gap-x-2 my-[12px] bg-[#FFFFFF] border border-[#EAEBF6] rounded-full py-[12px] px-[24px]">
                            <div className="text-[#C0C3D0] ">
                                <RiAdminLine />
                            </div>
                            <input placeholder="Type here" className="text-[#C0C3D0] outline-none border-none" />

                        </div>
                        <div className="text-black  text-[18px] pt-[12px]">Password</div>
                        <div className="flex justify-between items-center gap-x-2 my-[12px] bg-[#FFFFFF] border border-[#EAEBF6] rounded-full py-[12px] px-[24px]">
                            <div className="text-[#C0C3D0] ">
                                <HiOutlineLockClosed />
                            </div>
                            <input placeholder="******" type="password" className="text-[#C0C3D0] outline-none border-none items-center" />
                            <div className="text-[#C0C3D0] ">
                                <RiEyeOffFill />
                            </div>
                        </div>
                        <div className="flex text-[#FFFFFF] font-bold text-center justify-center items-center gap-x-2 my-[20px] bg-[#625BF7]  rounded-[10px] py-[12px] px-[24px]">
                            CONTINUE
                        </div>
                        <div className="flex text-[#625BF7] text-[12px] mt-[14px] justify-center items-center   ">
                            Forget your password?
                        </div>




                    </div>

                </div>
            </section>
        </>
    );
};

export default Signin;
