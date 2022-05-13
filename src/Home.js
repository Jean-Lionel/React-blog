import {Link} from "react-router-dom"

const Home = () => {
    return ( <div>
        <h1>Home</h1>
        <Link to="/bonjour">
        <p>Bonjour</p>
        </Link>

        <Link to="/login">
            <p>Login</p>
        </Link>
    </div> );
}
 
export default Home;