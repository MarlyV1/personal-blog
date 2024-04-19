let username = document.getElementById("username")
let title = document.getElementById("title")
let content = document.getElementById("content")
const submit = document.getElementById("submit")
const form = document.getElementById("form")


// Object to store the user's information
const formInfo = {
    user: username.value,
    userTitle: title.value,
    userContent: content.value,
}

// window.localStorage.setItem("username", username.value);
// window.localStorage.setItem("title", title.value);
// window.localStorage.setItem("content", content.value);


// function storedFormData() {
//     localStorage.setItem("username", username.value);
//     localStorage.setItem("title", title.value);
//     localStorage.setItem("content", content.value);
// }