import React,{useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import assets from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {

  const { id } = useParams();
  const {products, currency , addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(null);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const productId = Number(id);
    const product = products.find((item) => item._id === productId);

    if (product) {
        setProductData(product);
        setImage(product.image[0]);
        setSize('');
    }
}, [id, products]);

// This guard clause is essential. It prevents rendering until the product is found.
if (!productData) {
    return <div className='h-screen'></div>;
}

return (

    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/*Product Data  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

      {/* Product Images */}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal'>
          {productData.image.map((item,index)=>(
            <img onClick={()=>setImage(item)} src={item} alt="" key={index} className='w-[35%] sm:w-3/5 sm:mb-3 flex-shrink-0 cursor-pointer' />
          ))}
        </div>
        <div className='w-full sm:w-full md:w-90%'>
          <img className='w-full h-auto' src={image} alt="" />
          </div>
      </div>
      </div>

      {/* --------Product Info-------------- */}
      <div className='flex-1'>
        <h1 className='font-medium tex-2x1 mt-2'>{productData.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
          <img src={assets.star} alt="" className="w-3 5" />
          <img src={assets.star} alt="" className="w-3 5" />
          <img src={assets.star} alt="" className="w-3 5" />
          <img src={assets.star} alt="" className="w-3 5" />
          <img src={assets.star_null} alt="" className="w-3 5" />
          <p className='pl-2'>(152)</p>
        </div>
        <p className='mt-5 text-3xl font-medium'>{currency}{productData.price} </p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

        {(productData.Size && typeof productData.Size === 'string') ? (
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
                <div className='flex gap-2'>
                    {productData.Size.split(', ').map((item, index) => (
                    <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                  ))}
                    </div>
              </div>
          ) : null}
        <button onClick={()=>addToCart(productData._id.toString(), size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700' >ADD TO CART</button>
        <hr className='mt-8 sm:w-4/5' />
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
           <p>100% Original Product</p>
           <p>Delivery fee will apply</p>
           <p>Easy return and exchange policy within 14 days.</p>
        </div>
      </div>
      {/* --------Description & Review Section-------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p> My Emo e-commerce website is a modern and user-friendly platform. You can find your favorite emotion products and explore various products that suit your mood and style. My Emo has something for everyone who loves emo culture.
          </p>
          <p> The website features a clean and intuitive design, making it easy to navigate through different categories and find what you're looking for. Whether you're into emo clothing, accessories, music, or home decor, My Emo has got you covered.</p>
        </div>
      </div>
      {/* ---------Display related products------------- */}
      <RelatedProducts category={productData.category} currentProductId={productData._id} />
    </div>

 
  ) ; 
};

export default Product;
