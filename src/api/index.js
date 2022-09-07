const baseUrl = 'https://strangers-things.herokuapp.com/api/2206-FTB-PT-WEB-PT';

export const fetchPosts = async () => {
try{
    const result = await fetch (baseUrl + '/posts');
    const { data } = await result.json();
    return data.posts
}
catch{
    console.error('there was an error when fetching posts')
}
}


export async function register (username, password){
    const result = await fetch (baseUrl + 'users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer TOKEN_STRING_HERE'        
        },
        body: JSON.stringify({
            user: {
                username, 
                password
            }
        })
    })
    const data = await result.json();
    // console.log(data)
    return data;
}


export const callApi = async ({method, path, token, body}) => {
    const options = {
        method: method ? method : "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (token){
        options.body = JSON.stringify(body);
    }

    const result = await fetch(baseUrl + path, options);
    const data = await result.json();
    if (data.error){
        throw data.error.message;
    }
    return data.data;
}