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
const facility_a = [
    "As you look forward, you realise closing your eyes and keeping them open has no effect on what you can see.",
    " Standing in the rays of what little light remains, you look back at the crumpled note once more.",
    " Just barely, you are able to see faint black blocks on the other side of the note.",
    " You flip it over. ",
    //br
    " It reads:"
    //glitch and cipher
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

function glitchEffect() {
    glitch.style.visibility = "visible"
    setTimeout(() => {
        glitch.style.visibility = "hidden"
    }, 300);
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

    for (let i = 0; i < 5; i++) {
        if (i == 0 || i == 4) {
            setTimeout(()=>{consoleText.innerHTML += "<br><br>"}, delay)
        }
        setTimeout(typeSentence, delay, facility_a[i], consoleText, 30)
        delay += delayCalc("typewriter", facility_a[i], 30)
    }

    setTimeout(glitchEffect, delay)
    delay += 100
    setTimeout(()=> {
        consoleText.innerHTML = '';
        consoleText.style.color = "#e0e0e0";
        consoleText.style.fontFamily = "Times New Roman";
        window.location.href = "facilitycipher.html";
    }, delay)
    
    //cipher text
    
}
