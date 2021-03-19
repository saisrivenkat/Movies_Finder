import React, { useState, useEffect } from 'react'

const Overview = (props) => {
    const { overview, id, title } = props.location.state
    const [similar, setsimilar] = useState([])
    useEffect(() => {
        const similar = async () => {
            const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=2cd801dd5229267983db8c82fe3a7ef4`
            const res = await fetch(url)
            const resjson = await res.json()
            console.log(resjson)
            if (resjson.results) {
                setsimilar(resjson.results)
            }
        }
        similar(id)

    }, [id])
    return (
        <React.Fragment>
            <h1>{overview}</h1>
            {console.log(overview, title)}
            {similar.map(ul => (
                <div>
                    <ul>{ul.title}</ul>
                    <span>{ul.vote_average}</span>
                </div>
            ))}

        </React.Fragment>
    );
}

export default Overview