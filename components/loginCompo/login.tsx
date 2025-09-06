'use client';

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

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
              className="w-full mx-auto flex items-center justify-center gap-2 py-3 px-4 border border-gray-500 bg-white text-gray-700 font-medium shadow-sm 
                        hover:bg-gray-50 transition-colors duration-200 
                        transform transition-transform duration-200 hover:scale-105 active:scale-95 
                        hover:shadow-md"
            >
              <GoogleIcon />
              Continue with Google
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
                                        Don&apos;t have an account? 
                    <a href="#" className="font-medium text-blue-600  underline"> Create one</a>
                </p>
            </footer>

        </div>
      </main>
    </div>
  );
};

export default LoginPage;
