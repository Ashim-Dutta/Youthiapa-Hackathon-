import { useForm } from 'react-hook-form';
import { User, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { easeIn, motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Register from '../images/registered.gif';
import React from 'react';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = data => {
    const existUser = localStorage.getItem('email');
    if (existUser) {
      toast.error('User already Registered. Please login');
      navigate('/login');
      return;
    }

    localStorage.setItem('username', data.username);
    localStorage.setItem('email', data.email);
    localStorage.setItem('password', data.password);
    localStorage.setItem('confirmPassword', data.confirm);
    toast.success("Registration successful!");
    reset();
    navigate('/login');
  };

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: easeIn }}
      className="flex flex-col items-center justify-center px-4 py-10 sm:px-6 lg:px-8 min-h-screen"
    >
      <div className="w-full mt-30 max-w-6xl mx-auto flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden">
        
        {/* Left Branding Section */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#111111] p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight text-white leading-tight">
              Youthiapa<span className="text-indigo-500">.</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-lg">
              Start your creative journey with us. Sign up and unlock something special.
            </p>
          </div>
          <img
            src={Register}
            alt="Register"
            className="w-[50%] sm:w-[40%] md:w-[30%] lg:w-[15vw] h-auto mx-auto mt-8 rounded-full bg-black"
          />
          <div className="mt-10 text-xs text-gray-500 text-center lg:text-left">
            <p>Designed to inspire.</p>
            <p>© 2025 Youthiapa</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 bg-white text-gray-900 p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Create an Account</h2>
          <p className="text-gray-500 mb-6 text-sm">Sign up to get started with our platform.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Username */}
            <div>
              <label className="text-sm font-medium text-gray-600">Username</label>
              <div className="relative mt-1">
                <input
                  {...register('username', { required: 'Username is required' })}
                  placeholder="yourname"
                  className="w-full border border-gray-300 px-10 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <div className="relative mt-1">
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 px-10 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-600">Password</label>
              <div className="relative mt-1">
                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Minimum 6 characters' },
                  })}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 px-10 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium text-gray-600">Confirm Password</label>
              <div className="relative mt-1">
                <input
                  type="password"
                  {...register('confirm', {
                    required: 'Confirm password is required',
                    validate: value => value === watch('password') || 'Passwords do not match',
                  })}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 px-10 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              {errors.confirm && <p className="text-red-500 text-xs mt-1">{errors.confirm.message}</p>}
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-indigo-600 hover:scale-[1.01] transition-transform duration-300"
            >
              Create Account
            </button>
          </form>

          <p className="text-xs text-center mt-6 text-gray-500">
            Already have an account?
            <Link to="/login" className="text-indigo-600 hover:underline ml-1">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RegisterForm;
