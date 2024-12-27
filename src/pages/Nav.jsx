import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='flex justify-center items-center h-16 bg-zinc-900 text-white gap-10 shadow-sm font-bold text-xl'>
            <Link to='/' className='p-4'>Home</Link>
            <Link to='/grocery' className='p-4'>Grocery</Link>
            <Link to='/fashion' className='p-4'>Fashion</Link>
            <Link to='/electronics' className='p-4'>Electronics</Link>
            <Link to='/homeNFurniture' className='p-4'>Home & Furniture</Link>

        </nav>
    )
}

export default Nav
