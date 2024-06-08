const cardform = document.getElementById("cardcode")
const cardinput = document.getElementById("cardcodeinput")

cardform.addEventListener("submit", (e) => {
    e.preventDefault();
    let response;
    if (cardinput.value == "LiWCi1gfqG") {
        if (localStorage.getItem("3ofclubs") == "true") {
            response = "You have already added this card."
        } else {
            response = "3 of clubs added to card list.";
            localStorage.setItem("cards", "1")
            localStorage.setItem("3ofclubs", "true")
        }
    } else {
      response = "Invalid code.";
    }
    document.getElementById("response").innerHTML = response;
});