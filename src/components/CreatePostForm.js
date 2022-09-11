import { addPostFetch, callApi } from "../api";
import { useState } from "react";

function CreatePostForm({ token, setPosts }) {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [willDeliver, setwillDeliver] = useState(false);

    const createPost = async (e) => {
        e.preventDefault();

        console.log('title :>> ', title);
        console.log('price :>> ', price);
        console.log('description :>> ', description);

        try {

            const post = await addPostFetch( token, title, description, price, willDeliver )

            // const { post } = await callApi({
            //     method: "POST",
            //     path: "/posts",
            //     token,
            //     body: {
            //         posts: {
            //             title,
            //             price,
            //             description,
            //             willDeliver
            //         },
            //     },
            // });

            // post.isAuthor = true;

            // console.log('path :>> ', path);
            // console.log('method :>> ', method);

            // console.log('post :>> ', post);

            setPosts((prev) => [post, ...prev]);
            setTitle("");
            setDescription("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={createPost}>
                <div id="search-bar-container">

                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="field"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        className="field"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        className="field"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <label htmlFor="willDeliver"> Will Deliver?</label>
                    <input
                        type="checkbox"
                        name="willDeliver"
                        className="field"
                        value={willDeliver}
                        onChange={(e) => setwillDeliver(e.target.checked)}
                    />
                </div>

                <button
                    type="submit"
                    className="button">add post</button>
            </form>
        </div>
    )

}

export default CreatePostForm;