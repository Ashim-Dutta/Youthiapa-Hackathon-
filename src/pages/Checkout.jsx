import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { productcontext } from '../context/ProductContext';
import { toast } from 'react-toastify';
import confetti from 'canvas-confetti';
import Footer from '../components/Footer';

const Checkout = () => {

    const location = useLocation();
  const quantity = location.state?.quantity || 1;

  const { products } = useContext(productcontext);
  const param = useParams(); 
  const navigate = useNavigate();

  const singleProduct = products.find(p => p.id == param.id);



  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();



const onSubmit = (data) => {
  if (!data) return
    reset()
    toast.success("Your Order has been successfully Completed!!")
        confetti({
      particleCount: 200,
    spread: 10000,
    origin: { x: 0.5, y: 0.5 },
    });
  };




    



  const totalAmount = singleProduct?.price*quantity || 0;
  const shippingCharge = 60

  const backpage = () => navigate(-1);

  if (!singleProduct) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-8 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Product not found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='mt-30'>
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center font-bold text-gray-900 my-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[onder,sans-serif]">
  Checkout
</h1>


        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Shipping & Payment Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Shipping Information</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  id="fullName" 
                  placeholder="John Doe"
                  {...register("fullName", { required: "Full Name is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input 
                  id="address" 
                  placeholder="123 Main St"
                  {...register("address", { required: "Address is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input 
                    id="city" 
                    placeholder="New York"
                    {...register("city", { required: "City is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  />
                  {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                  <input 
                    id="postalCode" 
                    placeholder="10001"
                    {...register("postalCode", { required: "Postal code is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  />
                  {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <select 
                  id="country"
                  {...register("country", { required: "Country is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="IN">India</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                </select>
                {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Payment Details</h2>

                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input 
                      id="cardNumber"
                      type='number'
                    placeholder="4242 4242 4242 4242"
                    {...register("cardNumber", { required: "Card number is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  />
                  {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input 
                        id="expiry" 
                        type='month'
                         min="2024-07"              
                          max="2050-12"
                      placeholder="MM/YY"
                      {...register("expiry", { required: "Expiry date is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                    />
                    {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input 
                      id="cvv" 
                        placeholder="123"
                      type='number'
                      {...register("cvv", { required: "CVV is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                    />
                    {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message}</p>}
                  </div>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.01 }}
                type="submit"
                
                className="cursor-pointer w-full mt-6 bg-gray-900 text-white py-3.5 rounded-lg font-medium text-lg shadow-md hover:bg-gray-800 transition-colors"
              >
                Complete Order
              </motion.button>
            </form>
          </div>

          {/* Right Side - Order Summary */}
          <div className="p-8 rounded-xl shadow-sm border border-gray-100 sticky top-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Order Summary</h3>

            <div className="flex items-start gap-4 pb-4">
              <img
                src={singleProduct.image}
                alt={singleProduct.name}
                className="w-20 h-20 object-contain rounded-lg border border-gray-200"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{singleProduct.name}</h4>
              </div>
              <div className="font-medium text-gray-700">
                Rs.{(singleProduct.price).toFixed(2)}
              </div>
            </div>

            <div className="space-y-3 border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Quantity</span>
                <span className="text-gray-800">{quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800">Rs.{totalAmount.toFixed(2)}</span>
              </div>
               
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-800">Rs.{shippingCharge}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-4 pt-2 border-t border-gray-200">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">Rs.{(totalAmount + shippingCharge).toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.01 }}
              type="button"
              onClick={backpage}
              className="cursor-pointer w-full mt-6 bg-gray-900 text-white py-3.5 rounded-lg font-medium text-lg shadow-md hover:bg-gray-800 transition-colors"
            >
              Go Back
            </motion.button>
          </div>
        </div>
      </div>
      </motion.div>
      
      <Footer/>
    </div>
  );
};

export default Checkout;
