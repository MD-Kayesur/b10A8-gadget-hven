import { useLoaderData, useParams } from "react-router-dom"
import Navbar from "../navbar/navbar";
import Banner from "../banner/banner";
import { FcRating } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

function Productdetail() {
    const {product_id} = useParams()
    console.log(product_id);

    // const id = parseInt(product_id) 
    const data = useLoaderData() 
 console.log(data);
 
    const book = data.find(product => product.product_id === product_id)
    console.log(book);
    
   const {Specification,rating,product_title,product_image,price,product_id:p_id,description,category, availability }=book
    


    return (


     <div className="hero w-full md:mb-100  bg-blue-500 rounded-2xl mx-auto ">
    <div className="hero-content  pt-10 pb-50 text-center">
      <div className=" ">
        <h1 className="text-[clamp(2rem,5vw,5rem)] px-10 font-bold"> product details</h1>
        <p className="py-6 md:px-20">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p> 
      </div>
    </div>
    <div className=' md:w-5/7 rounded-2xl border-white bg-white -mb-130 p-10   '>
      


    <div className="hero bg-white ">
  <div className="  flex items-center  gap-8">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      class=" h-full  rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl mb-6 font-bold"> {product_title}</h1>
        <h2 className="font-bold my-2">Price : ${price}</h2>
        <p><span className=" font-bold">description :</span> {description}</p>
         <p className="my-2"><span className="font-bold">Specification : </span> {Specification.join(','+ ' ')} </p>
         <div className="font-bold gap-2 flex items-center">Reating  <div className="rating rating-xs">
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" defaultChecked /> </div> </div>
         <h2 className="gap-3 items-center my-2 text-xl flex"> <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" defaultChecked/>
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked/>
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" defaultChecked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked />
  <input type="radio" name="rating-5" className="mask mask-star-2   " aria-label="5 star" />
</div> {rating}</h2>
     <div className="flex gap-3">
     <button  className="btn btn-outline btn-primary"> Add To Card <FiShoppingCart></FiShoppingCart> </button>
     <button className="btn rounded-full   btn-outline btn-primary"><AiOutlineHeart  ></AiOutlineHeart></button>
     </div>
    </div>
  </div>
</div>



    </div>

    <div className="h-[350px] -mb-190 w-full -z-10 bg-gray-200">
 <h2>  </h2>
    </div>
  </div>
//         <div className="hero bg-base-200 ">
            
//   <div className="hero-content flex-col lg:flex-row">
//     <img
//       src={product_image}
//       class="max-w-sm rounded-lg shadow-2xl" />
//     <div>
//       <h1 className="text-5xl font-bold">{product_title}</h1>
//       <p className="py-6"> {description}
//       </p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div>
    )
}

export default Productdetail
