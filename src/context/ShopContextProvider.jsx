/// src/context/ShopContextProvider.jsx
import React,{ useState }  from 'react';
import { ShopContext } from '../context/ShopContext';
import { products } from '../assets/products';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ShopContextProvider = (props) => {  
  const currency = '$';
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(false);
  const [cartItems,setCartItems] = useState({}); // Changed from [] to {}
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if(!size){
      toast.error('Please select a size');
      return;
    }
    console.log('Adding to cart - Item ID:', itemId, 'Size:', size); // Debug log

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    console.log('Updated Cart Data:', cartData); // Debug log
    setCartItems(cartData);
  }

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.error('Error accessing cart item:', error);
        }
      }
    } 
    return totalCount;
  }

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId][size] = quantity;
      // Remove the item if quantity is 0 or less
      if (quantity <= 0) {
        delete cartData[itemId][size];
        // Remove the item entry if no sizes left
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
      setCartItems(cartData);
    }
  }

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const numericItemId = Number(itemId);
      let itemInfo = products.find((product) => product._id === numericItemId);
      // Add safety check for undefined product
      if (itemInfo) {
        for(const size in cartItems[itemId]){
          try {
            if (cartItems[itemId][size] > 0) {
              totalAmount += cartItems[itemId][size] * itemInfo.price;
            }
          } catch(error) {
            console.error('Error calculating cart amount:', error);
          }   
        }
      }
    }
    return Math.round(totalAmount*100)/100; // Round to 2 decimal places
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;