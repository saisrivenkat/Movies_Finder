import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Movies from './Components/Movies'

function App() {

  const [movies, setmovies] = useState([])
  const [search, setsearch] = useState('')

  const moviesfetch = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=2cd801dd5229267983db8c82fe3a7ef4&query=${search}`;
    const response = await fetch(url)
    const resjson = await response.json()
    console.log(resjson.results)
    if (resjson.results) {
      setmovies(resjson.results)
    }
  }

  useEffect(() => {
    moviesfetch()
  }, [search])



  return (
    <div className="App">
      <h1>Movies</h1>
      <form >
        <input type="text" placeholder="search movie ..." onChange={(e) => setsearch(e.target.value)} />
      </form>
      {console.log(search)}
      <Movies movies={movies} />

    </div>
  );
}

export default App;
