import React,{ useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';


const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

    const handleImageError = (e) => {
        e.target.src = '/react-commerce/src/assets/Inside_Out_2.jpeg'; // Fallback image URL
    }
         // use the first image or placeholder if image array is empty or undefined
         const mainImage = image && image.length > 0 ? image[0] : '/react-commerce/src/assets/Inside_Out_2.jpeg';
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/Product/${id}`}>
    <div className= 'overflow-hidden rounded-lg bg-gray-100'>
        <img className='w-full h-48 object-cover hover:scale-110 transition-transform ease-in-out' src={mainImage} alt={name} onError={handleImageError} loading='lazy' />
    </div>
    <p className='pt-3 pb-1 text-sm truncate'>{name}</p>
    <p className='text-sm font-semibold'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
