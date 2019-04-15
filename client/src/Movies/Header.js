import React from 'react';
import './movies.css';

const Header = () => {

    return (
        <header>
            <div>
                <p>My Favorite Movies</p>
                <a href='#nav'><button>See More</button></a>
            </div>
            <figure>
                <img src='https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'/>
                <img src='https://requestreduce.org/images/star-wars-movie-clipart-15.png'/>
                <img src='https://smallimg.pngkey.com/png/small/124-1242610_lord-of-the-rings-logo-by-haleyhss-d6yi9hz.png'/>
                <img src='https://banner2.kisspng.com/20180202/wwe/kisspng-batman-terminator-youtube-film-terminator-png-clipart-5a74032640a9e5.5493805715175524222649.jpg'/>
                <img src='https://i.pinimg.com/236x/79/3d/59/793d59ea45fc93c50cea635a24524e68--dumb-and-dumber.jpg'/>
                <img src='https://i.pinimg.com/originals/83/17/db/8317db4a39bd8fa687187adda7e3783e.jpg'/>
            </figure>
        </header>
    )

}

export default Header;
