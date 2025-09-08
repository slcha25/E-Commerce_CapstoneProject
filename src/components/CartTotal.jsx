import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {

    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);

    // Format numbers to 2 decimal places
    const subtotal = getCartAmount();
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee;
    
    const formatCurrency = (amount) => {
      return amount.toFixed(2);
    }

  return (
    <div className='w-full'>
      <div className='text-xl'>
        <Title text1={'Cart'} text2={'Total'} />    
      </div>
      
       <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency}{formatCurrency(subtotal)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Delivery Fee</p>
            <p>{currency}{formatCurrency(delivery_fee)}</p>
        </div>
        <hr />
        <div className='flex justify-between font-bold text-lg'>
            <p>Total</p>
            <p>{currency}{formatCurrency(total)}</p>
        </div>
       </div>
    </div>
  )
}

export default CartTotal
