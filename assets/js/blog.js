const blogTitle = document.querySelector(".blog-title-1")
const blogContent = document.querySelector(".content")
const postedBy = document.querySelector(".posted-by")




// Gets the user information from local storage
function displayFormInfo(){
    const displayInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(displayInfo)

    blogTitle.textContent = displayInfo.userTitle;
    blogContent.textContent = displayInfo.userContent
    postedBy.textContent = displayInfo.user
}
displayFormInfo();

