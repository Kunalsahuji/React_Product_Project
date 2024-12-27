import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Electronics = () => {
    return (
        <>
            <div className='mt-10 p-10 flex flex-col items-center w-3/4 text-center mx-auto text-xl rounded-md bg-zinc-100 border shadow-lg transition-all'>
                <h1 className='text-5xl font-bold p-4'>
                    Electronics Details
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="smartphone" />
                        <Link to='/electronics/Smartphones' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Smartphones
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhcHRvcHN8ZW58MHx8fHwxNjE2NTY4NzY4&ixlib=rb-1.2.1&q=80&w=400" alt="laptop" />
                        <Link to='/electronics/Laptops' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Laptops
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="television" />
                        <Link to='/electronics/Televisions' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Televisions
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1532778597765-a2a1c4dda1ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="headphones" />
                        <Link to='/electronics/Headphones' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Headphones
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://plus.unsplash.com/premium_photo-1667538962342-2d9937f014d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="camera" />
                        <Link to='/electronics/Cameras' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Cameras
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1513348313239-6ccc6c25c11b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="smartwatch" />
                        <Link to='/electronics/Smartwatches' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Smartwatches
                        </Link>
                    </div>
                </div>
                <p className='mt-8 text-lg'>
                    Explore our wide range of electronics and find the perfect device for you!
                </p>
            </div>
            <Outlet />
        </>
    )
}

export default Electronics