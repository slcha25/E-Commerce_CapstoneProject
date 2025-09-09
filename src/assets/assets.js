// Import assets
import logo from './logo.png';
import Admin_icon from './Admin_icon.png';
import mail_icon from './mail_icon.png';
import search_icon from './search_icon.png';
import shopping_cart from './shopping_cart.png';
import menu from './menu.png';
import dropdown_icon from './dropdown_icon.png';
import hero from './hero.jpg';
import exchange from './exchange.png';
import return_icon from './return.png';
import support_agent from './support_agent.png';
import arrow_down from './Arrow_down.png';
import cross from './cross.png';
import star from './star.png';
import star_null from './star_null.png';
import bin from './bin.png';    
import Inside_Out_2 from './Inside_Out_2.jpeg';
import Stripe_Logo from './Stripe_Logo.png';
import About_us from './About_us.jpg';
import Contact from './Contact.webp';

// Export assets
const assets = {
    logo,
    Admin_icon,
    mail_icon,
    search_icon,
    shopping_cart,
    menu,
    dropdown_icon,
    hero,
    exchange,
    return_icon,
    support_agent,
    arrow_down,
    cross,
    star,
    star_null,
    bin,
    Inside_Out_2,
    Stripe_Logo,
    About_us,
    Contact,
};

export default assets;

