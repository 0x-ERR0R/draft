//why are you looking at my spaghetti code :(
    
const play = document.getElementById("play");
const glitch = document.getElementById("glitch");
const consoleText = document.getElementById("console");
// const inputCursor = document.getElementById("inputCursor");
const choice = document.getElementsByClassName("choice");
const button1 = document.getElementById("button1");

function stageExecuter(stage) {
    
}

// function consoleCursor(state) {
//     if (state == "hidden") {
//         inputCursor.style.visibility = "hidden"

//     } else if (state == "type") {
//         inputCursor.style.visibility = "visible"
//         inputCursor.style.animationName = "none"

//     } else if (state == "idle") {
//         inputCursor.style.visibility = "visible"
//         inputCursor.style.animationName = "blink"
//     }
// }

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

//---Stage Sequences---
function stageOne() {
    const script = [
        "Performing first time set up...",
        "Configuring settings...",
        "Loading simulation...",
        "Initiating starting sequence...", //glitch
        "An unknown error occurred. ",
        "Retrying...",
        "Process cancelled.", //glitch
        "Looks like the visuals aren't working.",
        "There isn't time to fix it though.",
        "You have about a minute before you get torn apart.",
        "Let me try something.",
        "Installing narration mod pack...", //index 11
        "Installed.", //maybe make this more consistent?
        "There.",
        " That should do for now while I sort this out.", //glitch
        //narration starts -- 15
        "You've woken up to find yourself in some sort of forest.",
        " You sit up and bring yourself to your feet. ",
        " Giant leaves tower over you and a deafening buzz floods your ears. ",
        " Behind you is the sound of thudding, slowly getting louder and louder.",
        " Something is definitely coming for you.",
        //paragraph break -- 20
        "It takes a little bit to get your footing, but you manage to stabilise yourself.",
        " You break out into a run. ",
        " Whatever's after you isn't showing any sign of stopping.",
        //paragraph break -- 23
        "Amidst the foliage stands a metal colossus - a deserted facility.",
        " You see what appears to be a door and an interface.",
        " You move towards it and the interface lights up.",
        " A loud beeping sound follows.",
        //show the continue (class choice) button -27
        "Opening interface...",
        "Scanning user...",
        "Verification complete.",
        "Welcome back, Ryan. The door will now be unlocked.",
        "Closing interface...",
        //resume narration --32
        "As you move through the door, a screech resonates throughout your ears.",
        " You hear a whirring noise and feel the metal around you heat up.",
        " Just as the heavy footsteps come closer, there is a zap. ",
        " The smell of fried flesh.",
        " A thud.",
        " And then silence.", 
        " Dead silence.",
        //break --39 
        "You continue to walk forward, the stench of rust flooding your nose.", 
        " The sun peaks through a few cracks in the walls, providing just enough light to make out a general silhouette of the room.",
        " Ahead of you is an open door, and taped on the wall is a note.",
        " It reads:",
    ]

    const note = [
        "\"This isn't my normal way of doing things, with these makeshift notes scattered everywhere." ,
        " The systems here have long since fallen into disrepair, and I can't fix them anymore.",
        " No one can, and trying to would be a death wish.",
        //paragraph break
        "Since you're here and capable of reading this, you must have some form of intelligence.",
        " That means you should have the brain capacity to make a smart decision and turn around.",
        " Go back to where you came from and pretend you never saw anything.", 
        " It's a lot less clean-up for me.",
        //br
        "But I know no one listens to me.",
        " In the end, the choice is yours.",
        " Both doors are open for a reason.",
        //br
        "Be warned though.",
        " There is no turning back once the choice is made.\""
        //show choice buttons (go forward into the facility / go back into the forest)
    ]

    var delay = 500

    setTimeout(typeSentence, delay, script[0], consoleText)
    delay += delayCalc("typewriter", script[0])

    for (let i = 1; i < 3; i++) {
        setTimeout(()=>{consoleText.innerHTML += "<br><br>"}, delay)
        setTimeout(typeSentence, delay, script[i], consoleText)
        delay += delayCalc("typewriter", script[i])
        // setTimeout(deleteSentence, delay, consoleText)
        // delay += delayCalc("typewriter", script[i], 40)
    }

    //glitch + wipe text
    setTimeout(glitchEffect, delay)
    setTimeout(()=> {consoleText.innerHTML = ''; consoleText.style.color = "#d80000"}, delay)
    delay += delayCalc("glitch")

    setTimeout(typeSentence, delay, script[4], consoleText)
    delay += delayCalc("typewriter", script[4])
    setTimeout(typeSentence, delay, script[5], consoleText)
    delay += delayCalc("typewriter", script[5])

    //glitch + wipe text
    setTimeout(glitchEffect, delay)
    setTimeout(()=> {consoleText.innerHTML = '';}, delay)
    delay += delayCalc("glitch")

    //cancelled
    setTimeout(typeSentence, delay, script[6], consoleText)
    delay += delayCalc("typewriter", script[6])

    //glitch + wipe text
    setTimeout(glitchEffect, delay)
    setTimeout(()=> {
        consoleText.innerHTML = '';
        consoleText.style.color = "#e0e0e0";
        consoleText.style.fontFamily = "Verdana";
        // consoleCursor("type")
    }, delay)
    delay += delayCalc("glitch")
    delay += 200

    //visuals arent working -> let me try something
    for (let i = 7; i < 11; i++) {
        setTimeout(typeSentence, delay, script[i], consoleText)
        delay += delayCalc("typewriter", script[i])
        setTimeout(deleteSentence, delay, consoleText, 30)
        delay += delayCalc("typewriter", script[i], 30)
    }

    //installing modpack
    setTimeout(()=> {
        consoleText.style.fontFamily = "Courier New";
    }, delay)
    setTimeout(typeSentence, delay, script[11], consoleText)
    delay += delayCalc("typewriter", script[11])
    setTimeout(typeSentence, delay, script[12], consoleText)
    delay += delayCalc("typewriter", script[12])
    setTimeout(()=> {
        consoleText.innerHTML = "";
        consoleText.style.fontFamily = "Verdana";
        // consoleCursor("type")
    }, delay)

    //there.
    setTimeout(typeSentence, delay, script[13], consoleText)
    delay += delayCalc("typewriter", script[13])
    setTimeout(typeSentence, delay, script[14], consoleText)
    delay += delayCalc("typewriter", script[14])

    //narration start + glitch + wipe text
    setTimeout(glitchEffect, delay)
    setTimeout(()=> {
        consoleText.innerHTML = '';
        consoleText.style.color = "#e0e0e0";
        consoleText.style.fontFamily = "Times New Roman";
        // consoleCursor("hidden")
    }, delay)
    delay += delayCalc("glitch")
    delay += 200

    //actual narration holy fuck hard coding all this in is such a :skull:
    //WHJY DID I CHOOSE JAVASCRIPT WHY DO I HAVE BRAIN DAMAGEE AAHHHHHHH
    for (let i = 15; i < 27; i++) {
        if (i == 20 | i == 23) {
            setTimeout(()=>{consoleText.innerHTML += "<br><br>"}, delay)
        }
        setTimeout(typeSentence, delay, script[i], consoleText, 30)
        delay += delayCalc("typewriter", script[i], 30)
    }
    //console.log(delay)
    setTimeout(()=> {
        consoleText.innerHTML = ""
        consoleText.style.fontFamily = "Courier New";
    }, delay)

    //interface
    delay += 300
    setTimeout(typeSentence, delay, script[27], consoleText, 50)
    delay += delayCalc("typewriter", script[27], 50)

    for (let i = 28; i < 32; i++) {
        setTimeout(()=>{consoleText.innerHTML += "<br><br>"}, delay)
        setTimeout(typeSentence, delay, script[i], consoleText, 50)
        delay += delayCalc("typewriter", script[i], 50)
        if (i == 28) {
            delay += 500 //verifying
        }
    }

    delay += 500
    setTimeout(()=> {
        consoleText.innerHTML = "";
        consoleText.style.fontFamily = "Times New Roman";
    }, delay)

    for (let i = 32; i < 43; i++) {
        if (i == 39) {
            setTimeout(()=>{consoleText.innerHTML += "<br><br>"}, delay)
        }
        setTimeout(typeSentence, delay, script[i], consoleText, 30)
        delay += delayCalc("typewriter", script[i], 30)
    }

    delay += 100

    setTimeout(()=> {
        consoleText.innerHTML = "";
    }, delay)
    
    //reading from note
    for (let i = 0; i < 12; i++) {
        if (i == 3 | i == 7 | i == 10) {
            setTimeout(()=>{consoleText.innerHTML += "<br><br>"}, delay)
        }
        setTimeout(typeSentence, delay, note[i], consoleText, 30)
        delay += delayCalc("typewriter", note[i], 30)
    }
    
    //button choices (dont forget local storage)
    setTimeout(()=> {
        button1.style.visibility = "visible"
        button2.style.visibility = "visible"
        button1.innerHTML = "Go forward into the facility"
        button2.innerHTML = "Go back into the forest"
        consoleText.innerHTML = ""
        //facility choice = 2a
        button1.addEventListener("click", function(e) {
            localStorage.setItem("stage", "2a")
            window.location.href = "pages/facility.html";
            
        }) 
    }, delay)
    setTimeout(()=> {
        //forest choice = 2b
        button2.addEventListener("click", function(e) {
            localStorage.setItem("stage", "2b")
            window.location.href = "pages/forest.html";
        }) 
    }, delay)
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

//---Visual Effects---
function glitchEffect() {
    glitch.style.visibility = "visible"
    setTimeout(() => {
        glitch.style.visibility = "hidden"
    }, 300);
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

async function deleteSentence(eleRef, delay = 40) {
    const sentence = eleRef.innerHTML
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(delay);
      letters.pop();
      eleRef.innerHTML = letters.join("");
    }
}

//---Play Button---

if (!localStorage.getItem("stage")) {

    play.addEventListener("click", function(e) {
        play.style.visibility = "hidden";
        stageOne()
    })  
} else if (localStorage.getItem("stage") == "2a") {
    play.style.visibility = "hidden";
    consoleText.innerHTML = "You chose: the facility route."

} else if (localStorage.getItem("stage") == "2b") {
    play.style.visibility = "hidden";
    consoleText.innerHTML = "You chose: the forest route."
}
