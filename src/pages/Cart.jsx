import React, { useContext, useEffect ,useState } from 'react'
import assets from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]); 

  useEffect(() => {
    const tempData = [];
    console.log('Cart Items:', cartItems); // Debug log
    
    for (const itemId in cartItems) {
      for(const size in cartItems[itemId]){
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            itemId: itemId,        // This should be the product ID
            size: size,            // This should be the size (S, M, L, etc.)
            quantity: cartItems[itemId][size]
          })
        }
      }
    }
    console.log('Cart Data:', tempData); // Debug log
    setCartData(tempData);
  }, [cartItems])

  return (
    <div className='border-t pt-14'>
      <div className='text-xl mb-3'>
        <Title text1={'Your'} text2={'Cart'} />
      </div>
      
      {cartData.length === 0 ? (
        <div className='text-center py-10'>
          <p className='text-gray-500'>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div>
            { 
              cartData.map((item, index) => {
                const productData = products.find((product) => product._id === Number(item.itemId));
                
                console.log('Product Data:', productData); // Debug log
                console.log('Item:', item); // Debug log
                
                // Safety check for undefined productData
                if (!productData) {
                  console.warn('Product not found for ID:', item.itemId);
                  return null;
                }
                
                return (
                  <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                    <div className='flex items-start gap-6'>
                      <img 
                        className='w-16 sm:w-20' 
                        src={productData.image && productData.image.length > 0 ? productData.image[0] : 'https://via.placeholder.com/100'} 
                        alt={productData.name} 
                      />
                      <div>
                        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                        <div className='flex item-center gap-5 mt-2'>
                          <p>{currency}{productData.price.toFixed(2)}</p>
                          <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>Size: {item.size}</p>
                        </div>
                      </div>
                    </div>
                    <input 
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value === '' || value === '0') {
                          updateQuantity(item.itemId, item.size, 0);
                        } else {
                          updateQuantity(item.itemId, item.size, Number(value));
                        }
                      }} 
                      className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' 
                      type='number' 
                      min={1} 
                      value={item.quantity} 
                    />
                    <img 
                      onClick={() => updateQuantity(item.itemId, item.size, 0)} 
                      className='w-4 mr-4 sm:w-5 cursor-pointer' 
                      src={assets.bin} 
                      alt="Delete" 
                    />
                  </div>
                )
              })
            }
          </div>
          <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
              <CartTotal />
              <div className='w-full text-end'>
                <button onClick={() => navigate('/PlaceOrder')} className='bg-black text-white px-6 py-3 mt-6'>Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart