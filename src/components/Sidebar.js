import React from 'react'

function Sidebar({ topAnime }) {
    return (
            <div className="topContainer">
                    <h3>Top <strong>12</strong> Animes</h3>
                    {topAnime.map((anime, idx) => (
                        <div className="anime-card" key={idx}>
                        <a href={anime.url} target="_blank" rel="noreferrer">
                        <figure>
                            <img src={anime.image_url} alt="Anime list"/>
                            <h4 className="letterTop">{ anime.title}</h4>
                        </figure>
                        </a>
                        </div>
                    ))}
            </div>
    )
}

export default Sidebar