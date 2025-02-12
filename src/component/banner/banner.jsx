 
 
import img from '/assets/banner.jpg'
function Banner() {
    return (
        <div className="hero w-full md:mb-100 md:-mt-15 bg-blue-500 rounded-2xl mx-auto ">
  <div className="hero-content  pt-20 pb-50 text-center">
    <div className=" ">
      <h1 className="text-[clamp(2rem,5vw,5rem)] px-10 font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 md:px-20">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn btn-outline text-white btn-primary">Shop Now</button>
    </div>
  </div>
  <div className=' md:w-5/7 rounded-2xl border-white bg-white -mb-170 p-10   '>
    <img className='rounded-2xl h-[360px] w-full ' src={img} alt="" /> 
  </div>
</div>
    )
}

export default Banner
