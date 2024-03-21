import { Link } from 'react-router-dom'

const Banners = () => {
    return (
        <div lassName='p-[28px] flex flex-col gap-[40px] w-[1030px]'>
            <div className="flex justify-between items-center">
                <div className="flex items-start gap-[8px]">
                    <Link className='text-[#262626] p-[8px_16px] rounded-[4px]' to={"/dashboard/other"} ><h1 className='text-[16px] font-[500]'>Categories</h1></Link>
                    <Link className='text-[#262626] p-[8px_16px] rounded-[4px]' to={"/dashboard/brands"} ><h1 className='text-[16px] font-[500]'>Brands</h1></Link>
                    <Link className='bg-[#DBEAFE] text-[#1D4ED8] p-[8px_16px] rounded-[4px]' to={"/dashboard/banners"} ><h1 className='text-[16px] font-[500]'>Banners</h1></Link>
                </div>
            </div>
        </div>
    )
}

export default Banners
