import React from 'react'
import "../css/Header.css"
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div className='header-container'>
            <img className='logo' src="./src/images/logo.png" alt="" />
            <div className='search-div'>
                <CiSearch className='icons' />
                <input className='search-input' type="text" placeholder='Searh something...' />
            </div>
            <div className='header-right-side-icons-div'>
                <div className='theme-toggle'>
                </div>
            </div>
        </div>
    )
}

export default Header