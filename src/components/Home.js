import { Link } from "react-router-dom"

const Home = ({ user }) => {
    return (
        <>
            <h1 id="home">Welcome to our Digital Marketplace!</h1>
            {!user && (
                <h3 id="link">
                    <Link to="/account/:action">Click here to Get Started </Link>
                </h3>
            )}
            {user && (
                <h3 className="sub-title">
                    You're logged in as <Link id="link" to="/profile">{user.username}</Link>
                </h3>
            )}
        </>
    )
}

export default Home;