// Now you can import this assets object in other parts of your application
export const products = [
    {
        _id: 0,
        name: "Joy",
        price: 5.00,
        image: ["/assets/products/Joy1.webp"], // Update with actual filenames
        category: "photos",
        description: "One of the main characters representing happiness",
        bestSeller: true ,// Added this property
        character: "Joy",
        Size: "S"
      },
    {
      _id: 1,
      name: "Sadness",
      price: 5.00,
      image: ["/assets/products/Sadness.webp"], // Update with actual filenames
      category: "photos",
      description: "One of the main characters representing sadness",
      bestSeller: true, // Added this property
      character: "Sadness",
      Size: "S"
    },
{
        _id: 2,
        name: "Anger",
        price: 5.00,
        image: ["/assets/products/Anger.webp"], // Update with actual filenames
        category: "photos",
        description: "One of the main characters representing anger",
        bestSeller: false, // Added this property
        character: "Anger",
        Size: "S"
      },
    {
        _id: 3,
        name: "Disgust",
        price: 5.00,
        image: ["/assets/products/Disgust.png"], // Update with actual filenames
        category: "photos",
        description: "One of the main characters representing disgust",
        bestSeller: false,
        character: "Disgust" ,
        Size: "S"
      },
    {
        _id: 4,
        name: "Fear",
        price: 5.00,
        image: ["/assets/products/Fear.png"], // Update with actual filenames
        category: "photos",
        description: "One of the main characters representing fear",
        bestSeller: false,
        character: "Fear",
        Size: "S" 
      },
    {
        _id: 5,
        name: "Embarrassment",
        price: 5.00,
        image: ["/assets/products/Embarrassment.webp"], // Update with actual filenames
        category: "photos",
        description: "A character representing embarrassment",
        bestSeller: true,
        character: "Embarrassment",
        Size: "S" 
      },
    {
        _id: 6,
        name: "Envy",
        price: 5.00,
        image: ["/assets/products/Envy.webp"], // Update with actual filenames
        category: "photos",
        description: "A character representing envy",
        bestSeller: false,
        character: "Envy",
        Size: "S"
      },
    {
        _id: 7,
        name: "Ennui",
        price: 5.00,
        image: ["/assets/products/Ennui.webp"], // Update with actual filenames
        category: "photos",
        description: "A character representing ennui",
        bestSeller: false,
        character: "Ennui",
        Size: "S"
      },
    {
        _id: 8,
        name: "Anxiety",
        price: 5.00,
        image: ["/assets/products/Anxiety.webp"], // Update with actual filenames
        category: "photos",
        description: "A character representing anxiety",
        bestSeller: true,
        character: "Anxiety",
        Size: "S"
      },
    {
        _id: 9,
        name: "Nostalgia",
        price: 5.00,
        image: ["/assets/products/Nostalgia.webp"], // Update with actual filenames
        category: "photos",
        description: "A character representing memories",
        bestSeller: true,
        character: "Other",
        Size: "S"
      },
    {
        _id: 10,
        name: "BingBong",
        price: 5.00,
        image: ["/assets/products/BingBong.webp"], // Update with actual filenames
        category: "photos",
        description: "A character representing Riley's imaginary friend",
        bestSeller: true,
        character: "Other",
        Size: "S"
      },
    {
        _id: 11,
        name: "Riley Andersen",
        price: 5.00,
        image: ["/assets/products/Riley_Andersen.webp"], // Update with actual filenames
        category: "photos",
        description: "The main human character in the movie",
        bestSeller: true,
        character: "Other",
        Size: "S"
      },
    {
        _id: 12,
        name: "Jill Andersen",
        price: 5.00,
        image: ["/assets/products/Jill_Andersen.jpg"], // Update with actual filenames
        category: "photos",
        description: "Riley's mother",
        bestSeller: false,
        character: "Other",
        Size: "S"
      },
    {
        _id: 13,
        name: "Joy & Sadness",
        price: 6.00,
        image: ["/assets/products/Joy_Sadness.webp"], // Update with actual filenames
        category: "photos",
        description: "Joy and Sadness together",
        bestSeller: true,
        character: "Other",
        Size: "S"
      },
    {
        _id: 14,
        name: "Inside Out Group",
        price: 8.00,
        image: ["/assets/products/InsideOut1.webp"], // Update with actual filenames
        category: "photos",
        description: "Main characters from Inside Out",
        bestSeller: true,
        character: "Other",
        Size: "S"
      },
    {
      _id: 15,
      name: "InsideOut 1 Movie DVD",
      price: 19.99,
      image: ["/assets/products/InsideOut1.jpeg"],
      category: "movies",
      description: "InsideOut 1 Movie DVD",
      bestSeller: true,
      character: "Other",
      Size: "S"
    },
    {
        _id: 16,
        name: "InsideOut 2 Movie DVD",
        price: 19.99,
        image: ["/assets/products/InsideOut2.jpeg"],
        category: "movies",
        description: "InsideOut 2 Movie DVD",
        bestSeller: true,
        character: "Other",
        Size: "S"
      },
    {
      _id: 17,
      name: "Inside Out 2 Group Movie Poster",
      price: 15.99,
      image: ["/assets/products/AllEmotion.webp"],
      category: "posters",
      description: "Inside Out 2 Group Movie Poster",
      bestSeller: true,
      character: "Other",
      Size: "S"
    },
    {
        _id: 18,
        name: "Movie Poster-Joy",
        price: 15.99,
        image: ["/assets/products/Joy_p.webp"],
        category: "posters",
        description: "Inside Out 2 Joy Movie Poster",
        bestSeller: true,
        character: "Joy",
        Size: "S"
      },
    {
        _id: 19,
        name: "Movie Poster-Sadness",
        price: 15.99,
        image: ["/assets/products/Sadness_p.jpg"],
        category: "posters",
        description: "Inside Out 2 Sadness Movie Poster",
        bestSeller: true,
        character: "Sadness",
        Size: "S"
      },
    {
        _id: 20,
        name: "Movie Poster-Anger",
        price: 15.99,
        image: ["/assets/products/Anger_p.jpg"],
        category: "posters",
        description: "Inside Out 2 Anger Movie Poster",
        bestSeller: false,
        character: "Anger",
        Size: "S"
      },
    {
        _id: 21,
        name: "Movie Poster-Disgust",
        price: 15.99,
        image: ["/assets/products/Disgust_p.webp"],
        category: "posters",
        description: "Inside Out 2 Disgust Movie Poster",
        bestSeller: false,
        character: "Disgust",
        Size: "S"
      },
    {
        _id: 22,
        name: "Movie Poster-Fear",
        price: 15.99,
        image: ["/assets/products/Fear_p.jpg"],
        category: "posters",
        description: "Inside Out 2 Fear Movie Poster",
        bestSeller: false,
        character: "Fear",
        Size: "S"
      },
    {
        _id: 23,
        name: "Movie Poster-Embarrassment",
        price: 15.99,
        image: ["/assets/products/Embarrassment_p.webp"],
        category: "posters",
        description: "Inside Out 2 Embarrassment Movie Poster",
        bestSeller: true,
        character: "Embarrassment",
        Size: "S"
      },
    {
        _id: 24,
        name: "Movie Poster-Anxiety",
        price: 15.99,
        image: ["/assets/products/Anxiety_p.jpeg"],
        category: "posters",
        description: "Inside Out 2 Anxiety Movie Poster",
        bestSeller: true,
        character: "Anxiety",
        Size: "S"
      },
    {
        _id: 25,
        name: "Movie Poster-Envy",
        price: 15.99,
        image: ["/assets/products/Envy_p.jpeg"],
        category: "posters",
        description: "Inside Out 2 Envy Movie Poster",
        bestSeller: true,
        character: "Envy",
        Size: "S"
      },
    {
        _id: 26,
        name: "Movie Poster-Ennui",
        price: 15.99,
        image: ["/assets/products/Ennui_p.jpg"],
        category: "posters",
        description: "Inside Out 2 Ennui Movie Poster",
        bestSeller: false,
        character: "Ennui",
        Size: "S"
      },
    {
        _id: 27,
        name: "Movie Memory Scene Poster",
        price: 15.99,
        image: ["/assets/products/MemoryScene.jpeg"],
        category: "posters",
        description: "Inside Out Movie Memory Scene Poster",
        bestSeller: true,
        character: "Other",
        Size: "S"
      },
    {
        _id: 28,
        name: "Joy Sweater",
        price: 49.99,
        image: [
          "/assets/products/JoySweater.jpg",
          "/assets/products/JoySweater1.jpg", 
          "/assets/products/JoySweater2.jpg"
        ],
        category: "sweaters",
        description: "Joy-themed sweater",
        bestSeller: true,
        character: "Joy",
        Size: "S, M, L, XL"
      },
    {
        _id: 29,
        name: "Sadness Sweater",
        price: 49.99,
        image: [
          "/assets/products/SadnessSweater.jpg",
          "/assets/products/SadnessSweater1.jpg", 
          "/assets/products/SadnessSweater2.jpg"
        ],
        category: "sweaters",
        description: "Sadness-themed sweater",
        bestSeller: true,
        character: "Sadness",
        Size: "S, M, L, XL"
      },
    {
        _id: 30,
        name: "Anger Sweater",
        price: 49.99,
        image: [
          "/assets/products/AngerSweater.jpg",
          "/assets/products/AngerSweater1.jpg", 
          "/assets/products/AngerSweater2.jpg"
        ],
        category: "sweaters",
        description: "Anger-themed sweater",
        bestSeller: false,
        character: "Anger",
        Size: "S, M, L, XL"
      },
    {
        _id: 31,
        name: "Disgust Sweater",
        price: 49.99,
        image: [
          "/assets/products/DisgustSweater.jpg",
          "/assets/products/DisgustSweater1.jpg", 
          "/assets/products/DisgustSweater2.jpg"
        ],
        category: "sweaters",
        description: "Disgust-themed sweater",
        bestSeller: false,
        character: "Disgust",
        Size: "S, M, L, XL"
      },
    {
        _id: 32,
        name: "Fear Sweater",
        price: 49.99,
        image: [
          "/assets/products/FearSweater.jpg",
          "/assets/products/FearSweater1.jpg", 
          "/assets/products/FearSweater2.jpg"
        ],
        category: "sweaters",
        description: "Fear-themed sweater",
        bestSeller: false,
        character: "Fear",
        Size: "S, M, L, XL"
      },
    {
        _id: 33,
        name: "Anxiety Sweater",
        price: 49.99,
        image: [
          "/assets/products/AnxietySweater.jpg",
          "/assets/products/AnxietySweater1.jpg", 
          "/assets/products/AnxietySweater2.jpg"
        ],
        category: "sweaters",
        description: "Anxiety-themed sweater",
        bestSeller: true,
        character: "Anxiety",
        Size: "S, M, L, XL"
      },
    {
        _id: 34,
        name: "Embarrassment Sweater",
        price: 49.99,
        image: [
          "/assets/products/EmbarrassmentSweater.jpg",
          "/assets/products/EmbarrassmentSweater1.jpg", 
          "/assets/products/EmbarrassmentSweater2.jpg"
        ],
        category: "sweaters",
        description: "Embarrassment-themed sweater",
        bestSeller: true,
        character: "Embarrassment",
        Size: "S, M, L, XL"
      },
    {
        _id: 35,
        name: "Envy Sweater",
        price: 49.99,
        image: [
          "/assets/products/EnvySweater.jpg",
          "/assets/products/EnvySweater1.jpg", 
          "/assets/products/EnvySweater2.jpg"
        ],
        category: "sweaters",
        description: "Envy-themed sweater",
        bestSeller: true,
        character: "Envy",
        Size: "S, M, L, XL"
      },
    {
        _id: 36,
        name: "Ennui Sweater",
        price: 49.99,
        image: [
          "/assets/products/Ennui_Sweater.jpg",
          "/assets/products/Ennui_Sweater1.jpg", 
          "/assets/products/Ennui_Sweater2.jpg"
        ],
        category: "sweaters",
        description: "Ennui-themed sweater",
        bestSeller: false,
        character: "Ennui",
        Size: "S, M, L, XL"
      },
    {
        _id: 37,
        name: "InsideOut Sweater",
        price: 49.99,
        image: [
          "/assets/products/InsideOutSweater.jpg",
          "/assets/products/InsideOutSweater1.jpg", 
          "/assets/products/InsideOutSweater2.jpg"
        ],
        category: "sweaters",
        description: "InsideOut-themed sweater",
        bestSeller: true,
        character: "Other",
        Size: "S, M, L, XL"
      },
  ];