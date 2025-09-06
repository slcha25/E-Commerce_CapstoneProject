import React, { useContext, useEffect, useState }from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const NewCollection = () => {
    const {products} = useContext(ShopContext);
    const [newProducts,setNewProducts] = useState([]);

    useEffect(()=>{
      if (products && products.length > 0) {
        setNewProducts(products.slice(0,5));
      }
    },[products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'New'} text2={'Collection'} />  
        <p className='w-3/4 m-auto text-lg sm:text-lg md:text-s text-gray-600'>
            Explore your emotion with our new collection of exclusive products, designed to inspire and elevate your everyday life.
            </p> 
      </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                newProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
         </div>
        </div>
  )
}
export default NewCollection
