import { Link } from "react-router-dom";
const baseUrl = 'https://strangers-things.herokuapp.com/api/2206-FTB-PT-WEB-PT';


// export const getPosts = async () => {
//     const result = await fetch (baseUrl + '/posts', {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     const data = await result.json()
//     console.log(data)
//     console.log('getposts')
//     setPosts(data)
// }



// export const makePost = async (token, title, description, price) => {
//     const result = await fetch (baseUrl + '/posts', {
//         method: "POST",
//         headers: {
//             'Content-Type': '/application.json',
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({
//             post: {
//                 title,
//                 description,
//                 price,
//                 willDeliver: true
//             }
//         }),
//     })
//     const {data} = await result.json()
//     console.log('hi')
//     console.log("data: ", data);
//     return data;
// }

// makePost(posts)


const Posts = ({posts}) => {

    return (
        <>
            <div id="post-container">
                <div id="posts">
                    <h3>
                        Current posts
                    </h3>
                    <h5>
                        Shop the marketplace
                    </h5>
                    {
                        posts.map(p => (
                            <div className="post">
                                <div className="post-body">
                                    <h3 className="post-title">{p.title}</h3>
                                    <p className="post-text">{p.description}</p>
                                    <Link className="post-link" to=" ">View post</Link>
                                </div>

                            </div>
                        ) )
                    }
                </div>
                <div id="new-posts">
                    <h3>
                        Create a new post
                    </h3>
                    <form>

                    </form>
                </div>
            </div>
        </>

    )
}

export default Posts