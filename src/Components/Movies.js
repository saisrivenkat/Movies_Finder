import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import '../App.css'
import { Link } from "react-router-dom";


function Movies({ movies }) {
    const url = "https://image.tmdb.org/t/p/w200";
    const color = (vote) => {
        if (vote < 5) {
            return "red";
        }
        else if (vote > 5 & vote < 7) {
            return "orange"
        }
        else {
            return "green"
        }
    }
    return (
        <React.Fragment>
            <div className="movies">

                <Row>
                    {movies.map(ul => (
                        <Col >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={url + ul.poster_path} alt={ul.poster_path} />
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col>
                                                <span> {ul.title}</span>
                                                <span className={color(ul.vote_average)}>{ul.vote_average}</span>
                                            </Col>
                                        </Row>
                                        <Link
                                            className="btn btn-primary"
                                            to={{
                                                pathname: "/overview",
                                                state: {
                                                    overview: ul.overview,
                                                    title: ul.title,
                                                    id:ul.id

                                                }
                                            }}
                                        >
                                            more...
        </Link>


                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </React.Fragment>
    );
}
export default Movies