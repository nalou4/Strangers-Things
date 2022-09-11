import { register } from "../api"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { logIn } from "../api"


const AccountForm = ({ setToken }) => {

    const { action } = useParams();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const authFn = action === "login" ? logIn : register;
            const { token } = await authFn(username, password);
            setToken(token);
            navigate("/");
        } catch (err) {
            setError(err);
        }
    };

    const title = action === "login" ? "Log in" : "Sign up";


    return (
        <>
            <p>{title}</p>
            <form onSubmit={handleSubmit} className="registration-form">

                <label htmlFor="username" className="field">
                    Userame
                    <input
                        className="input"
                        type="text"
                        name="username"
                        placeholder="name"
                        onChange={(e) => setUsername(e.target.value)}
                        minLength={5}
                        required />
                </label>

                <label htmlFor="password" className="field">
                    Password
                    <input
                        className="input"
                        type="text"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        minLength={5}
                        required />
                </label>

                {/* /*how do i get rid of confirm password with login using ternary?*/}

                {/* {
                    !"login" ? (<label htmlFor="password" className="field">
                        Confirm password
                        <input className="input" type="text" placeholder="confirm password" minLength={5} required />
                    </label>) : ("")
                } */}

                {/* <input type="submit" value="Submit" /> */}
                <button type="submit" className="button">
                    Submit
                </button>

            </form>
            {error && <p>{error}</p>}

        </>
    )
}

export default AccountForm;
