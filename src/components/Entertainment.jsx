import React from 'react'
import Card from 'react-bootstrap/Card';

import { useState, useEffect } from 'react';
import axios from 'axios';



function Entertainment() {

  const handleClick = (url) => {
    window.open(url, '_blank');
};
 
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
          try {
            const response = await axios.get(
               ' https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=fbb74217eb0c4fd0b10a8a25c96a5721'
            );
            setNews(response.data.articles);
          } catch (error) {
            console.error('Error fetching news: ', error);
          }
        };
    
        fetchNews();
      }, []);

   
  return (
    <div className='grid grid-cols-4 gap-5   px-5 py-5 sm:grid-cols-1 '>
      {news.map((article, index) => (  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={article.urlToImage} className='object-cover w-full h-full ' />
      <Card.Body> 
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
        {article.description}          
        </Card.Text>
       
      </Card.Body>
      <button onClick={() => handleClick(article.url)} className='font-semibold text-blue-500 '>Read more..</button>
      
    </Card>))}
    </div>
  )
}

export default Entertainment
