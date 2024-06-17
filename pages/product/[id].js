import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useCart } from '../../context/CartContext.js';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const { dispatch } = useCart();

  const [quantity, setQuantity] = useState(100);

  const products = [
    { id: 1, name: 'Ragi Nippat', price: 100, description: 'Deliciously crispy and spicy Ragi Nippat, perfect for a healthy snack. Comes in 200 grams.', image: '/images/raginippat.jpg', category: 'Nippat' },
    { id: 2, name: 'Corn Nippat', price: 100, description: 'Crunchy Corn Nippat made with fresh corn and spices. Comes in 200 grams.', image: '/images/cornnippat.jpg', category: 'Nippat' },
    { id: 3, name: 'Rice Nippat', price: 100, description: 'Traditional Rice Nippat with a perfect blend of spices. Comes in 200 grams.', image: '/images/ricenippat.jpg', category: 'Nippat' },
    { id: 4, name: 'Sabudana Kara Nippatu', price: 100, description: 'Spicy and crispy Sabudana Kara Nippatu, ideal for a quick bite. Comes in 200 grams.', image: '/images/sabudanakaranippattu.jpg', category: 'Nippat' },
    { id: 5, name: 'Chanadal Muruku', price: 100, description: 'Crispy and savory Chanadal Muruku, a traditional delight. Comes in 200 grams.', image: '/images/chanadalmuruku.jpg', category: 'Muruku' },
    { id: 6, name: 'Ribbon Pakoda', price: 100, description: 'Crunchy and flavorful Ribbon Pakoda, a perfect tea-time snack. Comes in 200 grams.', image: '/images/ribbonpakoda.jpg', category: 'Muruku' },
    { id: 7, name: 'Sabudana Muruku', price: 100, description: 'Deliciously crispy Sabudana Muruku, a festive favorite. Comes in 200 grams.', image: '/images/sabudanamuruku.jpg', category: 'Muruku' },
    { id: 8, name: 'Pepper Nippattu', price: 100, description: 'Spicy and tangy Pepper Nippattu, perfect for spice lovers. Comes in 200 grams.', image: '/images/peppernippattu.jpg', category: 'Nippat' },
    { id: 9, name: 'Butter Murukku', price: 100, description: 'Crispy and buttery Murukku, melts in your mouth. Comes in 200 grams.', image: '/images/buttermuruku.jpg', category: 'Muruku' },
    { id: 10, name: 'Jowar Nippatu', price: 100, description: 'Healthy and crunchy Jowar Nippatu, perfect for guilt-free snacking. Comes in 200 grams.', image: '/images/jowarnippat.jpg', category: 'Nippat' },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    if (quantity === 500) {
      setPrice(500); // If quantity is 1 kg, set the price to Rs 500
    } else {
      setPrice(product.price); // Otherwise, set the price to the base price
    }
  }, [quantity, product.price]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price,
      quantity,
      image: product.image,
    };
    dispatch({ type: 'ADD_TO_CART', payload: item });
    alert(`${product.name} added to cart!`);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 font-serif">{product.name}</h1>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-lg"/>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-primary font-bold text-lg">
          ₹{price}
        </p>
        <div className="mt-4">
          <label htmlFor="quantity" className="block text-gray-700">Quantity (gms):</label>
          <select
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
          >
            <option value={100}>200 gms</option>
            <option value={500}>1 kg</option>
          </select>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-primary text-white py-2 px-4 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </Layout>
  );
};

export default Product;
