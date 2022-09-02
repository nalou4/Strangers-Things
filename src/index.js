import {createRoot } from 'react-dom/client'



const baseUrl = 'https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt'
const key = ''
console.log('hello')

async function fetchPosts() {
    try {
        const result = await fetch(baseUrl)
        const data = await result.json()
        console.log(data);
    } catch (err) {
        console.error(err)
    } finally {
        console.log("do stuff whether or not an error happened")
    }
}

fetchPosts()