import Header from './components/Header';
import Sidebar from './components/Sidebar'
import { useState, useEffect } from 'react';
import Content from './components/Content';
import AnimeSlider from './components/AnimeSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [topAnimeUpComing, setTopAnimeUpComing] = useState([]);
  const [search, SetSearch] = useState("");
  const [title, setTitle] = useState('New Releases');

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
    .then(res => res.json());

    setTopAnime(temp.top.slice(0, 12));
  }
  const GetTopAnimeUpComing = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
    .then(res => res.json());

    setTopAnimeUpComing(temp.top);
  }

  const HandleSearch = req => {
    req.preventDefault();

    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?
    q=${query}&order_by=title`)
    .then(res => res.json())
    .catch(error => console.error(error, 'hello'));

    //console.log(temp.results);
    setTitle(`Results of ${query}`)

    SetAnimeList(temp.results);
  }
  //console.log(animeList)

  useEffect(() => {
    GetTopAnime();
    GetTopAnimeUpComing();
  }, [])


  return (

    <div className="App">
      <Header/>
      <div className="content-wrap">
        <Content
          HandleSearch={HandleSearch}
          search={search}
          animeList={animeList} 
          SetSearch={SetSearch} />
          <AnimeSlider topSliderAnime={animeList.length > 0 ? animeList : topAnimeUpComing} titleAnime={title}/>
          <Sidebar topAnime={topAnime} />
      </div>
      <footer></footer>
    </div>
    
  );
}

export default App;
