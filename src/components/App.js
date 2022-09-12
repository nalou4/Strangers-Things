import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { fetchUser, callApi } from "../api";

import Home from "./Home";
import Header from "./Header";
import Posts from "./Posts";
import AccountForm from "./AccountForm";
import SinglePost from "./SinglePost";
import Profile from "./Profile";

const App = () => {

    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem('token'));
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            const {posts} = await callApi({path: "/posts", token});
            setPosts(posts);
        };
        getPosts()
    }, [token])

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                const user  = await fetchUser(token);
                setUser(user);
            };
            getUser();
        }
    }, [token])

    useEffect(() => {
        window.localStorage.setItem("token", token);
    }, [token]);

    return (
        <>
            <Header token={token} setToken={setToken} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                
                <Route path="/profile" element={<Profile user={user} />} />

                <Route path="/posts" element={<Posts posts={posts} token={token} setPosts={setPosts}/>} />

                <Route path="/posts/:postId" element={<SinglePost posts={posts} token={token} setPosts={setPosts}/>} ></Route>

                <Route path="/account/:action" element={<AccountForm setToken={setToken}/>}></Route>

            </Routes>
        </>
    );
};



export default App;