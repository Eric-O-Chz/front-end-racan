"use client";

import React, { useState } from "react";
import type { NextPage } from "next";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});

// Simple Google icon SVG
const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 8.841C34.524 4.962 29.472 2.5 24 2.5C11.318 2.5 1.5 12.318 1.5 25s9.818 22.5 22.5 22.5s22.5-9.818 22.5-22.5c0-1.563-.153-3.085-.436-4.564z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691L14.63 21.13C16.155 16.94 20.324 14 25 14c3.059 0 5.842 1.154 7.961 3.039L38.804 8.841C34.524 4.962 29.472 2.5 24 2.5C16.3 2.5 9.5 6.9 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 47.5c5.472 0 10.524-2.462 14.804-6.359L31.961 33.04c-2.119 1.885-4.902 3.039-7.961 3.039c-4.676 0-8.845-2.94-10.37-7.13L6.306 35.309C9.5 43.1 16.3 47.5 24 47.5z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l7.636 6.558C40.518 36.657 43 31.397 43 25c0-1.563-.153-3.085-.436-4.564z"
    />
  </svg>
);

const SignupPage: NextPage = () => {
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ brandName, email, website, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Image Section */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="/images/SignUp.png"
          alt="Signup placeholder"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Form Section */}
      <div className={`${poppins.className} w-full md:w-1/2 flex items-center justify-center p-8 bg-white`}>
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-semibold text-gray-900 mb-10">
            Create a Brand account
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Enter your credentials to sign in to your account.
          </p>

          <button
            type="button"
            className="w-100 mx-auto flex items-center justify-center py-3 px-4 border border-gray-500  bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-md font-semibold text-gray-900">or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Brand Name"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              required
              className="w-100 mx-auto flex justify-center px-4 py-3 border border-gray-300 text-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Brand Email address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-100 mx-auto flex justify-center px-4 py-3 border border-gray-300 text-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="url"
              placeholder="Website*"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
              className="w-100 mx-auto flex justify-center px-4 py-3 border border-gray-300 text-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-100 mx-auto flex justify-center px-4 py-3 border border-gray-300 text-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <button
              type="submit"
              className="w-100 mx-auto flex justify-center py-3 px-4 bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Create Now
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            I have an account?{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-500 font-medium underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
