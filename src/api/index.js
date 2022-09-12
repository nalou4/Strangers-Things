
const baseUrl = 'https://strangers-things.herokuapp.com/api/2206-FTB-PT-WEB-PT';

export async function register (username, password){
    const result = await fetch (baseUrl + '/users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',        
        },
        body: JSON.stringify({
            user: {
                username, 
                password
            },
        }),
    })
    const { data, error } = await result.json();
    if (!result.ok) {
        throw error.message
    }

    return data;
}

export async function logIn(username, password) {
    const result = await fetch(baseUrl + '/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                username,
                password
            },
        }),
    })
    const { data, error } = await result.json();

    if (!result.ok) {
        throw error.message
    }

    return data;
}

export const fetchUser = async (token) => {
    const result = await fetch(baseUrl + "/users/me", {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    const { data } = await result.json();
    return data;
}


export const callApi = async ({method, path, token, body}) => {
    const options = {
        method: method ? method : "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };

    if (token){
        options.headers.Authorization = `Bearer ${token}`;
    }

    if (body){
        options.body = JSON.stringify(body);
    }

    const result = await fetch(baseUrl + path, options);
    const data = await result.json();

    if (data.error){
        throw data.error.message;
    }
    return data.data;
}

export const addPostFetch = async (token, title, description, price, willDeliver = false) =>{

    const res = await fetch (baseUrl + "/posts", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
                title,
                description,
                price,
                willDeliver
            }
        })
    })
    const serverResponse = await res.json();
}

