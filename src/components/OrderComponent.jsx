import React from 'react';
import confetti from 'canvas-confetti';

const OrderComponent = () => {


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={handleOrder}
        className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition"
      >
        Order Now
      </button>
    </div>
  );
};

export default OrderComponent;
