import ProductListingPage from "../ui/page/ProductListingPage";
import {createBrowserRouter} from "react-router-dom";
import ProductDetailPage from "../ui/page/ProductDetailPage/ProductDetailPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListingPage/>
    },
    {
        // path: "/product/:productId/:userId",
        path: "/public/product/:pid",
        element: <ProductDetailPage/>
    },
    // {
    //     path: "/shoppingcart",
    //     element: <ShoppingCart/>
    // },
    // {
    //     path: "/login",
    //     element: <LoginPage/>
    // },
    // {
    //     path: "/checkout/:transactionId",
    //     element: <Checkout/>
    // },
    // {
    //     path: "/thankyou",
    //     element: <ThankYou/>
    // }
])