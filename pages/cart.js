import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();
  const router = useRouter();

  const handleRemoveFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleProceedToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <Layout>
      <div className="container mx-auto p-4 pt-20">
        <h1 className="text-3xl font-bold mb-4 font-serif">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map(item => (
              <div key={item.id} className="mb-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mb-2"/>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price}</p>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg mt-2"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={handleProceedToCheckout}
              className="mt-4 bg-primary text-white py-2 px-4 rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
