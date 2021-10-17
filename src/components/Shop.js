import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux'



const Shop = () => {
    const state = useSelector((state)=> state.addItem)

    return (
        <>
        <NavLink to="/cart" className="btn btn-outline-primary">
       <AiOutlineShoppingCart /> Cart ({state.length})

        </NavLink>
        
        

        </>
    )
}

export default Shop
