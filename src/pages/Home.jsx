import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container mx-auto mt-10 bg-zinc-100 px-10 py-24 rounded-lg shadow-lg">
            <h1 className="text-center text-5xl font-bold mt-10">
                Welcome to the Flipcart Store
            </h1>
            <p className="text-center text-2xl mt-5">
                This is a demo project for a store where you can find different categories of products.
            </p>
            <p className="text-center text-2xl mt-5">
                Click on the categories to see the products.
            </p>
            {/* show all the categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <h1 className="text-2xl font-bold text-center">
                        <Link to={'/homeNFurniture'} className="hover:text-blue-500">
                            Home Furniture
                        </Link>
                    </h1>
                    <p className="mt-5 text-center">Discover a wide range of furniture for your home, from sofas to dining tables.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <h1 className="text-2xl font-bold text-center">
                        <Link to={'/electronics'} className="hover:text-blue-500">
                            Electronics
                        </Link>
                    </h1>
                    <p className="mt-5 text-center">Find the latest gadgets and electronics, including smartphones, laptops, and more.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <h1 className="text-2xl font-bold text-center">
                        <Link to={'/fashion'} className="hover:text-blue-500">
                            Fashion
                        </Link>
                    </h1>
                    <p className="mt-5 text-center">Explore the latest trends in fashion for men, women, and children.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <h1 className="text-2xl font-bold text-center">
                        <Link to={'/grocery'} className="hover:text-blue-500">
                            Grocery
                        </Link>
                    </h1>
                    <p className="mt-5 text-center">Shop for fresh groceries, including fruits, vegetables, and daily essentials.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <h1 className="text-2xl font-bold text-center">
                        <Link to={'/sports'} className="hover:text-blue-500">
                            Sports
                        </Link>
                    </h1>
                    <p className="mt-5 text-center">Get the best sports gear and equipment for all your favorite activities.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <h1 className="text-2xl font-bold text-center">
                        <Link to={'/books'} className="hover:text-blue-500">
                            Books
                        </Link>
                    </h1>
                    <p className="mt-5 text-center">Browse through a vast collection of books across various genres and authors.</p>
                </div>
            </div>
        </div>
    )
}

export default Home