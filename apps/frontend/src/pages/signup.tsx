import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export  function Signup(){

      const [showPassword, setShowPassword] = useState(false);
      const usernameref=useRef<HTMLInputElement | null>(null)
      const passwordref=useRef<HTMLInputElement | null>(null)
      const emailref=useRef<HTMLInputElement | null>(null)
      const navigate = useNavigate();

            async function Signupdata(){

               try{   
                     const username=usernameref.current?.value ??""
                     const password=passwordref.current?.value ??""
                     const email=emailref.current?.value ??""

                     const responsedata= await fetch("http://localhost:3000/api/users/signup",{ method: "POST", headers: {"Content-Type": "application/json"},
                                                                              body :JSON.stringify({username,password,email})})
                        
                     console.log("signed up")                                                        
                     if(!responsedata){
                          alert("something went wrong") }    
                     navigate("/signin");                       
                  }           
              catch (error) {
                     alert("Server is not running or network error");
                              console.error(error);
                           }
                        }

 return <div className=" bg-[#7f7f7f] h-screen flex justify-center items-center">
                  <div className="flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8 space-y-6">

                  <h2 className="text-2xl font-bold text-gray-800">
                    Signup your account
                  </h2>

                  <p className="text-sm text-gray-500">
                    Welcome to Paytm 
                  </p>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Username </label>
                    <input  ref={usernameref}  type="text" placeholder="Enter your Username" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"/>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600"> Password </label>
                    <div className="relative">
                      <input   ref={passwordref}  type={showPassword ? "text" : "password"}  placeholder="Enter password" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pr-10"/>
                      <button  type="button"  onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500 hover:text-blue-600" > {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <input  ref={emailref}  type="text" placeholder="Enter your Username" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"/>
                  </div>

                  <button  onClick={Signupdata} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition shadow-lg">
                   <Lock size={18} />
                    Sign in securely
                  </button>

                  <div className="flex justify-between text-sm text-blue-600">
                    
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400"></span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>

                 

                </div>
         </div>
           </div>
}