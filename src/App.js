import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./components/pages/home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import { useEffect, useState } from "react";

function App() {
  const [industryData,setIndustryData] = useState([]);

  const getData = async () =>{
    const response = await fetch(`http://localhost:5000/api/industries/get`,{
      method:'GET',
      headers:{
        'Content-Type':"application/json"
      }
});
        const result = await response.json();
        console.log(result);
        setIndustryData(result)
  }

  useEffect(()=>{
   getData();
  },[]);

  return (
    <BrowserRouter>
    <div >
     <Topbar />
     <div className="container">
      <Sidebar />
      <Routes>
      <Route path="/" element={<Home  industryData={industryData}/>}/>
      <Route path="/users" element={<UserList  />}/>
     
      </Routes>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
