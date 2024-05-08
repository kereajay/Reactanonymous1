const Card2=({url})=>{
    return (
        <>
        <div className="w-[100%] text-center items-center mt-10 shadow-2xl p-4">
            <div className="m-auto text-center">
                <img src={url} alt="" width={350}  className="hover:scale-105 transition-all duration-500 cursor-pointer"  />
            </div>
            <div className="text-center ">
                <h2 className="font-medium hover:text-yellow-400">Product Name Goes Here</h2>
                <p className="text-lg">$123.00 <s>$123.00</s> </p>
            </div>
            <p>⭐⭐⭐⭐⭐(99)</p>
          
        </div>
       
        
        
        </>
    )

}
export default Card2;