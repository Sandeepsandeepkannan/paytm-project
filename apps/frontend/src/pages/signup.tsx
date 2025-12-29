import { useRef } from "react";
import {useNavigate}  from "react-router-dom";

export  function Signup(){

      const nameref=useRef<HTMLInputElement | null>(null)
      const passwordref=useRef<HTMLInputElement | null>(null)
      const emailref=useRef<HTMLInputElement | null>(null)
      const navigate=useNavigate()

            async function Signupdata(){
                const name=nameref.current?.value ??""
                const password=passwordref.current?.value ??""
                const email=emailref.current?.value ??""

                const responsedata= await fetch("http://localhost:3000/signup",{ method: "POST", headers: {"Content-Type": "application/json"},
                                                                          body :JSON.stringify({name,password,email})})
                  
                console.log("signed in")                                                        
                if(responsedata){
                   alert("successfully signed in")
                   navigate("/signin")
                } 
                else{alert("something went wrong")}                      
            }           


    return <div className=" bg-white h-screen flex justify-center items-center">
                  <div className="bg-blue-300 h-100 w-150  rounded-2xl ">
                    <div>
                       <input ref={nameref} className="bg-gray-300 h-12 w-100 rounded mt-10 ml-23 pl-35" type="text" placeholder="Username" />
                       <input ref={passwordref} className="bg-gray-300 h-12 w-100 rounded mt-10 ml-23 pl-35" type="password" placeholder="Password" />
                       <input ref={emailref} className="bg-gray-300 h-12 w-100 rounded mt-10 ml-23 pl-35" type="text" placeholder="Email" />
                    </div>
                    <div>
                         <button onClick={Signupdata} className="h-13 w-35 bg-green-400 mt-10 ml-50 rounded-2xl">signup</button>
                    </div>
                  </div>
           </div>
}