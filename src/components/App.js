import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Home";
import Vacations from "./Listings";
import { fetchVacations } from "../util";


const App = () => {
    const [vacations, setVacations] = useState([])

    useEffect(() => {
        const getVacations = async () => {
            const vacations = await fetchVacations()
            setVacations(vacations)
        }
        getVacations()
    }, [])

    return (
        <div className="p-3">
            <nav className="d-flex justify-content-between mb-4">
                <div>
                    <Link className="me-2" to="/">Home</Link>
                    <Link to="/vacations">Vacations</Link>
                </div>
                <div>
                    <Link className="me-2" to="/account/login">Log in</Link>
                    <Link to="/account/signup">Sign up</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vacations" element={<Vacations vacations={vacations} />} />
            </Routes>
        </div>
    );
};

export default App;