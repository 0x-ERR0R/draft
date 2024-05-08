const consoleText = document.getElementById("console");
const forest_choice = [
    "You heed their warning, whoever they are.", 
    " You turn around and walk out of the door, doing your best to avoid stepping on the creature's...remains.", 
    " The door slams firmly shut behind you.",
    " You made your choice.",
    " You aimlessly wander forward through the thick foliage.",
    " As you brush off the bugs that seem to be doubling in number with each step, you can't help but ask; was this the right choice?"
]
const stage_one_end = [
    "To be continued."
]

function delayCalc(type, string="", speed = 50) {
    let delayNew = 0
    if (type == "glitch") {
        delayNew += 400

    } else if (type == "typewriter") {
        delayNew += 1500
        delayNew += string.length * speed
    } 
    return delayNew
}

async function typeSentence(sentence, eleRef, delay = 50) {
    const letters = sentence.split("");
    let i = 0
    while(i < letters.length) {
      await waitForMs(delay)
      eleRef.innerHTML += letters[i]
      i++
    }
    return;
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

if (localStorage.getItem("stage") == "2b") {
    consoleText.style.fontFamily = "Times New Roman";
    let delay = 500
    for (let i = 0; i < 6; i++) {
        if (i == 4) {
            setTimeout(()=>{consoleText.innerHTML += "<br><br>"}, delay)
        }
        setTimeout(typeSentence, delay, forest_choice[i], consoleText, 30)
        delay += delayCalc("typewriter", forest_choice[i], 30)
    }

    setTimeout(()=>{consoleText.innerHTML += "<br><br>"}, delay)
    setTimeout(typeSentence, delay, stage_one_end[0], consoleText, 30)
}