import React from 'react'
import { TopBrand } from '../Component/TopBrand'
import Banner from '../Component/Banner'
import HBanner from '../Component/HBanner'
import BBanner from '../Component/BBanner'
import Parallaxing from '../Component/Parallaxing'
import Review from '../Component/Review'
import FProducts from '../Component/FProducts'
import NewProducts from '../Component/NewProducts'
import Footer from '../Component/Footer'
import Offcanvaes from '../Component/Offcanvas'


// import bike from "../images/bike.png"
// import { TbMotorbike } from "react-icons/tb";
const Home = () => {
  return (
    
    // <div className='p-2 md:p-4'>
    //    <div className='md:flex'>
    //    <div className='md:w-1/2'>
    //     <div className='flex gap-2 bg-slate-200 w-44 px-2 items-center rounded-full'>
    //        <p className='text-sm'>Door step delivery</p>
    //        <div className=''><TbMotorbike /></div>
    //     </div>
    //       <h2>Every home deserves the best things</h2>
    //    </div>
    //    <div className='md:w-1/2'>
    //        <div>Image 1</div>
    //        <div>Image 2</div>
    //        <div>Image 3</div>
    //    </div>
    // </div>
    // </div>
    <>
    <Banner/>
    <HBanner/>
    <NewProducts/>
    <TopBrand/>
    <Parallaxing/>
    <BBanner/>
    <Review/>
    <FProducts/>
    <Footer/>
    </>

  )
}

export default Home