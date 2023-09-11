import React from 'react'
import logo from './../static/tiki-logo.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] py-1 px-1 shadow bg-base-100 rounded-box w-52">
                            <li><a href="/">Item 1</a></li>

                        </ul>
                    </div>
                    <img src={logo} alt="logo" className="hidden lg:block" />
                    <a href="/" className="normal-case text-2xl ">TIKITAKA</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg  text-gray-400">
                        <li><a href="/" className='font-semibold text-gray-800'>About</a></li>
                        <li><a href="/">Product</a></li>
                        <li><a href="/">Document</a></li>
                        <li><a href="/">Eco System</a></li>
                        <li><a href="/">Roadmap</a></li>
                        <li><a href="/">Team</a></li>
                        <li><a href="/">Partners</a></li>
                    </ul>
                </div>

                <div className="navbar-end gap-4">
                    <a href="/" className="px-6 py-3 text-black text-lg">Join Now</a>
                    <a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl">
                        <span class="w-full h-full bg-gradient-to-br from-[#416DE9] via-[#ff5478] to-[#C659DE] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span class="relative px-6 py-3 transition-all ease-out bg-white rounded-xl group-hover:bg-opacity-0 duration-400">
                            <span class="relative text-black text-lg">Sign Up</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header