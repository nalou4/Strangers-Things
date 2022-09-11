

import Post from "./Post";

function Profile({ user }) {

    if (!user) return null;

    return (
        <div>
            <h1>
                My Posts
            </h1>
            {
                user.posts.map((p) => (
                    <Post key={p._id} post={p}/>
                ))
            }
        </div>
    );
}

export default Profile;