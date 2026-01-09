
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Signup } from "./pages/signup"
import Signinpage from "./pages/signin";


function App() {


  return (
      
    
     <Routes>
     <Route path="/" element={<Signinpage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signinpage />} />
       <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}

export default App
