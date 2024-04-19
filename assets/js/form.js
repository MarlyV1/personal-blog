let username = document.getElementById("username")
let title = document.getElementById("title")
let content = document.getElementById("content")
const submit = document.getElementById("submit")
const form = document.getElementById("form")


// Object to store the user's information

function formInfo(){
    let formInfo = {
    user: username.value,
    userTitle: title.value,
    userContent: content.value
};
   console.log(formInfo)

//    localStorage.setItem("userInfo", JSON.stringify(formInfo));


}




// submit.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log(username.value)
//     formInfo();
// })

submit.addEventListener("submit", formInfo)

// window.localStorage.setItem("username", username.value);
// window.localStorage.setItem("title", title.value);
// window.localStorage.setItem("content", content.value);


// function storedFormData() {
//     localStorage.setItem("username", username.value);
//     localStorage.setItem("title", title.value);
//     localStorage.setItem("content", content.value);
// }