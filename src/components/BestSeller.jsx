import React,{ useContext, useState ,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        if (products && products.length > 0) {
            const bestProduct = products.filter((item)=> (item.bestSeller));
        setBestSeller(bestProduct.slice(0,5))
    }
    },[products])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
         <Title text1={'Best'} text2={'Sellers'}/> 
            <p className='w-3/4 m-auto text-lg sm:text-lg md:text-s text-gray-600'>
                Discover our best-selling products, loved by customers for their style. Shop now to find out why they're favorites!
            </p>

        </div>
      
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
         </div>


    </div>
  )
}

export default BestSeller
