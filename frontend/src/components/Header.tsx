import {Link} from "react-router-dom";

function Header() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Podcast">Podcast</Link>
                </li>
                <li>
                    <Link to="/Collection">Collection</Link>
                </li>
            </ul>
        </nav>
    </>
    );
  }
  
  export default Header;