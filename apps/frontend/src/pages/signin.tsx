import { useRef } from "react"


export  function Signin(){

      const nameref=useRef<HTMLInputElement | null>(null)
      const passwordref=useRef<HTMLInputElement | null>(null)
            async function Signindata(){
                const name=nameref.current?.value ??""
                const password=passwordref.current?.value ??""
                const responsedata= await fetch("http://localhost:3000/signin",{ method: "POST", headers: {"Content-Type": "application/json"},
                                                                          body :JSON.stringify({name,password})})    
                console.log("signed in") 
                const data=await responsedata.json();
                localStorage.setItem("token",data.token)                     
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
                          <input ref={nameref} className="bg-gray-300 h-12 w-80 rounded ml-25 pl-5" type="text" placeholder="Username" />
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