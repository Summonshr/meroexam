import React, { useState } from 'react'
import { faBars as bars, faTimesCircle as times } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default () => {
    const [menu, openMenu] = useState(false)
    return <>{menu && <div className="w-full absolute left-0 top-0 p-4 z-10 h-full sm:hidden">
        <div onClick={() => openMenu(false)} className="w-full h-full bg-gray-900 opacity-75 top-0 left-0 z-10 absolute"></div>
        <div className="absolute z-20 w-full left-0 top-0 p-4">
            <ul className="bg-gray-100 text-gray-900 font-semibold rounded-lg">
                <li className=" text-gray-600 flex items-center justify-between">
                    <p className="px-4 py-3 border-b border-gray-300 w-full">Menu
                         <Icon onClick={() => openMenu(false)} icon={times} className="float-right" color="gray" />
                    </p>
                </li>
                <li className="px-4 py-2"><Link onClick={() => openMenu(false)} className="block" to='/'>Home</Link></li>
                <li className="bg-gray-300 px-4 py-2"><Link onClick={() => openMenu(false)} className="block" to='/blog'>Blog</Link></li>
                <li className="px-4 py-2"><Link onClick={() => openMenu(false)} className="block" to='/analytical-writing'>Analytical Writing</Link></li>
                <li className="bg-gray-300 px-4 py-2"><Link onClick={() => openMenu(false)} className="block" to='/sets/GRE'>Practice Sets</Link></li>
                <li className="px-4 py-2"><Link onClick={() => openMenu(false)} className="block" to='/videos'>Videos</Link></li>
                <li className="bg-gray-300 px-4 py-2 rounded-b-lg"><Link onClick={() => openMenu(false)} className="block" to='/words'>Words</Link></li>
                <li className="px-4 py-2"><Link onClick={() => openMenu(false)} className="block" to='/universities'>Universities</Link></li>
            </ul>
        </div>
    </div>}
        <header className="flex justify-between container mx-auto">
            <div className="flex flex-wrap justify-between md:justify-between sm:pb-0 w-full items-center">
                <h1 className="flex flex-wrap justify-center md:justify-between md:px-16 p-4 items-center"><Link to="/">
                    <img alt="logo" className="align-middle h-20" height="106" width="127" src='https://meroexam.com/images/logo.png' /></Link>
                </h1>
                <div className="flex items-center justify-between pr-8">
                    <div onClick={() => openMenu(!menu)} className="bg-blue-700 p-2 w-8 h-8 flex justify-center sm:hidden text-gray-100 items-center">
                        <Icon icon={bars} color="white" />
                    </div>
                    <ul className="md:px-8 mr-0 md:mr-8 sm:flex flex-wrap justify-between hidden">
                        <li><Link className="text-sm sm:text-base font-bold p-2 rounded mr-1 md:mr-8 text-teal-700 hover:text-teal-100 hover:bg-teal-700 " to='/blog'>Blog</Link></li>
                        <li><Link className="text-sm sm:text-base font-bold p-2 rounded mr-1 md:mr-8 text-green-700 hover:text-green-100 hover:bg-green-700 " to='/universities'>Universities</Link></li>
                        <li><Link className="text-sm sm:text-base font-bold text-blue-700 bg-blue-200 p-2 rounded hover:bg-blue-700 hover:text-blue-100 relative" to='/analytical-writing'><span className="absolute bg-red-600 text-gray-100 rounded-lg px-2 top-0 -mt-3 right-0 -mr-6">new</span>Analytical Writing</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    </>
}