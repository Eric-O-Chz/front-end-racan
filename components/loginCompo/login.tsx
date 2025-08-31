'use client';

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});


const LoginPage = () => {
  return (
    <div className={`${poppins.className} relative min-h-screen bg-gray-100 font-sans`}>
      {/* Background with abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-indigo-100 to-white overflow-hidden z-0"
       style={{ backgroundImage: "url('/images/bg-login.png')" }}>
        
      </div>

      {/* Main container for centering the login form */}
      <main className="min-h-screen flex items-center justify-center p-4 relative z-10">
        
        {/* Login Card */}
        <div className="bg-white/70 p-8 sm:p-10 shadow-lg w-full max-w-md">
            
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Welcome back</h1>
                <p className="text-gray-500 mt-2">Enter your credentials to sign in to your account.</p>
            </header>

            {/* Social Login Button */}
            <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-gray-900 shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {/* Google Icon SVG */}
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
                    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
                    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.657-3.657-11.303-8.481l-6.571 4.819C9.656 39.663 16.318 44 24 44z"></path>
                    <path fill="#1976D2" d="M43.611 20.083H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C44.572 34.636 48 29.755 48 24c0-2.679-.43-5.227-1.226-7.611l-2.023.001-1.141-1.305z"></path>
                </svg>
                <span className="text-sm font-medium text-gray-700">Continue with Google</span>
            </button>

            {/* Separator */}
            <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-md text-gray-900">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Login Form */}
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <input type="email" name="email" id="email" required className="w-full px-4 py-3 border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-gray-700" placeholder="Email address*" />
                    </div>
                    
                    {/* Password Input */}
                    <div>
                        <input type="password" name="password" id="password" required className="w-full px-4 py-3 border border-gray-400  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-gray-700" placeholder="Password*" />
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="w-full py-3 px-4 bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105">
                            Log in
                        </button>
                    </div>
                </div>
            </form>

            {/* Footer Link */}
            <footer className="text-center mt-6">
                <p className="text-sm text-gray-600">
                    Don't have an account? 
                    <a href="#" className="font-medium text-blue-600  underline"> Create one</a>
                </p>
            </footer>

        </div>
      </main>
    </div>
  );
};

export default LoginPage;
