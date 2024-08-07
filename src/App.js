import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import News from './News';

function App() {
  let [articles,setArticles]=useState([]);
  let [category,setCategory]=useState("microsoft");

  useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/photos')
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-04-25&apiKey=ad3b033531f847df81aecae9ae4d6dcd`)
    .then(respone=>respone.json())
    .then((news)=>{
      setArticles(news.articles)
      console.log(news.articles)
    })
    .catch((err)=>console.log(err))
  },[category])
  return (
    <div className="App">
      <header className='header'>
        <h1>NEWS</h1>
        <input type='text' onChange={(event)=>{
          if(event.target.value!=="")
            {
              setCategory(event.target.value)
            }
            else{
              setCategory("india")
            }
          setCategory(event.target.value)
        }} placeholder='Search News'/>
      </header>
      <section className='news-articles'>
        {
          articles.length !==0?
          articles.map((article)=>{
          return (<News article={article}/>)
        })
        :
        <h2>No Articles Found</h2>
        }
      </section>
      
    </div>
   
  );
}

export default App;
