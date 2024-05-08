const Card = ({url}) => {
    return (
        <>
        <div className=" m-auto">
            <div className="flex flex-row w-[100%] shadow-xl mt-16 hover:scale-125 transition-all duration-500 cursor-pointer">
                <div className="hover:scale-125 transition-all duration-500 cursor-pointer">
                    <img src={url} alt="" width={100} />
                </div>
                <div className="p-5 hover:bg-yellow-300">
                    <p><b>Category Name</b></p>
                    {/* <br /> */}
                    <p className="mt-2">100 Products</p>
                </div>
            </div>
            </div>
          




        </>
    )
}
export default Card;