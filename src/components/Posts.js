import { useState } from "react";
import { Link } from "react-router-dom";
import CreatePostForm from "./CreatePostForm";


const Posts = ({ posts, token, setPosts }) => {


    const [searchValue, setSearchValue] = useState("");

    const postMatches = (post) => {
        const textToCheck = (
            post.title + post.description
        ).toLowerCase();
        return textToCheck.includes(searchValue.toLowerCase());
    };

    const filteredPosts = posts.filter((post) => {

        return post ?  postMatches(post) : false;
    });


    return (
        <>
            <div id="post-container">
                <div id="posts">
                    <h3>
                        Shop the marketplace
                    </h3>
                    <h5>
                        Search for a post
                    </h5>
                    <input
                        type="text"
                        className="field"
                        placeholder="Search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div >
                        {
                            filteredPosts.map((p) => (
                                <div key={p._id} className="post">
                                    <div >
                                        <div>
                                            <h3 >{p.title}</h3>
                                            <p className="post-text">{p.description}</p>
                                            <Link to={`/posts/${p._id}`}>View post</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div id="new-posts">
                    <h3>
                        Create a new post
                    </h3>
                    {
                        token && (
                            <CreatePostForm posts={posts} token={token} setPosts={setPosts} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Posts;