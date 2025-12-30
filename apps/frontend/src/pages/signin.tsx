import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export  function Signin(){

      const usernameref=useRef<HTMLInputElement | null>(null)
      const passwordref=useRef<HTMLInputElement | null>(null)
      const navigate = useNavigate();
            async function Signindata(){

            try{  
                const username=usernameref.current?.value ??""
                const password=passwordref.current?.value ??""
                const response= await fetch("http://localhost:3000/api/users/signin",{ method: "POST", headers: {"Content-Type": "application/json"},
                                                                          body :JSON.stringify({username,password})})    
                console.log("signed in") 
                const data = await response.json();
                if(!response.ok){
                       alert(data.message || "Signin failed");
                        return;}

                localStorage.setItem("token",data.token)
                alert("Successfully signed in");
                 navigate("/dashboard");
              }
               catch (error) {
                     alert("Server is not running or network error");
                              console.error(error);
                           }
                        }      

    return <div className=" bg-[#7f7f7f] h-screen flex justify-center items-center">
                  <div className="bg-[#ffffff] h-130 w-130  rounded-2xl ">
                    <div>
                      <div className="h-30 w-full  text-[40px] font-bold">
                        <div className="pl-47">Sign in</div>
                        <div className="text-[20px] pl-14 pt-2  font-normal text-gray-600  ">Enter your credentials to access your account</div>
                      </div>

                      <div className="flex flex-col  mb-6">
                         <label className=" text-black font-semibold h-12 pl-25  pt-2 text-[20px]">Username  </label>
                          <input ref={usernameref} className="bg-gray-300 h-12 w-80 rounded ml-25 pl-5" type="text" placeholder="Username" />
                       </div>

                        <div className="flex flex-col  mb-6">
                         <label className="text-black font-semibold h-12 pl-25   pt-2 text-[20px]">Password  </label>
                         <input ref={passwordref} className="bg-gray-300 h-12 w-80 rounded ml-25 pl-5" type="password" placeholder="Password" />
                       </div>

                    </div>
                    <div>
                         <button onClick={Signindata} className="h-13 w-35 bg-black font-bold text-white mt-10 ml-45 rounded-2xl">Sign in</button>
                    </div>
                  </div>
           </div>
}