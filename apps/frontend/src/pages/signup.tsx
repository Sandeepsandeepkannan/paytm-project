import { useRef } from "react";
import {Navigate}  from "react-router-dom";

export  function Signup(){

      const nameref=useRef<HTMLInputElement | null>(null)
      const passwordref=useRef<HTMLInputElement | null>(null)
      const emailref=useRef<HTMLInputElement | null>(null)

            async function Signupdata(){

               try{   
                     const name=nameref.current?.value ??""
                     const password=passwordref.current?.value ??""
                     const email=emailref.current?.value ??""

                     const responsedata= await fetch("http://localhost:3000/signup",{ method: "POST", headers: {"Content-Type": "application/json"},
                                                                              body :JSON.stringify({name,password,email})})
                        
                     console.log("signed in")                                                        
                     if(responsedata){
                        alert("successfully signed in")
                        return <Navigate to="/signin" />;
                     } 
                     else{alert("something went wrong")}                      
                  }           
              catch (error) {
                     alert("Server is not running or network error");
                              console.error(error);
                           }
                        }

 return <div className=" bg-[#7f7f7f] h-screen flex justify-center items-center">
                  <div className="bg-[#ffffff] h-150 w-130  rounded-2xl ">
                    <div>
                      <div className="h-30 w-full  text-[40px] font-bold">
                        <div className="pl-47">Sign up</div>
                        <div className="text-[20px] pl-14 pt-2  font-normal text-gray-600  ">Enter your information to create your account</div>
                      </div>

                      <div className="flex flex-col  mb-6">
                         <label className=" text-black font-semibold h-12 pl-25  pt-2 text-[20px]">Username  </label>
                          <input ref={nameref} className="bg-gray-300 h-12 w-80 rounded ml-25 pl-5" type="text" placeholder="Username" />
                       </div>

                        <div className="flex flex-col  mb-6">
                         <label className="text-black font-semibold h-12 pl-25   pt-2 text-[20px]">Password  </label>
                         <input ref={passwordref} className="bg-gray-300 h-12 w-80 rounded ml-25 pl-5" type="password" placeholder="Password" />
                       </div>

                       <div className="flex flex-col  mb-6">
                         <label className="text-black font-semibold h-12 pl-25   pt-2 text-[20px]">Email  </label>
                         <input ref={emailref} className="bg-gray-300 h-12 w-80 rounded ml-25 pl-5" type="email" placeholder="email" />
                       </div>

                    </div>
                    <div>
                         <button onClick={Signupdata} className="h-13 w-35 bg-black font-bold text-white mt-10 ml-45 rounded-2xl">Sign up</button>
                    </div>
                  </div>
           </div>
}