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
        return post ? postMatches(post) : false;
    });


    return (
        <>
            <div id="post-container">
                <div id="posts">
                    <h2>
                        Shop the marketplace
                    </h2>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search for a post"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
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
                {
                    token && (
                            <div id="new-posts-container">
                                <div id="new-posts">
                                    <h3>Create a new post</h3>
                                    <CreatePostForm posts={posts} token={token} setPosts={setPosts} />
                                </div>
                            </div>
                    )
                }
            </div>
        </>
    )
}

export default Posts;