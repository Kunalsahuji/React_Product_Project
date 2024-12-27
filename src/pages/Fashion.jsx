import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Fashion = () => {
    return (
        <>
            <div className='mt-10 p-10 flex flex-col items-center w-3/4 text-center mx-auto text-xl rounded-md bg-zinc-100 border shadow-lg transition-all'>
                <h1 className='text-5xl font-bold p-4'>
                    Fashion Details
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1622047548828-eeedfe970361?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1514995669114-2f9e1d6a3b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1lbnxlbnwwfHx8fDE2MTY1Njg3Njg&ixlib=rb-1.2.1&q=80&w=400" alt="men fashion" />
                        <Link to='/fashion/Men' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Fashion Men
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="women fashion" />
                        <Link to='/fashion/Women' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Fashion Women
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1622218286192-95f6a20083c7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="children fashion" />
                        <Link to='/fashion/Children' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Fashion Children
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://plus.unsplash.com/premium_photo-1731170993467-f23672d6efda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="accessories" />
                        <Link to='/fashion/Accessories' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Fashion Accessories
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://plus.unsplash.com/premium_photo-1671467858979-1b8111c9c7c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="footwear" />
                        <Link to='/fashion/Footwear' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Fashion Footwear
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1591019479261-1a103585c559?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="beauty" />
                        <Link to='/fashion/Beauty' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Fashion Beauty
                        </Link>
                    </div>
                    
                </div>
                <p className='mt-8 text-lg'>
                    Explore our wide range of fashion items and find the perfect style for you!
                </p>
            </div>
            <Outlet />
        </>
    )
}

export default Fashion