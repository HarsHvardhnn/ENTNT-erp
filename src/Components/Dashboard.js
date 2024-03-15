import React from 'react';
import { Link } from 'react-router-dom';
import { orderData, productData } from './OrderData';

function Dashboard() {
  const totalOrders = orderData.length;
  const totalProducts = productData.length;
 
  return (
    <div className=" mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl mb-8 text-center text-gray-800 font-bold">Simplified ERP System With React</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Link to="/product" className="text-center block">
            <h3 className="text-2xl mb-3 text-gray-800 font-bold">Total Products</h3>
            <p className="text-lg text-black">{totalProducts}</p>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Link to="/order" className="text-center block">
            <h3 className="text-2xl mb-3 text-gray-800 font-bold">Total Orders</h3>
            <p className="text-lg text-black">{totalOrders}</p>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Link to="/order" className="text-center block">
            <h3 className="text-2xl mb-3 text-gray-800 font-bold">Calendar View</h3>
            <p className="text-lg text-black">Go to Calendar</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
