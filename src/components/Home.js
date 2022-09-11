import { Link } from "react-router-dom"

const Home = ({user}) => {
    return (
        // <>
        //     <div id="post-container">
        //         <div id="posts">
        //             <h3>
        //                 Current posts
        //             </h3>
        //             <h5>
        //                 Shop the marketplace
        //             </h5>
        //             <form>

        //             </form>
        //         </div>
        //         <div id="new-posts">
        //             <h3>
        //                 Create a new post
        //             </h3>
        //             <form>

        //             </form>
        //         </div>
        //     </div>
        // </>

        <>
            <h1>Welcome to Strangers' Things!</h1>
            {user && (
                <p>
                    Logged in as <Link to="/profile">{user.username}</Link>
                </p>
            )}

        </>




    )
}

export default Home;