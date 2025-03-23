import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (Array.isArray(products) && products.length > 0) { // ✅ Prevents error if `products` is undefined
            let filteredProducts = products.filter((item) => 
                item.category === category && item.subCategory === subCategory
            ); // ✅ Combined filtering into one step
            
            setRelated(filteredProducts.slice(0, 50)); // ✅ Limits to 50 items
        }
    }, [products, category, subCategory]); // ✅ Added dependencies to update when category changes

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'> {/* ✅ Fixed `text-3x1` */}
                <Title text1={'RELATED'} text2={"PRODUCTS"} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.length > 0 ? (
                    related.map((item, index) => (
                        <ProductItem key={item._id || index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))
                ) : (
                    <p className="text-center col-span-5 text-gray-500">No related products found.</p> // ✅ Fallback message
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;
