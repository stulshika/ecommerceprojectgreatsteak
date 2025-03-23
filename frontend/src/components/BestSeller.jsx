import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem'; // ✅ Ensure ProductItem is imported

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) { // ✅ Ensure products exist before filtering
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]); // ✅ Added dependency to re-run effect when products update

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'> 
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum is simply dummy text used in the printing and typesetting industry.
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.length > 0 ? ( // ✅ Ensure `bestSeller` isn't empty before rendering
                    bestSeller.map((item, index) => (
                        <ProductItem 
                            key={index} 
                            id={item.id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price} 
                        />
                    ))
                ) : (
                    <p className="text-center col-span-5 text-gray-500">No bestsellers available</p> // ✅ Handle empty data case
                )}
            </div>
        </div>
    );
};

export default BestSeller;
