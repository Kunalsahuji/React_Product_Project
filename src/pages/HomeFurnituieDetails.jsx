import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const HomeFurnituieDetails = () => {
    const { category } = useParams()
    const navigate = useNavigate()
    return (
        <div className='mt-5 font-bold mb-10 p-5 bg-gray-100 rounded-lg shadow-lg w-1/2 mx-auto'>
            <h1 className='text-3xl underline mb-5'>Product Details</h1>
            <p className='text-xl mb-5'>Category: {category}</p>
            <p className='text-xl mb-5'>
                <span className='font-bold text-xl mr-1'>Description: </span> {category} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, commodi?</p>
            <button
                onClick={() => navigate('/homeNFurniture')}
                className=' mb-5 p-2 bg-green-500 text-white rounded hover:bg-green-700'
            >
                Go to Home Furniture
            </button>

        </div>
    )
}

export default HomeFurnituieDetails
