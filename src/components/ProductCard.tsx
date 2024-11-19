import Image from "next/image"

function ProductCard(){
    return (
        <div className="flex flex-col items-center gap-4 p-4 m-4 md:flex-wrap md:flex-row md:justify-center
        lg:flex-row lg:justify-between ">
            <div className="shadow-2xl rounded-lg w-full md:w-[48%] lg:w-[30%]">
                <Image 
                src="/card1.jpeg"
                alt="Camera NIKON D7000"
                width={500}
                height={500}
                />
                <h1 className="text-center font-semibold">NIKON D7000</h1>
                <p className="text-center">Price: 10,000</p>
                <div className="flex items-center justify-center m-2 p-2">
                <button className="bg-neutral-700 text-white rounded-md p-1 mx hover:bg-slate-500">Buy Now</button>
                </div>
            </div>
            <div className="shadow-2xl rounded-lg w-full md:w-[48%] lg:w-[30%]">
                <Image 
                src="/card3.webp"
                alt="Camera Canon EOS 60D"
                width={500}
                height={500}
                />
                <h1 className="text-center font-semibold">Canon EOS 60D</h1>
                <p className="text-center">Price: 15,000</p>
                <div className="flex items-center justify-center m-2 p-2">
                <button className="bg-neutral-700 text-white rounded-md p-1 mx hover:bg-slate-500">Buy Now</button>
                </div>
            </div>
            <div className="shadow-2xl rounded-lg w-full md:w-[48%] md:mt-4 lg:w-[30%]">
                <Image 
                src="/card2.webp"
                alt="Camera NIKON D3500"
                width={500}
                height={500}
                />
                <h1 className="text-center font-semibold">NIKON D3500</h1>
                <p className="text-center">Price: 10,000</p>
                <div className="flex items-center justify-center m-2 p-2">
                <button className="bg-neutral-700 text-white rounded-md p-1 mx hover:bg-slate-500">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;