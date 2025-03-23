import React, { useContext } from 'react';
import { ShopContext } from "../context/ShopContext";
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    const subtotal = getCartAmount() || 0; // ✅ Ensure subtotal is always a number
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee; // ✅ Avoid `undefined + number` issues

    return (
        <div className='w-full'>
            <div className='text-2xl'> {/* ✅ Fixed incorrect Tailwind class */}
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {subtotal.toFixed(2)}</p> {/* ✅ Ensure decimal format */}
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency} {delivery_fee.toFixed(2)}</p> {/* ✅ Ensure decimal format */}
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {total.toFixed(2)}</b> {/* ✅ Ensure decimal format */}
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
