
// Gets the user information from local storage
function displayFormInfo(){
    const displayInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(displayInfo)
}
displayFormInfo();