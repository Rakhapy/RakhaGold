const Colorchecker = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-1" > 
            <h1>Color Checker</h1>
            <div className="flex gap-1" > 
                <div className="w-[2rem] h-[4rem] bg-[#A64D79]" ></div>
                <div className="w-[3rem] h-[4rem] bg-[#6A1E55]" ></div>
                <div className="w-[4rem] h-[4rem] bg-[#3B1C32]" ></div>
                <div className="w-[5rem] h-[4rem] bg-[#1A1A1D]" ></div>
            </div>
        </div>
    )
}

export default Colorchecker