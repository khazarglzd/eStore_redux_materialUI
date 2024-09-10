import React, { useState } from 'react'
import "../css/Header.css"
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";


const Header = () => {

    const [theme, setTheme] = useState(false)

    const changeTheme = () => {
        const root = document.getElementById("root")
        if (theme) {
            root.style.backgroundColor = "#fff"
            root.style.color = "#000"
        }
        else {
            root.style.color = "#fff"
            root.style.backgroundColor = "#000"
        }
        setTheme(!theme)
    }

    return (
        <div className='header-container'>
            <img className='logo' src="./src/images/logo.png" alt="" />
            <div className='search-div'>
                <CiSearch className='icons' />
                <input className='search-input' type="text" placeholder='Searh something...' />
            </div>
            <div className='header-right-side-icons-div'>
                <div className='theme-toggle'>
                    {
                        theme ? <CiLight className='icons' onClick={changeTheme} /> :
                            <CiDark className='icons' onClick={changeTheme} />
                    }
                </div>
                <CiShoppingCart className='icons' />
            </div>
        </div>
    )
}

export default Header 