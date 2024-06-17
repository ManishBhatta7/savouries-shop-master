import React from 'react';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/router';
import withAuth from '../components/withAuth';

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const address = formData.get('address');
    const card = formData.get('card');

    alert(`Thank you for your purchase, ${name}! Your order will be shipped to ${address}.`);
    
    dispatch({ type: 'CLEAR_CART' });
    router.push('/');
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 font-serif">Checkout</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Cart Summary:</h2>
              {cart.map(item => (
                <div key={item.id} className="mb-2">
                  <p>{item.name} - Quantity: {item.quantity} - Price: ₹{item.price}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="card" className="block text-gray-700">Credit Card:</label>
                <input
                  type="text"
                  id="card"
                  name="card"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md"
                />
              </div>
              <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg">
                Place Order
              </button>
            </form>
          </>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Checkout);
