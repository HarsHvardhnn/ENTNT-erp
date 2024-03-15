import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import { orderData } from './OrderData';
import OrderCard from './OrderCard';

function Order() {
  const [orders, setOrders] = useState(orderData);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectedDeliveryStatus, setSelectedDeliveryStatus] = useState('');
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [orderDeliveryDates, setOrderDeliveryDates] = useState([]);

  useEffect(() => {
    filterOrdersByDate(selectedDate);
    markDeliveryDates();
  }, [selectedDate]);

  useEffect(() => {
    markDeliveryDates();
  }, [orders]);

  const generateRandomDate = () => {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 10);
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  };

  const filterOrdersByDate = (date) => {
    if (!date) {
      setSelectedOrders(orders);
      setSelectedDeliveryStatus('');
      return;
    }

    const filteredOrders = orders.filter(order => {
      const deliveryDate = new Date(order.deliveryDate);
      return (
        deliveryDate.getDate() === date.getDate() &&
        deliveryDate.getMonth() === date.getMonth() &&
        deliveryDate.getFullYear() === date.getFullYear()
      );
    });

    setSelectedOrders(filteredOrders);
    setSelectedDeliveryStatus('In Progress');
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleViewOrderDetails = (order) => {
    setExpandedOrderId(order.id);
  };

  const handleUpdateOrderStatus = (orderCode, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.orderCode === orderCode) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderCode) => {
    const updatedOrders = orders.filter(order => order.orderCode !== orderCode);
    setOrders(updatedOrders);
  };

  const markDeliveryDates = () => {
    const deliveryDates = orders.map(order => new Date(order.deliveryDate));
    setOrderDeliveryDates(deliveryDates);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      return orderDeliveryDates.find(deliveryDate => {
        return (
          formattedDate.getDate() === deliveryDate.getDate() &&
          formattedDate.getMonth() === deliveryDate.getMonth() &&
          formattedDate.getFullYear() === deliveryDate.getFullYear()
        );
      }) ? <p className='text-red-500'>•</p> : null;
    }
    return null;
  };

  return (
    <div className="flex-col items-center justify-center p-6 bg-gray-200">
      <h2 className=" text-3xl mb-6 text-center text-bg-700">Order Management</h2>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center">
          {orders.map((order, index) => (
            <div key={index}>
              <OrderCard
                order={order}
                handleDeleteOrder={handleDeleteOrder}
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleViewOrderDetails={handleViewOrderDetails}
                expanded={expandedOrderId === order.id}
                setExpanded={setExpandedOrderId}
              />
            </div>
          ))}
        </div>
        <div className="max-w-lg mx-auto p-6 border rounded-md shadow-lg">
          <h2 className="text-xl font-bold mb-4">Orders Calendar View</h2>
          <p >Days with delivery dates are marked with red dot</p>
          <div className="mb-6">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileContent={tileContent}
            />
          </div>
          <div className="border-t pt-6">
            <h3 className="text-lg font-bold mb-2">Orders for {selectedDate.toDateString()}</h3>
            <ul className="pl-6 mb-4">
              {selectedOrders.map(order => (
                <li key={order.id}>{order.customer}</li>
              ))}
            </ul>
            {selectedDeliveryStatus && (
              <p className="text-gray-700"><strong>Delivery Status:</strong> {selectedDeliveryStatus}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
