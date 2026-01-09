

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      
      {/* LEFT SECTION */}
      <div className="hidden md:flex flex-col justify-center items-center text-white p-12 relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

        <h1 className="text-4xl font-bold mb-4 tracking-wide z-10">
          Safe & Secure Payments
        </h1>
        <p className="text-lg text-blue-200 mb-10 z-10 text-center">
          Lightning-fast transactions with India’s trusted payment gateway
        </p>

        {/* Mock Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl  w-80 z-10 shadow-2xl hover:scale-105 transition">
        
            <img className="  rounded-2xl" src="https://cdn.dribbble.com/userupload/43896893/file/original-0a8d5ff9fd68a22041c1c38f548dab47.png?crop=0x0-3201x2401&format=webp&resize=640x480&vertical=center" alt="" />
          
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 space-y-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Login to your account
          </h2>

          <p className="text-sm text-gray-500">
            Paytm App user? No need to create a new account
          </p>

          {/* Email / Mobile */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Mobile Number or Email
            </label>
            <input
              type="text"
              placeholder="Enter your email or mobile"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-blue-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition shadow-lg">
            <Lock size={18} />
            Sign in securely
          </button>

          {/* Extra Options */}
          <div className="flex justify-between text-sm text-blue-600">
            <button className="hover:underline">Forgot password?</button>
            <button className="hover:underline">Login via QR</button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Create Account */}
          <button className="w-full border border-blue-500 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Create a new account
          </button>

        </div>
      </div>
    </div>
  );
}
