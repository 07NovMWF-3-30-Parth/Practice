// Example of PENDING promise state

// 1st Example
const data = fetch("https://jsonplaceholder.typicode.com/posts")
console.log(data);

// 2nd example
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log(response);
});


// 3rd example
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();
}).then(data => {
    console.log(data);
});