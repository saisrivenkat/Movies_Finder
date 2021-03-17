import React from 'react'

const Header = ({ search ,setsearch ,movies,setmovies}) => {
    function handlesubmit(){
        
    }
    return (
        <React.Fragment>
            <h1>Movies</h1>
            <form onSubmit={handlesubmit()}>
                <input type="text" placeholder="search movie ..." onChange={(e) => setsearch(e.target.value)} />
            </form>
        </React.Fragment>
    );
}
export default Header