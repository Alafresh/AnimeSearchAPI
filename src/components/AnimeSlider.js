import React from 'react'
import Slider from "react-slick";
function AnimeSlider({topSliderAnime, titleAnime}) {
    
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
          ]
      };
    return (
        <>
        <h2 className="titleNewReleases">{titleAnime}</h2>
        <Slider settings {...settings}>
            {topSliderAnime.map((anime, idx) => (
                <div className="animeSlider" key={idx}>
                    <article className="anime-card">
                    <a href={anime.url} target="_blank" rel="noreferrer">
                    <figure>
                        <img src={anime.image_url} alt="Anime list"/>
                        <h3 className="titleSlider">{ anime.title}</h3>
                    </figure>
                    </a>
                    <p>{Math.round(anime.score) >= 8 ? 'Great, this is one of the best anime' : 
                    Math.round(anime.score) >= 5 && Math.round(anime.score) <= 7 ? 'You may have fun' :
                     Math.round(anime.score) >= 1 && Math.round(anime.score) <= 4 ? 'I do not recommend it': ''}</p>
                    </article>
                </div>
                ))}
        </Slider>
        </>
    )
}

export default AnimeSlider
