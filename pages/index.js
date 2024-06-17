import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';


const Home = () => {
  const products = [
    { id: 1, name: 'Ragi Nippat', price: 100, description: 'Deliciously crispy and spicy Ragi Nippat, perfect for a healthy snack. Comes in 200 grams.', image: '/raginippat.jpg', category: 'Nippat' },
    { id: 2, name: 'Corn Nippat', price: 100, description: 'Crunchy Corn Nippat made with fresh corn and spices. Comes in 200 grams.', image: '/cornnippat.jpg', category: 'Nippat' },
    { id: 3, name: 'Rice Nippat', price: 100, description: 'Traditional Rice Nippat with a perfect blend of spices. Comes in 200 grams.', image: '/ricenippat.jpg', category: 'Nippat' },
    { id: 4, name: 'Sabudana Kara Nippatu', price: 100, description: 'Spicy and crispy Sabudana Kara Nippatu, ideal for a quick bite. Comes in 200 grams.', image: '/sabudanakaranippattu.jpg', category: 'Nippat' },
    { id: 5, name: 'Chanadal Muruku', price: 100, description: 'Crispy and savory Chanadal Muruku, a traditional delight. Comes in 200 grams.', image: '/chanadalmuruku.jpg', category: 'Muruku' },
    { id: 6, name: 'Ribbon Pakoda', price: 100, description: 'Crunchy and flavorful Ribbon Pakoda, a perfect tea-time snack. Comes in 200 grams.', image: '/ribbonpakoda.jpg', category: 'Muruku' },
    { id: 7, name: 'Sabudana Muruku', price: 100, description: 'Deliciously crispy Sabudana Muruku, a festive favorite. Comes in 200 grams.', image: '/sabudanamuruku.jpg', category: 'Muruku' },
    { id: 8, name: 'Pepper Nippattu', price: 100, description: 'Spicy and tangy Pepper Nippattu, perfect for spice lovers. Comes in 200 grams.', image: '/peppernippattu.jpg', category: 'Nippat' },
    { id: 9, name: 'Butter Murukku', price: 100, description: 'Crispy and buttery Murukku, melts in your mouth. Comes in 200 grams.', image: '/buttermuruku.jpg', category: 'Muruku' },
    { id: 10, name: 'Jowar Nippatu', price: 100, description: 'Healthy and crunchy Jowar Nippatu, perfect for guilt-free snacking. Comes in 200 grams.', image: '/jowarnippat.jpg', category: 'Nippat' },
  ];

  return (
    <Layout>
      <Hero />
      <Banner />
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;