import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ElectronicsDetails = () => {
    const { category } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(10, 1000)
    }, [category])

    return (
        <div className='mt-10 p-10 flex flex-col items-center w-3/4 text-center mx-auto text-xl rounded-md bg-zinc-100 border shadow-lg transition-all'>
            <h1 className='text-5xl font-bold p-4 underline mb-5'>Product Details</h1>
            <p className='text-2xl mb-5'>Category: {category}</p>
            <p className='text-xl mb-5'>
                <span className='font-bold text-xl mr-1'>Description: </span> {category} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, commodi?
            </p>
            <button
                onClick={() => navigate('/electronics')}
                className='mb-5 p-4 bg-green-500 text-white rounded hover:bg-green-700 text-2xl'
            >
                Go to Electronics
            </button>
        </div>
    )
}

export default ElectronicsDetails