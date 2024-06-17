// components/Layout.js

import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <footer className="bg-gray-200 py-4 text-center">
        <p>&copy; 2024 Indian Kitchen Eateries. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
