import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { fetchUser, fetchPosts } from "../api";

import Home from "./Home";
import Header from "./Header";
import Posts from "./Posts";
import { getPosts } from "./Posts";
import AccountForm from "./AccountForm";
import UserLogIn from "./UserLogIn";

export const logOut = () => {
    setToken("");
    setGuest(null);
    Navigate("/")
}

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem('token'));
    const [user, setUser] = useState(null);


    // const logOut = () => {
    //     setToken("");
    //     setGuest(null);
    //     Navigate("/")
    // }

    useEffect(() => {
        const getPosts = async () => {
            const posts = await fetchPosts()
            setPosts(posts)
        };
        getPosts()
    }, [])

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                const { user } = await fetchUser(token);
                setUser(user);
            }
            getUser();
        }
    }, [token])

    return (
        <>
            <Header token = {token} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<AccountForm />} />
                <Route path="/posts" element={<Posts posts={posts}/>} />
                <Route path="/account" element={<AccountForm setToken={setToken} />} />
                <Route path="/account/login" element={<UserLogIn />} />
                <Route path="/account/signup" element={<AccountForm />} />
                {/* <Route path="/Listing" element={<Listing />}/> */}
            </Routes>
        </>
    );
};

export default App;