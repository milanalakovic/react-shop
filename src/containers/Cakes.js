import CakeList from "../components/CakeList";
import useFetch from "../useFetch";

const Home = () => {
    const { data: cakes, isPending, error } = useFetch('http://localhost:8000/cakes');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>  Loading...</div>}
            {cakes && <CakeList cakes={cakes} />}
        </div>

    );
}

export default Home;