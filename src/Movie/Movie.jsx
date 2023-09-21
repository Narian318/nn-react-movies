import * as React from 'react';
import './style.css';

function Movie(props){
    return (<div className='movie-card'>
        <img src={props.banner} />
        <label>{props.likes}<snap>    </snap><font color="black"><b><u>{props.name}</u></b></font></label></div>);
}

export default Movie;