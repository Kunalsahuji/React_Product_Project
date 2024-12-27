import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const GroceryDetails = () => {
    const params = useParams()
    const { category } = params
    useEffect(() => {
        window.scrollTo(10, 1000)
    }, [category])
    return (
        <div className='mt-5 font-bold mb-10 p-5 bg-gray-100 rounded-lg shadow-lg w-1/2 mx-auto'>
            <h1 className='text-3xl underline mb-5'>Product Details</h1>
            <p className='text-xl mb-5'>Category: {params.category}</p>
            <p className='text-xl mb-5'>
                <span className='font-bold text-xl mr-1'>Description: </span> {params.category} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, commodi?</p>
            <Link
                to='/grocery'
                className=' mb-5 p-2 bg-green-500 text-white rounded hover:bg-green-700'
            >
                Go to Grocery
            </Link>

        </div>
    )
}

export default GroceryDetails
