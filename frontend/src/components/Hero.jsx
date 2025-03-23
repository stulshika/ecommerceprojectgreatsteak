import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'> {/* ✅ Fixed typo in "border order-gray-400" */}
            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p> {/* ✅ Fixed md: text-base */}
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'> {/* ✅ Fixed text-3x1 and text-5x1 */}
                        Latest Arrival
                    </h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p> {/* ✅ Fixed md: text-base */}
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>

            {/* Hero Right Side */}
            {assets?.hero_img ? ( // ✅ Ensure hero_img exists before rendering
                <img className='w-full sm:w-1/2' src={assets.hero_img} alt="Hero Banner" />
            ) : (
                <p className="text-gray-500 text-center">Image not available</p> // ✅ Display a fallback message
            )}
        </div>
    );
};

export default Hero;
