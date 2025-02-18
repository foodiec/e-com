import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headers from "./components/Headers";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const MyContext = createContext();

function App() {

  const [countryList,setCountryList] = useState([]);
  const [selectedCountry,setSelectedCountry] = useState('');

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  },[]);

  const getCountry = async(url) => {
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data) 
      console.log(res.data.data);
    })
  } ///main one playlist - 60

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}> 
        {/* countries add api */}
      <Headers/>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export  {MyContext}