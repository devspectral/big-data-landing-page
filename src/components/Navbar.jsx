import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const sidebarHandler = () => {
        setSidebar(!sidebar);
    };

    return (
        <>
            <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
                <h1 className='w-full text-3xl font-bold text-[#1DAE80]'>LANDING</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'><a href="/">Home</a></li>
                    <li className='p-4'><a href="/">Products</a></li>
                    <li className='p-4'><a href="/">About</a></li>
                    <li className='p-4'><a href="/">Blog</a></li>
                    <li className='p-4'><a href="/">Contact</a></li>
                </ul>
                {/* hide over breakpoint md */}
                <div onClick={sidebarHandler} className='block md:hidden'>
                    {/* Set condition of sidebar and icons to show */}
                    {!sidebar ? <AiOutlineClose size={21} /> : <AiOutlineMenu size={21} />}

                </div>
                {/* toggle sidebar (this is the mobile navigation) */}
                <div className={sidebar ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#003420] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#1DAE80] m-4'>LANDING</h1>
                    <ul className='pt-2 uppercase'>
                        <li className='p-4 border-b border-gray-500'>About</li>
                        <li className='p-4 border-b border-gray-500'>Home</li>
                        <li className='p-4 border-b border-gray-500'>Products</li>
                        <li className='p-4 border-b border-gray-500'>Blog</li>
                        <li className='p-4'>Contact</li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Navbar;