import Movie from "./Movie";
import faker from '@faker-js/faker';

const Catalog = () => {
    const movies = [];
    for (let i = 0; i < Math.floor(Math.random() * 5 + 7); ++i) {
        movies.push({
            title: faker.company.companyName(),
            watched: Math.random() < 0.5
        });
    }

    return (
        <div className="Catalog">
            {movies.map(m => <Movie title={m.title} watched={m.watched} />)}
        </div>
    );
}
 
export default Catalog;