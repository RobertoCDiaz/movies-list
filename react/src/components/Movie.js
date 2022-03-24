const Movie = ({ title, watched }) => {
    const handleClick = () => {
        
    };

    return (
        <div className={`Movie ${watched ? 'watched' : ''}`} onClick={handleClick}>
            <img src="https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX1000_.jpg" alt="" />
            <div className="gradient" />
            <p className="title">
                {title ?? 'What if the title of the movie gets too long?'}
            </p>
            {watched && <span className="seen-icon material-icons">done</span>}
        </div>
    );
}
 
export default Movie;