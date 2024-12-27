import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Grocery = () => {
    return (
        <>
            <div className='mt-10 p-10 flex flex-col items-center w-3/4 text-center mx-auto text-xl rounded-md bg-zinc-100 border shadow-lg transition-all'>
                <h1 className='text-5xl font-bold p-4'>
                    Grocery Details
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gym accessories" />
                        <Link to='/grocery/Gym-Accessories' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Gym Accessories
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1702776102066-d72ea5c4472c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="supplements" />
                        <Link to='/grocery/Supplements' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Supplements
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://plus.unsplash.com/premium_photo-1700056213055-c0a98d4577f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="apparel" />
                        <Link to='/grocery/Apparel' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Apparel
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://plus.unsplash.com/premium_photo-1661764165810-b624e4c492aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="shoes" />
                        <Link to='/grocery/Shoes' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Shoes
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1564216329574-c839d4eedb1b?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="equipment" />
                        <Link to='/grocery/Equipment' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Equipment
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1575433672053-81a05190969a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="clock" />
                        <Link to='/grocery/clock' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Clocks
                        </Link>
                    </div>
                </div>
                <p className='mt-8 text-lg'>
                    Explore our wide range of grocery items and find the perfect products for you!
                </p>
            </div>
            <Outlet />
        </>
    )
}

export default Grocery