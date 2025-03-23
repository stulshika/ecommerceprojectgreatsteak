import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            
            {/* Exchange Policy */}
            <div>
                {assets?.exchange_icon && <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Policy" />}
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>We offer a hassle-free exchange policy.</p>
            </div>

            {/* Quality Assurance */}
            <div>
                {assets?.quality_icon && <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Quality Assurance" />}
                <p className='font-semibold'>Quality Assurance</p> {/* ✅ Fixed duplicate title */}
                <p className='text-gray-400'>We ensure top-notch product quality.</p>
            </div>

            {/* 24/7 Customer Support */}
            <div>
                {assets?.support_img && <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Customer Support" />}
                <p className='font-semibold'>24/7 Customer Support</p> {/* ✅ Fixed duplicate title */}
                <p className='text-gray-400'>We're here to assist you anytime.</p>
            </div>
        </div>
    );
};

export default OurPolicy;
