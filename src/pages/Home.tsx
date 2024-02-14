import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <p>test</p>
            <Link to={"/contact"}>coba ke contact donkse</Link>
        </div>
    )
}


export default Home;