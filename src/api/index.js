// import { register } from "../components/LogIn";

const baseUrl = 'https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/api/2206-ftb-pt-web-pt';


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





// export async function fetchPosts() {
//     try {
//         const result = await fetch(baseUrl + '/posts')
//         const data = await result.json()
//         return data;
//     } catch (err) {
//         console.error(err)
//     } finally {
//         console.log("do stuff whether or not an error happened")
//     }
// }



