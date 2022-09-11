import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = ({ token, setToken, setUser }) => {

    const navigate = useNavigate();

    const logOut = () => {
        setToken("");
        setUser(null);
        navigate("/");
    }


    return (
        <>
            <div id="header-container">
                <div id="title">
                    <Link id="site-name" to="/">Strangers' Things</Link>
                    <h5>
                        Shop & Sell with our Digital Marketplace
                    </h5>
                </div>
                <nav id="nav-bar-container">
                    <div className="nav-button">
                        <Link to="Posts">Posts</Link>
                    </div>
                    <div className="nav-button">
                        {
                            token ? (
                                <Link to="Profile">My profile</Link>
                            ) : (
                                <Link to="/account/signup">Sign up</Link>
                            )
                        }
                    </div>
                    <div className="nav-button">
                        {
                            token ? (
                                <button className="nav-button" onClick={logOut}>Log out</button>
                            ) : (
                                <Link to="/account/login">Log in</Link>
                            )
                        }
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header