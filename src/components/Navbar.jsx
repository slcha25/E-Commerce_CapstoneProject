import React, { useContext, useState } from 'react';
import assets from '../assets/assets';
import { NavLink, Link } from 'react-router-dom'; // 1. Import useNavigate
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch ,getCartCount } = useContext(ShopContext);

    // This function now simply toggles the search bar's visibility
    const handleSearchClick = () => {
    setShowSearch(prev => !prev); // Toggles the state (true -> false, false -> true)
};

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'><img src={assets.logo} alt="logo" className='w-38 '
                onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'block';
                    }
                }} />
                {/* Fallback text if image fails to load */}
                <div className="w-32 h-10 bg-gray-200 items-center justify-center hidden ">
                    LOGO
                </div></Link>
            <ul className='hidden sm:flex gap-5 text-lg font-semibold text-gray-700 md:flex items-center '>
                <NavLink to='/' className='flex flex-col items-center gap-1 hover:text-blue-500'>
                    <p>Home</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:text-blue-500'>
                    <p>Collection</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-blue-500'>
                    <p>About</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-blue-500'>
                    <p>Contact</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                {/* 4. Use the new handler function in the onClick event */}
                <img onClick={handleSearchClick} src={assets.search_icon} className='w-8 sm:w-10 cursor-pointer' alt="search icon" />

                <div className='group relative'>
                    <img src={assets.Admin_icon} className='w-8 sm:w-10 cursor-pointer' alt="admin icon" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:tex-black'>My Profit</p>
                            <p className='cursor-pointer hover:tex-black'>Orders</p>
                            <p className='cursor-pointer hover:tex-black'>Log Out</p>
                        </div>
                    </div>
                </div>
                <Link to='/Cart' className='relative'>
                    <img src={assets.shopping_cart} className='w-8 sm:w-10 cursor-pointer' alt="cart icon" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu} className='w-6 cursor-pointer sm:hidden' alt="Menu_icon" />
            </div>

            {/* Sidebar menu for small screens */}
            <div className={`fixed top-0 right-0 bottom-0 h-full overflow-hidden bg-white transition-all z-20 ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='rotate-180 w-8 h-8' src={assets.dropdown_icon} alt="dropdown icon" />
                        <p className='text-lg'>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Collection'>Collection</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/About'>About</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Contact'>Contact</NavLink>
                </div>
            </div>
            {/* Backdrop */}
            {visible && <div onClick={() => setVisible(false)} className='fixed top-0 left-0 w-full h-full bg-black opacity-30 z-10'></div>}
        </div>
    )
}

export default Navbar;