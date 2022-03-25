import { Link } from "react-router-dom";
import Popup from "./Popup";

const MoviePage = () => {
    return (
        <div className="MoviePage">
            <Link to="/">Go back</Link>

            <div className="details">
                <img src="https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX1000_.jpg" alt="" />

                <div className="info">
                    <h1>
                        Movie title
                    </h1>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum, erat et scelerisque euismod, neque lacus venenatis nunc, sit amet maximus purus orci non magna. Quisque nec pulvinar sem, quis rhoncus risus. Aliquam quam sem, varius ac tellus eget, pretium convallis sapien. In sit amet lacus odio. Praesent pulvinar rhoncus orci eget dignissim. Donec egestas, nibh ac laoreet venenatis, tortor est consequat magna, vel rhoncus erat diam quis eros. Suspendisse potenti. Nullam posuere tincidunt pellentesque. Etiam aliquam luctus turpis, sit amet volutpat ante ultrices at. Etiam a rhoncus quam. Suspendisse non tortor fermentum, interdum justo eget, pellentesque felis. Sed a nisi non dolor scelerisque interdum quis sit amet enim. Vestibulum blandit eu ligula eget tristique. Maecenas sed dui risus.
                    </p>
                    <div className="options">
                        {/* <div className="button primary">
                            <span className="material-icons">add</span>
                            Add movie to my list
                        </div> */}

                        <div className="button primary">Mark as watched</div>
                        <Popup
                            content={<div className="button">Tag movie</div>}
                            dialog={<div>
                                <h3>Filter movies by platform</h3>
                            </div>}>
                        </Popup>
                        <div className="button">Remove</div>
                    </div>
                </div>
            </div>

            <div className="where-to-watch">
                <h2 className="title">Watch now on</h2>
                <div className="platforms">
                    <p className="platform">Netflix</p>
                    <p className="platform">Prime Video</p>
                    <p className="platform">Disney Plus</p>
                </div>
            </div>
        </div>
    );
}
 
export default MoviePage;