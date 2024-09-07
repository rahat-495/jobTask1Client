
import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { ProductsContext } from "../../ProductContext/ProductContext";

const MyCart = () => {

    const {count} = useContext(ProductsContext) ;

    return (
        <div className="max-w-[1440px] min-h-[70vh] flex items-start justify-between my-12 mx-auto gap-20">

            <div className="w-[980px] flex flex-col items-start gap-5">

                <h1 className="gro text-3xl text-black font-semibold">An overview of your order</h1>

                <div className="bg-[#FAFAFA] min-h-[60vh] rounded-lg w-full border">

                    {
                        
                    }

                </div>

            </div>

            <div className="w-[380px] flex flex-col items-start gap-5 fixed right-60">

                <h1 className="gro text-3xl text-black font-semibold">Oder details</h1>

                <div className="bg-[#FAFAFA] min-h-[213px] p-6 rounded-lg w-full border gro">

                    <div className="flex items-center justify-between gro my-2">
                        <h1 className="text-xl">Total Item</h1>
                        <p className="text-xl">{count}</p>
                    </div>
                    <div className="flex items-center justify-between gro my-2">
                        <h1 className="text-xl">Subtotal</h1>
                        <p className="text-xl">€ 1071.00</p>
                    </div>
                    <div className="flex items-center justify-between gro my-2">
                        <h1 className="text-xl">Shipping</h1>
                        <p className="text-xl">Free</p>
                    </div>
                    <div className="flex items-center justify-between gro my-2 border-b pb-2">
                        <h1 className="text-xl">Estimated Tax</h1>
                        <p className="text-xl">€-</p>
                    </div>
                    <div className="flex items-center justify-between gro mt-5">
                        <h1 className="text-2xl font-semibold">Total</h1>
                        <p className="text-2xl font-bold">€ 1071.00</p>
                    </div>

                </div>

                <Button className="capitalize gro text-base w-full mt-2 flex gap-3 items-center justify-center hover:text-black hover:bg-transparent hover:border shadow-none">Go to Checkout</Button>

            </div>

        </div>
    );
};

export default MyCart;
