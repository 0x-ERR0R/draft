const threeofclubs = document.getElementById("3ofclubs")
if (localStorage.getItem("3ofclubs") == "true") {
    threeofclubs.style.display = "inline"
} else {
    threeofclubs.style.display = "none"
}