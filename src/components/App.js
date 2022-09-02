import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Home";
import Vacations from "./Listings";
import Header from "./Header";
import { fetchPosts } from "../api";
import Listings from "./Listings";


const App = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const posts = await fetchPosts()
            setPosts(posts)
        }
        getPosts()
    }, [])

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Listings" element={<Listings />} />
                {/* <Route path="/Listing" element={<Listing />}/> */}
            </Routes>
        </>
    );
};

export default App;