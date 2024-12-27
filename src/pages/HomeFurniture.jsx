import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HomeFurniture = () => {
    return (
        <>
            <div className='mt-10 p-10 flex flex-col items-center w-3/4 text-center mx-auto text-xl rounded-md bg-zinc-100 border shadow-lg transition-all'>
                <h1 className='text-5xl font-bold p-4'>
                    Home Furniture Details
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='flex flex-col items-center'>
                        <img 
                            className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1591019479261-1a103585c559?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="bedroom furniture" 
                        />
                        <Link to='/homeNFurniture/Bedroom' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Bedroom Furniture
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img 
                            className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1591019479261-1a103585c559?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="living room furniture" 
                        />
                        <Link to='/homeNFurniture/LivingRoom' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Living Room Furniture
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img 
                            className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1591019479261-1a103585c559?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="dining room furniture" 
                        />
                        <Link to='/homeNFurniture/DiningRoom' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Dining Room Furniture
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img 
                            className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1591019479261-1a103585c559?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="kitchen furniture" 
                        />
                        <Link to='/homeNFurniture/Kitchen' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Kitchen Furniture
                        </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img 
                            className='w-50 h-40 mx-auto object-cover rounded-md'
                            src="https://images.unsplash.com/photo-1591019479261-1a103585c559?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="office furniture" 
                        />
                        <Link to='/homeNFurniture/Office' className='p-4 underline hover:text-blue-500 text-2xl uppercase'>
                            Office Furniture
                        </Link>
                    </div>
                </div>
                <p className='mt-8 text-lg'>
                    Explore our wide range of home furniture and find the perfect pieces for your home!
                </p>
            </div>
            
            <Outlet />
        </>
    );
};

export default HomeFurniture;
