import React from 'react'
import HomeFurniture from './pages/HomeFurniture'
import Electronics from './pages/Electronics'
import Fashion from './pages/Fashion'
import Grocery from './pages/Grocery'
import GroceryDetails from './pages/GroceryDetails'
import Home from './pages/Home'
import Nav from './pages/Nav'
import { Route, Routes } from 'react-router-dom'
import FashionDetails from './pages/FashionDetails'
import HomeFurnituieDetails from './pages/HomeFurnituieDetails'
import ElectronicsDetails from './pages/ElectronicsDetails'

const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/homeNFurniture"
                    element={<HomeFurniture />}
                >
                    <Route
                        path='/homeNFurniture/:category'
                        element={<HomeFurnituieDetails />}
                    />
                </Route>
                <Route path="/electronics" element={<Electronics />} >
                    <Route path="/electronics/:category" element={<ElectronicsDetails />} />
                </Route>

                <Route>
                    <Route path="/fashion" element={<Fashion />} />
                    <Route path="/fashion/:category" element={<FashionDetails />} />
                </Route>

                <Route path="/grocery" element={<Grocery />} >
                    <Route path="/grocery/:category" element={<GroceryDetails />} />
                </Route>
            </Routes>
        </>

    )
}

export default App
