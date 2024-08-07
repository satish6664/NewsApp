import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import News from './News';
import sampleArticles from './sampleData'; // Import the sample data

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("microsoft");

  useEffect(() => {
    // Comment out the API call and use sample data instead
    // fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-04-25&apiKey=ad3b033531f847df81aecae9ae4d6dcd`)
    //   .then(response => response.json())
    //   .then((news) => {
    //     if (news.articles) {
    //       setArticles(news.articles);
    //       console.log(news.articles);
    //     } else {
    //       setArticles([]);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setArticles([]);
    //   });

    // Use sample data for testing
    setArticles(sampleArticles);
  }, [category]);

  return (
    <div className="App">
      <header className='header'>
        <h1>NEWS</h1>
        <input
          type='text'
          onChange={(event) => {
            const value = event.target.value;
            setCategory(value !== "" ? value : "india");
          }}
          placeholder='Search News'
        />
      </header>
      <section className='news-articles'>
        {articles.length !== 0 ? (
          articles.map((article, index) => (
            <News key={index} article={article} />
          ))
        ) : (
          <h2>No Articles Found</h2>
        )}
      </section>
      
    </div>
   
  );
}

export default App;
