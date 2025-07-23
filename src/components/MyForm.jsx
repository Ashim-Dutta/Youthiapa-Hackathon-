import React from 'react';
import { useForm } from 'react-hook-form';
import { motion} from 'framer-motion'

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="  flex items-center justify-center px-4">
      <div className=" p-8 bg-white rounded-2xl shadow-2xl border border-slate-200">
        <h2 className="text-3xl font-extrabold text-slate-800  text-center">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-slate-700 font-medium mb-1">
              First Name
            </label>
            <input
              id="firstName"
              {...register('firstName', { required: 'First name is required' })}
              placeholder="John"
              className={`w-full px-4 py-2 border ${
                errors.firstName ? 'border-red-500' : 'border-slate-300'
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-slate-700 font-medium mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              {...register('lastName', { required: 'Last name is required' })}
              placeholder="Doe"
              className={`w-full px-4 py-2 border ${
                errors.lastName ? 'border-red-500' : 'border-slate-300'
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-slate-700 font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder="john.doe@example.com"
              className={`w-full px-4 py-2 border ${
                errors.email ? 'border-red-500' : 'border-slate-300'
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="number" className="block text-slate-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              id="number"
              type="tel"
              {...register('number', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Must be exactly 10 digits',
                },
              })}
              placeholder="9876543210"
              className={`w-full px-4 py-2 border ${
                errors.number ? 'border-red-500' : 'border-slate-300'
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.number && (
              <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-black text-white font-semibold rounded-lg shadow hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </motion.button>
          </div>

          {/* Optional Success Message */}
          {isSubmitSuccessful && (
            <p className="text-green-600 text-center font-medium mt-3">
              Thanks! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default MyForm;
