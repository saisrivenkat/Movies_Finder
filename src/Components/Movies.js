import React from 'react'
import '../App.css'



function Movies({ movies }) {
    const url = "https://image.tmdb.org/t/p/w200";


    const urlchange = (id) => {
        const overview = `http://www.themoviedb.org/movie/${id}`
        return overview
    }

    return (
        <React.Fragment>
            <div className="movies">
                <div className="row">

                    {movies.map(ul => (
                        <div className="col-lg-4 mb-3" >
                            <div class="card" >
                                <img src={url + ul.poster_path} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{ul.title}</h5>

                                    <div>

                                        <p className="text-end"><a href={urlchange(ul.id)} target="_blanck">...More</a></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}
export default Movies