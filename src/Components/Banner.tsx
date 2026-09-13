import Baner from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className="m-1.5 flex justify-between  container mx-auto items-center ">
            <div >
                <h1 className="text-4xl font-bold">Build Your Ideal</h1>
                <h1 className="text-[56px] font-bold leading-[1.05] tracking-[-2px] block bg-linear-to-r from-[rgb(255,87,34)] via-[#E91E63] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</h1>
                <p className="text-lg text-gray-600 mt-4">Explore frontend,backend,database,and tooling options,</p>
                <p className="text-lg text-gray-600 ">compare them side by side, and put together the stack that fits your </p> 
                <p className="text-lg text-gray-600 ">next project</p>
                <div className="flex gap-4 mt-6">
                    <button className="btn bg-amber-600 rounded-[10px]">Explore Technologies</button>
                    <button className="btn bg-white rounded-[10px]">Learn More</button>
                </div>
            </div>
            <div>
                <img src={Baner} alt="Banner" className="w-100 mb-4" />
            </div>

            
        </div>
    );
};

export default Banner;