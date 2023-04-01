import './App.css';
import { useEffect, useState } from 'react';
import ButtonAppBar from './Components/Appbar';
import { Container, Typography } from '@mui/material';
import BasicMenu from './Components/menu';
import BasicCard from './Components/card';

function App() {
  const [getNews, setNews] = useState([])

  useEffect(() => {
    getPostNews();
  }, [])

  const getPostNews = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => setNews(data))
  }

  return (
    <div className="App">
        <BasicMenu data={getNews} />
    </div>
  );
}

export default App;
