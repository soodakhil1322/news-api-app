import React from 'react'
import Card from 'react-bootstrap/Card';

import { useState, useEffect } from 'react';
import axios from 'axios';
function Health() {
  const handleClick = (url) => {
    window.open(url, '_blank');
};
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
          try {
            const response = await axios.get(
               'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=fbb74217eb0c4fd0b10a8a25c96a5721'
            );
            setNews(response.data.articles);
          } catch (error) {
            console.error('Error fetching news: ', error);
          }
        };
    
        fetchNews();
      }, []);
  return (
    <div className='grid grid-cols-4 gap-5  px-5 py-3 items-center justify-center '>
      {news.map((article, index) => (  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={article.urlToImage} style={{ maxWidth: '400px' }} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
        {article.description}          
        </Card.Text>
        <button onClick={() => handleClick(article.url)} className='font-semibold text-blue-500 '>Read more..</button>
      </Card.Body>
    </Card>))}
    </div>
  )
}

export default Health