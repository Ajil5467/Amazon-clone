import Image from "next/image";
import { 
    MenuIcon, 
    SearchIcon, 
    ShoppingCartIcon
 } from '@heroicons/react/outline'
 

function Header() {
    return (
        <header>

            {/* Top nav */}
            {/* p1 --means padding one. py-2 padding on y axis is 2 */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                {/* mt - 2 : margin top of 2. */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    {/* This is the next.js image tag. This optimises the image */}
                    <Image 
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    
                    />
                </div>
                {/* search bar */}
                {/* flex grow - take as much as room possible */}
                    <div className="hidden relative items-center flex-grow cursor-pointer rounded-md h-10 bg-yellow-400 sm:flex hover:bg-yellow-500">
                       {/*focus : outline removes that small border  */}
                        <input className="p-2 px-5 h-full width-6 flex-grow rounded flex-shrink rounded-l-md focus:outline-none" type="text" />
                         <SearchIcon className="h-12 p-4"/>
                    </div>
                    {/* right */}
                    {/* space-x-6 give an additional space between elements */}
                        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                        <div className="link ">
                            <p>Hello Ajil</p>
                            <p className="font-extrabold md:text-sm">
                                Account & Lists
                            </p>
                        </div>

                        <div  className="link">
                            <p>Returns</p>
                            <p className="font-extrabold md:text-sm">
                                & Orders
                            </p>
                        </div>

                        <div  className="relative link flex items-center">
                            <span className = "absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded full text-black font-bold">0</span>
                            <ShoppingCartIcon className="h-10 " />
                            {/* this is mobile first. by default we want the basket to be hidden. so use : hidden */}
                            {/* only show at medium screens, md:inline */}
                            {/* margin top of 2 */}
                            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                                Basket
                            </p>
                        </div>

                        </div>
            </div>

{/* Bottom nav */}
{/* space-x-3 p-2 pl-6 this is for spacing of elements, pl - padding left */}
            <div onClick={() => router.push('/product')} className="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center"> 
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy again</p>
                <p className="link hidden lg:inline-flex">Shopping Toolkit</p>
                <p className="link hidden lg:inline-flex">Mens & Womens</p>
            </div>
        </header>
    );
}

export default Header;
