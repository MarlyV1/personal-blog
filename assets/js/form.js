let username = document.getElementById("username")
let title = document.getElementById("title")
let content = document.getElementById("content")
const form = document.getElementById("form")

// Object to store the user's information

// function formInfo(){
//     let formInfo = {
//     user: username.value,
//     userTitle: title.value,
//     userContent: content.value
// };
//    console.log(formInfo)

//    localStorage.setItem("userInfo", JSON.stringify(formInfo));
// }


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


form.addEventListener("submit", (event) => {
    event.preventDefault();
    formInfo();
    location.href = "./blog.html"
})