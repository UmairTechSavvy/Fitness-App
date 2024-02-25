import React, { useState, useEffect } from 'react';
import DietData from './diet.json';
import './App.css';
import GymLogo from './gym2.jpg'

const Diet = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    setData(DietData.articles);
  }, []);

  const handleArticleClick = () => {
    setShow(!show); // Toggle the show state
  };

  const handleSelection = (index) => {
    setSelectedArticle(index);
    setShow(true); // Ensure content is shown when an article is selected
  };

const handleCloseButton = ()=>{

setSelectedArticle(null)
setShow(false)


}



  return (
    <div className='dietcon'>
      <h1 className='ARTICLE'>ARTICLES</h1>
      <ul>
        {data.map((article, index) => (
          <li key={index} className='listd'>
            <h2 onClick={() => handleSelection(index)} style={{cursor:"pointer",textDecoration:"underline"}}>{article.title}</h2>
            
            {(show && selectedArticle === index) && ( // Only show selected article's content
              <div style={{backgroundColor:"teal", color:"whitesmoke" , border:"9px inset black"}}>
                <button  style={{cursor:"pointer"}}className='back' onClick={handleCloseButton}>Back</button>
                <p>Introduction: {article.introduction}</p>
                <p>{article.h11}</p>
                <p>{article.h22}</p>
                <p>{article.h33}</p>
                <p>{article.h44}</p>
                <p>{article.h55}</p>
                <p>{article.h66}</p>
                <p>Conclusion: {article.conclusion}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
      <img src={GymLogo} className='gymlogo' />
    </div>
  );
};

export default Diet;
