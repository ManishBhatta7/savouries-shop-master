import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 pt-20">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700">If you have any questions, feel free to reach out to us at:</p>
        <p className="text-gray-700 mt-2">Email: support@ike.com</p>
        <p className="text-gray-700 mt-2">Phone: +91 12345 67890</p>
      </div>
    </Layout>
  );
};

export default Contact;
