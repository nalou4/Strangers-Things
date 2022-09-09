import { register, logIn, fetchUser } from "../api"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"


const UserLogIn = ({setToken}) => {
    return (
        <div>
            <p>Log in here:</p>
            <form /*onSubmit={handleSubmit}*/ className="registration-form">
                <label className="field">
                    Userame:
                    <input className="input" type="text" name="username" placeholder="name" minLength={5} required/>
                </label>
                <label className="field">
                    Password:
                    <input className="input" type="text" name="password" placeholder="password" minLength={5} required/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            {/* <p id="form-error"></p> */}
        </div>
    )
}

export default UserLogIn;