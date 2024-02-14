import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <p  className="text-3xl">test</p>
            <Link to={"/contact"}>coba ke contact donkse</Link>
        </div>
    )
}

export default Home;