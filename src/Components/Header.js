import { React, useState, useEffect } from 'react'
import Movies from './Movies'
import { Container, Navbar, Form } from 'react-bootstrap';

const Header = () => {
    const [movies, setmovies] = useState([])
    const [search, setsearch] = useState('')

    const moviesfetch = async () => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=2cd801dd5229267983db8c82fe3a7ef4&page=1`;
        const response = await fetch(url)
        const resjson = await response.json()
        if (resjson.results) {
            setmovies(resjson.results)
            console.log(resjson.results)
        }
    }

    useEffect(() => {
        moviesfetch()
    }, [])
    
    const submit = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=2cd801dd5229267983db8c82fe3a7ef4&query=${search}`;
        const response = await fetch(url)
        const resjson = await response.json()
        if (resjson.results) {
            setmovies(resjson.results)
            console.log(resjson.results)
        }
        else {
            return "no movies found";
        }
    }
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Movies Search</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <Form onSubmit={submit} >
                    <Form.Control size="lg" className="z-depth-5" style={{ boxShadow: "3px 3px 5px 6px #ccc", marginTop: "20px", marginBottom: "20px" }} type="text" placeholder="Search..." onChange={(e) => setsearch(e.target.value)} />
                </Form>
                {console.log(search)}
                <Movies movies={movies} />
            </Container>
        </div>
    );
}

export default Header;