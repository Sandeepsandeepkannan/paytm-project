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


    return <div className=" bg-white h-screen flex justify-center items-center">
                  <div className="bg-blue-300 h-100 w-150  rounded-2xl ">
                    <div>
                       <input ref={nameref} className="bg-gray-300 h-12 w-100 rounded mt-20 ml-23 pl-35" type="text" placeholder="Username" />
                       <input ref={passwordref} className="bg-gray-300 h-12 w-100 rounded mt-10 ml-23 pl-35" type="password" placeholder="Password" />
                    </div>
                    <div>
                         <button onClick={Signindata} className="h-13 w-35 bg-green-400 mt-10 ml-50 rounded-2xl">signin</button>
                    </div>
                  </div>
           </div>
}