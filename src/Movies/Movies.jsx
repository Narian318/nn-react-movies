import React from 'react';
import Movie from '../Movie/Movie.jsx';
import './style.css';
class Movies extends React.Component {
    render(){
        return <div className='movies-section'>
    <Movie
        name="TITANIC"
        likes="3.9M"
        banner="https://upload.wikimedia.org/wikipedia/vi/a/ab/Titanic_3D_poster_Vietnam.jpg"
    />
    <Movie
        name="AQUAMAN"
        likes="6.2M"
        banner="https://m.media-amazon.com/images/I/91jCss-IPdL._AC_UF1000,1000_QL80_.jpg"
    />
    <Movie
        name="AVENGERS"
        likes="12M"
        banner="https://www.global-esports.news/wp-content/uploads/2023/04/Marvels-Avengers-jpg.webp"
    />
    <Movie
        name="Pelli Choopulu"
        likes="500k"
        banner="https://static.langimg.com/photo/imgsize-109469,msid-68322577/telugu-samayam.jpg"
    />
     <Movie
        name="Oh Manapenne"
        likes="90k"
        banner="https://i2.cinestaan.com/image-bank/1500-1500/193001-194000/193867.jpg"
    />
    <Movie
        name="kanmani"
        likes="6.7M"
        banner="https://i.ytimg.com/vi/WXFKmDMxqz0/maxresdefault.jpg"
    />
        </div>;
    }
}

export default Movies;