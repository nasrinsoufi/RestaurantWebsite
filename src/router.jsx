import { createBrowserRouter } from "react-router-dom";
import Cart from "./Components/Cart/cart";
import Layout from "./layouts/layout";
import HomePage from "./Components/HomePage/homePage";
import Login ,{loginAction} from "./Identity/Login/login";
import Register, {registerAction} from "./Identity/Register/register";



const router=createBrowserRouter ([
    
       
         {  
             path: "/",
             element:<Layout/>,
             children:[
                {
                    element: <HomePage/>,
                    index: true
                },
                {
                    path: 'cart',
                    element: <Cart/>
                },

                {
                    path: "login",
                    element: <Login />,
                    action: loginAction,
                    errorElement: <Login />,
                },
                {
                    path: "register",
                    element: <Register />,
                    action: registerAction,
                    errorElement: <Register />,
                },

                

            ] 
    }
])

export default router;