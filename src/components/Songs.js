import React from 'react'

const Songs = ({songs}) => {
  return (
    <div className="music-center">
        {songs.map((song, index) => {
        const { result } = song;
        return (
            <article className='music' key={index}>
            <div className="img-container">
                <img src={result.header_image_url}  alt={result.artist_names} />
            </div>
            <div className='music-footer'>
                <h3>artist: {result.artist_names}</h3>
                <h4>title: {result.title}</h4>
                <button className="btn-details"><a href={result.primary_artist.url}>click to get lyrics</a></button>
            </div>
            </article>
        )
        })
        }
    </div>
  )
}

export default Songs