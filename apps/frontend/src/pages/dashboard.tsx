import { useEffect } from "react"
import { useState } from "react";

export  function  Dashboard(){
      
      const [users, setUsers] = useState<any[]>([]);
      useEffect(() => {
                   async function fetchUsers() {
                            try {
                                const res = await fetch("http://localhost:3000/api/users/bulk", {
                                method: "GET",
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token"),
                                },
                                });

                                const data = await res.json();
                                setUsers(data.users); 
                            } catch (error) {
                                        console.error("Error fetching users", error);
                                    }}      fetchUsers();}, []);


         function Sendmoney() {
                 
            
        }                            

    return <div className="h-screen  bg-black pt-15">

               <div className=" h-[600px] w-full bg-white">
                    <div className=" h-20 flex justify-between border-b border-gray-300 "> 
                        <div className=" text-2xl font-bold p-3"> Payments App</div>
                        <div className="text-xl p-4 font-semibold">Hello , User</div>
                    </div>
                    <div  className="h-30 border-b border-gray-300">
                        <div  className=" text-2xl font-bold p-3">Your Balance  $5000 </div>
                        <div className=" text-2xl font-bold p-3">Users</div>
                   </div>

                    <div>
                        {users.map((user) => (
                                <div key={user._id} className="h-15 bg-gray-200 flex justify-between items-center mb-2" >
                                    <div className="pl-10 text-[20px] font-semibold">
                                        {user.username}
                                    </div>

                                    <div className="mr-10">
                                    <button onClick={Sendmoney} className="bg-black rounded text-white h-10 w-35">
                                        Send Money
                                    </button>
                                    </div>
                                </div>
                           ))}
                    </div>
               </div>
    </div>
}