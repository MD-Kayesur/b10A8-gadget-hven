import { useEffect, useState } from "react"
import Allcatagoty from "../allcatagory/allcatagoty"
import Productame from "../productname/productame"

 

function Allcatagoris() {

    const [allcatagoris,setallacatagoris]  = useState([])
   
   

    useEffect(()=>{
        fetch('/public/catagoris.json')
        .then(res=>res.json())
        .then(data=> setallacatagoris(data)
        )
    },[])



    return (
        <div className="my-10">
            <h2 className="text-3xl text-center font-bold">Explore Cutting Edge gadgets</h2>
 <div className="flex gap-5">
 <div className="mt-10">
 {/* {
allcatagoris.map(product => <Productame product={product.category}></Productame>)
 } */}
 </div>
 <div className="grid gap-10 my-10 md:grid-cols-3"> 
    {
        allcatagoris.map((allcatagory,inx) => <Allcatagoty key={inx} allcatagory={allcatagory} 
        // product={allcatagory}
        > </Allcatagoty>) 
    }
 </div>
 </div>
        </div>
    )
}

export default Allcatagoris
