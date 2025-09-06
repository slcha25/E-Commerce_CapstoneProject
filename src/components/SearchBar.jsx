import React,{useContext,useState,useEffect} from 'react'
import { ShopContext } from '../context/ShopContext';
import assets  from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);  
    const [visible,setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname.includes('Collection')) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, [location]);

  return showSearch ? (
    <div className='flex items-center justify-center gap-4 border-t border-b bg-gray-50 py-4 px-4'>
            {/* This container uses a relative position for the icon */}
            <div className='relative w-full max-w-lg'>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search for products...'
                    // Padding on the right makes space for the icon inside
                    className='w-full p-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <img
                    src={assets.search_icon}
                    alt="search"
                    // Absolute positioning places the icon inside the input field
                    className='absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 cursor-pointer'
                />
            </div>
            {/* The cross icon is now a flex item next to the search input */}
            <img
                onClick={() => setShowSearch(false)}
                className='w-6 h-6 cursor-pointer'
                src={assets.cross}
                alt="close search bar"
            />
        </div>
    ) : null;
};

export default SearchBar;
