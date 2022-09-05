const baseUrl = 'https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/api/2206-ftb-pt-web-pt';

console.log('hello')

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
    console.log(data)
    return data;
}

register("nikki", "password");

export async function logIn (username, password){
    const result = await fetch (baseUrl + 'users/login', {
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
    console.log(data)
    return data;
}

logIn("nikki", "password");

