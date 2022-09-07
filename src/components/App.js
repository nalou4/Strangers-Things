import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Home";
import Header from "./Header";
import Posts from "./Posts";
import { register } from "../api";
import { fetchPosts } from "../api";
import { getPosts } from "./Posts";

const App = () => {
    const [posts, setPosts] = useState([]);
    // const [user, setUser] = useState('');

    // useEffect(() => {
    //     const registerUser = async () => {
    //         const user = await register()
    //         setUser(user)
    //     }
    //     registerUser()
    // }, [])

    useEffect(() => {
        const getPosts = async () => {
            const posts = await fetchPosts()
            console.log(posts)
            setPosts(posts)
        }
        getPosts()
    }, [])

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Posts" element={<Posts posts={posts}/>} />
                {/* <Route path="/Account" element={<Account />} /> */}
                {/* <Route path="/Listing" element={<Listing />}/> */}
            </Routes>
        </>
    );
};

export default App;