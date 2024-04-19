const blogTitle = document.querySelector(".blog-title-1")
const blogContent = document.querySelector(".content")
const postedBy = document.querySelector(".posted-by")
const blogSection = document.querySelector("#blog-section")


// Gets the user information from local storage 
function displayFormInfo(){

    const displayInfo = JSON.parse(localStorage.getItem("userInfo"))

    console.log(displayInfo)

    displayInfo.forEach(index => {

        // Displays the informattion from each item in the array in local storage
        blogSection.innerHTML += `
        <section>
        <h3 class="blog-title-1">${index.userTitle}</h3>
        <p class="content">${index.userContent}</p>
        <p class="posted-by">Posted By: ${index.user}</p>
        </section>
        `
    });
}


displayFormInfo();

