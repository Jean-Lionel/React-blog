import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
                <div >
                 <Link className="logo" to="/">Bpro Blog</Link>
                </div>
                <ul className="liens">
                    <li>
                        <Link to="/" className="lien">Accueil</Link>
                    </li>
                    <li>
                    <Link to="/ajouter" className="lien">Creér Article</Link>
                    </li>
                </ul>
           
        </nav>
    );
}
 
export default NavBar;