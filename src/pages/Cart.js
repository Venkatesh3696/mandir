import React from "react";
import { Link } from "react-router-dom"; // For adding navigation links

const Cart = () => {
  const billDetails = () => {
    return (
      <div className="container card mx-auto px-4 py-16 w-1/3">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-bold">Bill Details</h1>
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Apply Coupon
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div>
            <p className="text-gray-700 text-base mb-2">Service</p>
            <p className="text-lg font-bold mb-4">Individual Puja</p>
            <p className="text-gray-700 text-base mb-2">Price</p>
            <p className="text-lg font-bold mb-4">₹ 851.00</p>
          </div>
          <div className="text-right">
            <p className="text-gray-700 text-base mb-2">Total Amount</p>
            <p className="text-2xl font-bold mb-4">₹ 851.00</p>
            <Link to={`/epuja/sankalp/${1}`}>
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-red-500 text-white font-bold hover:bg-red-700"
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="h-screen bg-gradient-to-b  to-blue-200">
      <header className="flex justify-between items-center px-4 py-8">
        <h1 className="text-3xl font-bold text-white">Sri Mandir</h1>
        <nav className="text-white">
          <Link to="/puja" className="px-2 hover:underline">
            Puja Services
          </Link>
          <Link to="/about" className="px-2 hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="px-2 hover:underline">
            Contact
          </Link>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-16 flex flex-col gap-12">
        {billDetails()}
      </main>
      <footer className="text-center text-white py-4">© 2024 Sri Mandir</footer>
    </div>
  );
};

export default Cart;
