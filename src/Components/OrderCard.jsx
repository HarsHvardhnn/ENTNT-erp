import React from "react";

const OrderCard = ({
  order,
  handleDeleteOrder,
  handleUpdateOrderStatus,
  handleViewOrderDetails,
  expanded,
  setExpanded
}) => {
  return ( 
    <div key={order.id} className="flex-col bg-white rounded-lg shadow-md p-6">
      <button
        onClick={() => handleDeleteOrder(order.orderCode)}
        className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-2"
      >
        Delete
      </button>
      <div>
        <p className="text-gray-700 mb-2">Customer: {order.customer}</p>
        <p className="text-gray-700 mb-2">Order Code: {order.orderCode}</p>
        <p className="text-gray-700 mb-2">
          Purchase Date: {order.purchaseDate}
        </p>
        <p className="text-gray-700 mb-2">Status: {order.status}</p>
      </div>
      {expanded && (
        <div className="font-bold">
          <p>Order Code: {order.orderCode}</p>
          <p>Status: {order.status}</p>
          <p>Delivery Date :{order.status === 'Delivered' ? (order.deliveryDate.toDateString()) : ("Order not yet delivered")}</p>
        
        </div>
      )}
      <div className="flex ">
        <button
          onClick={() => handleUpdateOrderStatus(order.orderCode, "Shipped")}
          className=" bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mr-2"
        >
          Ship
        </button>
        <button
          onClick={() => {setExpanded(!expanded)
            handleViewOrderDetails(order) }} // Toggle the expanded state
          className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          {expanded ? 'Hide details' : 'View Details'}
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
