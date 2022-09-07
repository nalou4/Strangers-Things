const baseUrl = 'https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/';

export async function register(username, password) {
    const result = await fetch(baseUrl + 'users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    })
    const data = await result.json();
    console.log(data)
    return data;
}


export async function logIn(username, password) {
    const result = await fetch(baseUrl + 'users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    })
    const data = await result.json();
    console.log(data)
    return data;
}

logIn("nikki", "password");

function handleSubmit() {
    // let fields = this.state.fields;
    // let errors = {};
    // let formIsValid = true; 

    // if (!fields["name"]){
    //     formIsValid = false;
    //     errors["name"] = "cannot be empty";
    // }

    // if (typeof fields["name"] !== "undefined") {
    //     if (!fields["name"].match)
    // }

    // const submission = document.getElementById("input").required;
    // document.getElementById("form-error").innerHTML = submission;


}

const LogIn = () => {
    return (
        <div>
            <p>Create your username and password</p>
            <form onSubmit={handleSubmit} className="registration-form">
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

export default LogIn

