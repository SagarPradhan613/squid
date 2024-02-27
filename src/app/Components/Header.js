const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between w-full lg:px-36 lg:py-6 px-4 py-4">
                <div className="flex hover:scale-110 transition-transform duration-500 ease-in-out justify-center items-center">
                    <img src="/Images/headerlogo.png" className="max-w-[240px]"></img>
                </div>

                <div className="flex justify-center items-center hover:scale-110 transition-transform duration-500 ease-in-out">
                    <p className="lg:text-base text-xs font-medium ">Chart</p>
                </div>

                <div className="flex justify-center items-center">
                    <div className="bg-[#EEB633] hover:scale-110 transition-transform duration-500 ease-in-out rounded-[15px] lg:text-base text-xs font-medium py-2 px-4 lg:px-8">
                        Buy Now
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;