import { Outlet } from "react-router-dom"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

 

function Root() {
    return (
        <div>
         <div  className="w-6xl mx-auto">
            <Navbar></Navbar>

            <Outlet ></Outlet>
         </div>

            <Footer></Footer>

        </div>
    )
}

export default Root

