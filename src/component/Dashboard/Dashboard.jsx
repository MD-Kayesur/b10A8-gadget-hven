import { NavLink } from "react-router-dom"

 

function Dashboard() {


    const cartside = ()=>{
        const wish = document.getElementById('wish')
wish.classList='hidden'
 const cart = document.getElementById('cart')
        cart.classList='block md:w-5/7 rounded-2xl border-white bg-white -mb-130 p-10 '
    }

    const wishside =()=>{
        const cart = document.getElementById('cart')
        cart.classList='hidden'
        const wish = document.getElementById('wish')
wish.classList='block md:w-5/7 rounded-2xl border-white bg-white -mb-130 p-10 '
    }


    return (
        <div className="hero w-full md:mb-100  bg-blue-500 rounded-2xl mx-auto ">
           <div className="hero-content  pt-10 pb-50 text-center">
             <div className=" ">
               <h1 className="text-[clamp(2rem,5vw,5rem)] px-10 font-bold"> Dash Bord</h1>
               <p className="py-6 md:px-20">
               Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
               </p> 
           <div className="flex justify-center gap-4">  
           <button  onClick={cartside} className="btn btn-outline text-white btn-primary">Cart</button>
           <button  onClick={wishside} className="btn btn-outline text-white btn-primary">Wish List</button>
           </div>
   


             </div>
           </div>


 



           <div id="cart" className=' md:w-5/7 rounded-2xl border-white bg-white -mb-130 p-10   '> 
       
           <div className="hero bg-white ">
         <div className="  flex items-center  gap-8">
           <img
             src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
             class=" h-full  rounded-lg shadow-2xl" />
           <div>
             <h1 className="text-5xl mb-6 font-bold"> cart section</h1>
               <h2 className="font-bold my-2">Price : ${ }</h2>
               <p><span className=" font-bold">description :</span> { }</p>
                <p className="my-2"><span className="font-bold">Specification : </span> {  } </p>
                <div className="font-bold gap-2 flex items-center">   <div className="rating rating-xs">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" defaultChecked /> </div> </div>
                 
             
           </div>
         </div>
       </div>
        
            
         </div>



         <div id="wish" className='   md:w-5/7 rounded-2xl border-white bg-white -mb-130 p-10   '> 
       
           <div className="hero bg-white ">
         <div className="  flex items-center  gap-8">
           <img
             src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
             class=" h-full  rounded-lg shadow-2xl" />
           <div>
             <h1 className="text-5xl mb-6 font-bold"> wish section</h1>
               <h2 className="font-bold my-2">Price : ${ }</h2>
               <p><span className=" font-bold">description :</span> { }</p>
                <p className="my-2"><span className="font-bold">Specification : </span> {  } </p>
                <div className="font-bold gap-2 flex items-center">   <div className="rating rating-xs">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" defaultChecked /> </div> </div>
                 
             
           </div>
         </div>
       </div>
        
            
         </div>
         </div>
    )
}

export default Dashboard
