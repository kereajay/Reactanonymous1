// import { Select, Option } from "@material-tailwind/react";
const Header = () => {
    return (
        <>
        <div className="bg-slate-600  flex flex-row">
            <div className="flex flex-row p-5 bg-yellow-300 ml-16"  >
                <img src="https://www.svgrepo.com/show/522140/hamburger.svg" className="img-thumbnail" alt="..." width={20}/>
                <select name="" id="" className="bg-yellow-300 border-none ml-5" >
                    <option value="" className="bg-yellow-300">Categories</option>
                    <option value="">Dress</option>
                    <option value="">Shirts</option>
                    <option value="">Jeans</option>
                    <option value="">Swimwear</option>
                    <option value="">Sleepwear</option>
                    <option value="">Sportswear</option>
                    <option value="">Jumpsuits</option>
                    <option value="">Blazers</option>
                    <option value="">Jackets</option>
                    <option value="">Shoes</option>
                </select>
            </div>
            <div>
                <ul  className="flex flex-row justify-center text-white mt-5" >
                    <li className="ml-20">Home</li>
                    <li className="ml-20">Shop</li>
                    <li className="ml-20">Shop Detail</li>
                    <li className="ml-20">
                        <select name="" id="" className="border-none bg-slate-600">
                            <option value="">Pages</option>
                            <option value="">Shopping cart</option>
                            <option value="">Checkout</option>
                        </select>
                    </li>
                    <li className="ml-20">Contact</li>
                </ul>
            </div>
            <div className="flex flex-row  mt-5 ml-80">
                <p>💛</p>
                <p className="ml-5">🛒</p>
                
               {/* <img src="https://www.svgrepo.com/show/452178/cart.svg" alt="" width={30} /> */}
            </div>
        </div>
        <br />

        <div>
            <div className="w-[90%]  m-auto flex flex-row gap-5 ">
                <div className="w-[70%]">
                    <img src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/carousel-1.jpg" alt="" />

                </div>
                <div className="w-[30%] gap-y-10 grid-cols-1">
                    <div>
                        <img src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/offer-1.jpg" alt="" />
                    </div>
                    <div  className="mt-14"> 
                        <img src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/offer-2.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>


            
        </>
    )
}
export default Header;