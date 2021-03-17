import React from 'react'

function Movies({ movies }) {
    const url = "https://image.tmdb.org/t/p/w300";
    return (
        <React.Fragment>
            {movies.map(ul => (
                <div>
                    <li>{ul.title}</li>
                    <img src={url + ul.poster_path} alt={ul.poster_path} />
                </div>
            ))}
        </React.Fragment>
    );
}
export default Movies