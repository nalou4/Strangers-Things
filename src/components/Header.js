import { Link } from "react-router-dom";

const Header = () => {
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
                    <div id="nav-button">
                        <Link to="Listings">List an item</Link>
                    </div>
                    <div id="nav-button">
                        <Link to="LogIn">Log in</Link>
                    </div>
                    <div id="nav-button">

                        <Link to="LogOut">Log out</Link>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Header