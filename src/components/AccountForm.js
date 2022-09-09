import { register, logIn, fetchUser } from "../api"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"


const AccountForm = ({setToken}) => {
    return (
        <div>
            <p>Create your username and password</p>
            <form /*onSubmit={handleSubmit}*/ className="registration-form">
                <label className="field">
                    Userame:
                    <input className="input" type="text" name="username" placeholder="name" minLength={5} required/>
                </label>
                <label className="field">
                    Password:
                    <input className="input" type="text" name="password" placeholder="password" minLength={5} required/>
                </label>
                <label className="field">
                    Confirm password:
                    <input className="input" type="text" placeholder="confirm password" minLength={5} required/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            {/* <p id="form-error"></p> */}
        </div>
    )
}

export default AccountForm;
