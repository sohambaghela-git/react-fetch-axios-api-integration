import React, { useState, useEffect } from 'react';
import './App.css';
import TableData from './TableData';
import axios from 'axios';
import {  Route, Routes, Link } from 'react-router-dom';
import FormDetail from './FormDetail';
function App() {
  const [fetchAllData, setFetchAllData] = useState([]);
  const [axiosAllData, setAxiosAllData] = useState([]);
  const [showFetch, setShowFetch] = useState(false);
  const [showAxios, setShowAxios] = useState(false);

  const fetchData = async () => {
    const apiUrl = 'https://dummyjson.com/products';
   
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data);
    setFetchAllData(data?.products);
  };

  const axiosData = async () => {
    const apiUrl = 'https://dummyjson.com/products';
    const response = await axios.get(apiUrl); 
    setAxiosAllData(response.data?.products); 
  };

  useEffect(() => {
    fetchData();
    axiosData();
  }, []);

  console.log("data", fetchAllData)
  return (
    <div className='container'>
      <Link className='btn btn-primary' to={'/formDetail'}>Add</Link>
      <h2>Your React Table</h2>
      <button className='btn btn-primary' onClick={()=> setShowFetch(!showFetch)} >{showFetch ? "Hide Fetch" : "Show Fetch"}</button>
      {showFetch && <TableData allData={fetchAllData} />}
      <button className='btn btn-primary' onClick={()=> setShowAxios(!showAxios)} >{showAxios ? "Hide Axios" : "Show Axios"}</button>
      {showAxios && <TableData allData={axiosAllData} />}

      <Routes>
        <Route path="/formDetail" element={<FormDetail />} />
      </Routes>
    </div>
  );
};
export default App;
