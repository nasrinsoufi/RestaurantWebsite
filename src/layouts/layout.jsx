import { Outlet } from "react-router-dom";
import Header from "../Components/Header/header";
import TopNavbar from "../Components/TopNavbar/topNavbar";

const Layout = ()=> {
    return(
        <> 
         <Header/>
         <TopNavbar/>         
         <Outlet/>
        </>
       

    )

}
export default Layout;