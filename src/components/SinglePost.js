
import { Link, useParams } from "react-router-dom";

import { callApi } from "../api";
import { useState } from "react";

function SinglePost({ posts, token, setPosts}) {
    const [content, setContent] = useState("");
    const { postId } = useParams();

    const post = posts.find((p) => p._id === postId);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { messages } = await callApi({
                path: `/posts/${postId}/messages`,
                method: "POST",
                body: { message: { content } },
                token,
            });
            setContent("");
        } catch (err) {
            console.error(err);
        }
    };

    const deletePost = async (postId) => {
        try {
            await callApi({
                method: "DELETE",
                path: `/posts/${postId}`,
                token,
            });
            setPosts((prev) => prev.filter((post) => postId !== post._id))
        }
        catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {post ? (
                <>
                    <div id="posts">
                        <div className="post">
                            <h1>{post.title}</h1>
                            <p className="post-text">{post.description}</p>
                        </div>

                        {post.isAuthor && (
                            <div>
                                {post.messages.map(m => <h3 key={m._id} >{m.content}</h3>)}
                                <button
                                    id="delete-button"
                                    onClick={() => deletePost(post._id)}>Delete</button>
                            </div>
                        )}
                        {!post.isAuthor && token && (
                            <div>
                                <div className="post">
                                    <h3>Send a message</h3>
                                    <form onSubmit={handleSubmit}>
                                        <textarea
                                            type="text"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            className="field"
                                            placeholder="type message here"
                                        ></textarea>
                                        <button type="submit">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>

                        )}
                    </div>

                </>
            ) : (
                <p>No post found</p>
            )}
            <Link id="link" to="/posts">Back to posts</Link>
        </div>
    );
}

export default SinglePost;