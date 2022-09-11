import { Link } from "react-router-dom";
import { callApi } from "../api";

function Post({ post, setposts }) {
    const deletePost = async () => {
        try {
            await callApi({
                method: "DELETE",
                path: `/posts/${post._id}`,
                token,
            });
            setposts((prev) =>
                prev.filter((post) => postId !== post._id)
            );
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="post">
                <div className="post-body">
                    <h5 className="post-title">{post.title}</h5>
                    <p className="post-text">{post.description}</p>
                    <Link className="post-link" to={`/posts/${post._id}`}>
                        View post
                    </Link>
                    {post.isAuthor && (
                        <button
                            className="btn btn-link text-danger"
                            onClick={() => deletePost(post._id)} >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Post;


// {
//     filteredPosts.map((p) => (
//         <div key={p._id} className="post">
//             <div >
//                 <div>
//                     <h3 >{p.title}</h3>
//                     <p className="post-text">{p.description}</p>
//                     <Link to={`/posts/${p._id}`}>View post</Link>
//                 </div>
//             </div>
//         </div>
//     ))
// }
