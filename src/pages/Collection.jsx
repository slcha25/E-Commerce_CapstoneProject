import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import assets from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true); // Set to true to show filters by default
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [character, setCharacter] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const toggleCharacter = (e) => {
    const value = e.target.value;
    setCharacter(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  // Consolidated useEffect for all filtering and sorting
  useEffect(() => {
    // Add a console log to see if the search term is being received
    console.log("Current search term:", search);

    let productsCopy = [...products];

    // 1. Apply search filter
    if (search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 2. Apply category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    // 3. Apply character filter
    if (character.length > 0) {
      productsCopy = productsCopy.filter(item => character.includes(item.character));
    }
    
    // 4. Apply sorting
    switch (sortType) {
      case 'price_low_high':
        productsCopy.sort((a, b) => a.price - b.price);
        break;
      case 'price_high_low':
        productsCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        // For 'relevant', we don't need to change the order.
        break;
    }
    
    // 5. Update the state once with the final list
    setFilterProducts(productsCopy);

  }, [products, search, category, character, sortType]); // Dependency array tracks all changes

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img src={assets.arrow_down} alt="arrow" className={`w-4 h-4 mt-1 transition-transform ${showFilter ? '' : '-rotate-90'}`} />
        </p>
        
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'}`}>
          <p className='text-sm font-medium mb-3'>Category</p>
          <div className='flex flex-col gap-2 font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'photos'} onChange={toggleCategory} checked={category.includes('photos')} />Photos
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'movies'} onChange={toggleCategory} checked={category.includes('movies')} />Movies
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'posters'} onChange={toggleCategory} checked={category.includes('posters')} />Posters
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'sweaters'} onChange={toggleCategory} checked={category.includes('sweaters')} />Sweaters
            </p>
          </div>
        </div>

        {/* Character Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'}`}>
          <p className='text-sm font-medium mb-3'>Character</p>
          <div className='flex flex-col gap-2 font-light text-gray-700'>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Joy'} onChange={toggleCharacter} checked={character.includes('Joy')} />Joy</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Sadness'} onChange={toggleCharacter} checked={character.includes('Sadness')} />Sadness</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Anger'} onChange={toggleCharacter} checked={character.includes('Anger')} />Anger</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Disgust'} onChange={toggleCharacter} checked={character.includes('Disgust')} />Disgust</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Fear'} onChange={toggleCharacter} checked={character.includes('Fear')} />Fear</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Embarrassment'} onChange={toggleCharacter} checked={character.includes('Embarrassment')} />Embarrassment</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Anxiety'} onChange={toggleCharacter} checked={character.includes('Anxiety')} />Anxiety</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Envy'} onChange={toggleCharacter} checked={character.includes('Envy')} />Envy</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Ennui'} onChange={toggleCharacter} checked={character.includes('Ennui')} />Ennui</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Other'} onChange={toggleCharacter} checked={character.includes('Other')} />Other</p>      
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-xl mb-4'>
          <Title text1={'ALL'} text2={'Collection'} />
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="price_low_high">Sort by price: low to high</option>
            <option value="price_high_low">Sort by price: high to low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;