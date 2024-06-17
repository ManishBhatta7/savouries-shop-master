import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product.price);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (quantity === 5) {
      setPrice(500); // If quantity is 1 kg, set the price to Rs 500
    } else {
      setPrice(product.price); // Otherwise, set the price to the base price
    }
  }, [quantity, product.price]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, price });
    alert('Product added to cart!');
    // Redirect to checkout page
    router.push('/checkout');
    setQuantity(1);
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded"/>
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-gray-900 font-bold mb-4">Price: ₹{price}</p> {/* Updated to show dynamic price */}
      <div className="flex items-center justify-between">
        <label htmlFor="quantity" className="text-gray-700">Quantity:</label>
        <select id="quantity" value={quantity} onChange={handleQuantityChange} className="ml-2 p-1 border rounded">
          <option value={1}>200 grams</option>
          <option value={5}>1 kg</option>
        </select>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-primary text-white py-2 px-4 rounded mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
