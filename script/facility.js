const consoleText = document.getElementById("console");
const facility_choice = [
    "You disregard the note.",
    " You walk forward through the door, and it slams shut behind you.",
    " As you take another step, you hear a crunch beneath your feet.", 
    " You pause and look down.",
    " Another note. ",
    " The edges are caked in a crusty, deep red substance.",
    //br
    " It reads: ",
    "\"You were thinking, what's out there can't possibly be any worse than what's in here, right?\""
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

if (localStorage.getItem("stage") == "2a") {
    consoleText.style.fontFamily = "Times New Roman";
    let delay = 500
    for (let i = 0; i < 7; i++) {
        if (i == 6) {
            setTimeout(()=>{consoleText.innerHTML += "<br><br>"}, delay)
        }
        setTimeout(typeSentence, delay, facility_choice[i], consoleText, 30)
        delay += delayCalc("typewriter", facility_choice[i], 30)
    }
    //note
    setTimeout(typeSentence, delay, facility_choice[7], consoleText, 30)
    delay += delayCalc("typewriter", facility_choice[7], 30)

    //tbc
    setTimeout(()=>{consoleText.innerHTML += "<br><br>"}, delay)
    setTimeout(typeSentence, delay, stage_one_end[0], consoleText, 30)
}
