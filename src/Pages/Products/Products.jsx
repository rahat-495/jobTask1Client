
import { Button, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../ProductContext/ProductContext";
import { RiShoppingCart2Line } from "react-icons/ri";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";

const Products = () => {
    
    const {products , setRefetch} = useContext(ProductsContext) ;
    const {user} = useAuth() ;

    const handleAddToCart = async (item) => {
        setRefetch(true) ;
        const {data} = await axios.post(`http://localhost:5555/addToCart` , {email : user?.email ? user?.email : user , ...item}) ;
        setRefetch(false) ;
        toast.success("Item added Success Fully") ;
        console.log(data)
    }

    return (
        <div className="max-w-[1440px] mx-auto min-h-[70vh] flex items-start gap-14 my-10">
            
            <div className="w-[263px] h-screen pr-8 border-r flex flex-col gap-3">

                <Typography as="li" className="p-1 font-normal bar text-2xl border-b pb-4">
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? "font-semibold bg-black px-3 py-2 rounded-md transition-all ease-in-out duration-300 text-white"
                            : ""
                        }
                    >
                        Rocking Chair
                    </NavLink>
                </Typography>

                <Typography as="li" className="p-1 font-normal bar text-2xl border-b pb-4">
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? "font-semibold bg-black px-3 py-2 rounded-md transition-all ease-in-out duration-300 text-white"
                            : ""
                        }
                    >
                        Side chair
                    </NavLink>
                </Typography>

                <Typography as="li" className="p-1 font-normal bar text-2xl border-b pb-4">
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? "font-semibold bg-black px-3 py-2 rounded-md transition-all ease-in-out duration-300 text-white"
                            : ""
                        }
                    >
                        Lounge chair
                    </NavLink>
                </Typography>

            </div>

            <div className="grid grid-cols-3 gap-8">
                {
                    products?.map((item) => (<div className="p-4 border rounded-md flex flex-col items-start" key={item?.id}>
                        <img src={item?.image_url} className="w-full" alt="" />
                        <div className="w-full mt-4">
                            <h1 className="bar font-bold text-xl">{item?.name}</h1>
                            <div className="flex items-center gap-6 w-full bar my-2">
                                <p className="font-bold text-xl">€{item?.price}</p>
                                <p className="text-xl text-[#ABABAB] line-through">€{item?.old_price}</p>
                                <p className="text-xl font-bold text-[#B92E2E]">{item?.discount}</p>
                            </div>
                            <p className="gro font-medium w-[335px]">{item?.description}</p>
                            <Button onClick={() => handleAddToCart(item)} className="capitalize gro text-base w-full mt-2 flex gap-3 items-center justify-center hover:text-black hover:bg-transparent hover:border shadow-none"><RiShoppingCart2Line className="text-xl"/> Add To Cart</Button>
                        </div>
                    </div>))
                }
            </div>

            <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
            />
        </div>
    );
};

export default Products;
