let username = document.getElementById("username")
let title = document.getElementById("title")
let content = document.getElementById("content")
const form = document.getElementById("form")

// Collects that user's input and stores them in local storage
function formInfo(){

    let formData = JSON.parse(localStorage.getItem("userInfo")) || [];

    let formInfo = {
    user: username.value,
    userTitle: title.value,
    userContent: content.value
};
   formData.push(formInfo)

   localStorage.setItem("userInfo", JSON.stringify(formData));
}

// After user submits the form, then the formInfo function is invoked and the page go to the blog.html file
form.addEventListener("submit", (event) => {
    event.preventDefault();
    formInfo();
    location.href = "./blog.html"
})