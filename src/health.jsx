import React, { useState, useEffect } from 'react';
import HealthData from './h.json';
import LogoDoc from './maledoc.jpg';
import LogoHos from './download.jpeg'

const Health = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [showimg , setShowImg] = useState(true)

  useEffect(() => {
    setData(HealthData.gymh);
    setFilteredData(HealthData.gymh);
  }, []);

  const handleSearchHealth = () => {
    const filter = data.filter((item) =>
      item.pain_area && item.pain_area.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filter);
    setShowData(true); // Update showData based on whether there are filtered results
    setShowImg(false)
  };
  
  

  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        className='sea'
        id='search'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      
       <button onClick={handleSearchHealth} className='btn'>Search</button> 
      
      {showimg && <img src={LogoDoc} className='doc' alt="Logo" /> }

      {!showimg && <img src={LogoHos} className='doc2' /> }
      
      {showimg && <p className='h123'>In this page you can search any pain you are feeling by just telling the part of the body </p> }

      {showData && (
        <ul>
          {filteredData.map((result, index) => (
            <li key={index} className='list3'>
              <h1 className='h3'>{result.issue}</h1>
              <p className='p3'>DESCRIPTION: {result.description}</p>
              <p className='p4'>PREVENTION TIPS: {result.prevention_tips}</p>
              <p>PAIN AREA: {result.pain_area}</p>
              <p> video link: {" "}<a href={result.video_link} className='link3' target='_blank' rel='noopener noreferrer'>Watch Video</a></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Health;

