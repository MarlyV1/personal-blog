const checkbox = document.getElementById("checkbox");

// Toggles the main page and blog page from light to dark mode
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode")
})


