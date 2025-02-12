import { Link } from "react-router-dom";
import Productame from "../productname/productame";

 

function Allcatagoty({allcatagory}) {
     
 
 
    
  const {product_title:name,product_id,price,category,product_image:image }=allcatagory
    

  console.log(product_id);
  
    return (
 

        

<div  className="flex gap-5">

    <div>
  {/* <button className="btn">{product.category} </button> */}
  {/* <Productame></Productame> */}
    </div>
<div className="card bg-base-100  p-6 shadow-sm">
  <figure className=" ">
    <img
      src={image}
      alt={name}
      class="rounded-xl h-[200px] bg-gray-300 w-full" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{name}</h2>
    <p>A card component has a figure, a body part,  </p>
    <p>price :${price}</p>
    <div className="card-actions">
      <Link to={`/allcatagory/${product_id}`}><button className="btn">View Details</button></Link>
    </div>
  </div>
</div>
</div>

     

    )
}

export default Allcatagoty
