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

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(username.value)
    formInfo();
})