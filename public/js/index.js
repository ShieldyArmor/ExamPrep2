test()

async function test() {

const res = await fetch("/getAll",
{
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
})
const data = await res.json();

console.log(data.blogs);

data.blogs.forEach(e => {
    let dF = new Date(e[0].date._seconds * 1000 + e[0].date._nanoseconds/1000000)
    console.log(dF);
    let displayDate = `${dF.getDate()}.${dF.getMonth()+1}.${dF.getFullYear()}, ${dF.getHours()}:${dF.getMinutes()}:${dF.getSeconds()}`

    let item = `
    <div blogID="${e[1]}">
    <h2>${e[0].title}</h2>
    <p>${e[0].content}</p>
    <p>${displayDate}</p>   
    </div>
    `
    recentBox.innerHTML += item
})
}



test()

async function test() {

const res = await fetch("/getAll",
{
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
})
const data = await res.json();

console.log(data.blogs);

data.blogs.forEach(e => {
    let dF = new Date(e[0].date._seconds * 1000 + e[0].date._nanoseconds/1000000)
    console.log(dF);
    let displayDate = `${dF.getDate()}.${dF.getMonth()+1}.${dF.getFullYear()}, ${dF.getHours()}:${dF.getMinutes()}:${dF.getSeconds()}`

    let item = `
    <div blogID="${e[1]}">
    <h2>${e[0].title}</h2>
    <p>${e[0].content}</p>
    <p>${displayDate}</p>   
    </div>
    `
    recentBox.innerHTML += item
})
}



// login()

// async function login() {

//     const res = await fetch("/login",
//     {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             parcel: {
//             password : "test123", username: "tester"
//             }
//         })
//     })
//     const data = await res.json();

//     if (data.userLoggedIn) {
//         console.log("Logging in!");
//     }

//     if (data.message) {
//         message = data.message
//         console.log(message + "haha");
//     }

//     if (data.userLoggedIn == true) {
//         window.location.replace("admin")
//     }

// }