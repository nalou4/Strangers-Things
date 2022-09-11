
import { Link, useParams } from "react-router-dom";

import { callApi } from "../api";
import { useState } from "react";

function SinglePost({ posts, token }) {
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

    return (
        <div>
            {post ? (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    {post.isAuthor && (
                        <h1>
                            Hey youre the author
                            {post.messages.map( m => <h1>{m.content}</h1>)}
                            <button>nikki add delete stuff here</button>                       
                        </h1>
                    )}
                    {!post.isAuthor && token && (
                        <>
                        <h1>hey youre not the author but logged in</h1>
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
                        </>
                    )}
                </>
            ) : (
                <p>No post found</p>
            )}
            <Link to="/posts">Back to posts</Link>
        </div>
    );
}

export default SinglePost;