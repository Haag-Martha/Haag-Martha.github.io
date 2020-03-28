/* This demos JS objects */
class JokeObj {  
    constructor(ajaxResponse) {  
        var responseObj = JSON.parse(ajaxResponse);
        this.id = responseObj.id;  
        this.joke = responseObj.joke;  
    }
    
    getJoke() {  /* cont. JS objects */
        return this.joke;
    }
}

/* Store Used Jokes */
var oldJokes = [];  /* JS (loops, functions, etc) */
localStorage.setItem("oldJokes", JSON.stringify(oldJokes));  /* JSON Parse/stringify and Local Storage */

function setButtonText(text) {  /* JS */
    document.getElementById("new-joke-button").innerHTML = text;
}

function highlightButton(highlight) {  /* JS */
    var element = document.getElementById("new-joke-bubble");
    if (highlight) {  /* JS */
        element.style.backgroundColor = "#ffaaaa";  /* change CSS by JS */
        element.classList.add("red");  /* change CSS by JS */
    }
    else {
        element.style.backgroundColor = "white";  /* change CSS by JS */
        element.classList.remove("red");  /* change CSS by JS */
    }
}

function setJoke(joke, error) {
    if (!error) {
        oldJokes = JSON.parse(localStorage.getItem("oldJokes"));  /* JSON and Local Storage */
        
        if (!oldJokes.includes(joke)) { /* Once joke has been used, add to storage */
            oldJokes.unshift(joke);  /* JS */
            /* Only store 20 used jokes */
            while (oldJokes.length > 20) {  /* JS */
                oldJokes.pop();  /* JS */
            }
            /* Return used jokes to storage */
            localStorage.setItem("oldJokes", JSON.stringify(oldJokes));  /* JSON and Local Storage */
            
            /* Set button to normal text */
            setButtonText("Let's hear another, Dad!");
            highlightButton(false);
        }
        else { /* Notice for repeat joke, do not store */
            setButtonText("Aww Dad! You already told that one, how 'bout another?");
            highlightButton(true);
        }
    }
    
    /* Set joke */
    document.getElementById("dad-joke").innerHTML = joke;
}

function ajaxNewJoke() {
    /* Create request object */ 
    /* AJAX requesting a JSON file */
    var request = new XMLHttpRequest();
    request.open("Get", "https://icanhazdadjoke.com/");
    request.setRequestHeader("Accept", "application/json");
    
    /* Set function to execute when request is finished */
    request.onload = function() {
        let joke = "Your request could not be completed due to an unknown error.";
        let error = 1;
        
        if (request.status == 200) {
            var jokeObj = new JokeObj(request.response);  /* JSON parse/stringify */
            joke = jokeObj.getJoke();
            error = 0;
        }
        else {
            joke = "Your request could not be completed due to an error: " + request.status + " " + request.statusText;
        }
        
        setJoke(joke, error);
    }
    
    /* Send request */
    request.send();  /* AJAX request JSON */
}

function reuseJoke() {
    oldJokes = JSON.parse(localStorage.getItem("oldJokes"));
    /* Use joke form older half of list */
    setJoke(oldJokes[Math.floor(Math.random()*oldJokes.length/2 + oldJokes.length/2)], 0);
}

function changeJoke() {
    if(Math.random() < 0.1) { /* With 1/10 chance, tell an old joke */
        reuseJoke();
    }
    else {
        ajaxNewJoke();
    }
}

/* Using ES6 fat arrow function */
var pauseButtonWobble = (seconds) => {  /* CSS anim/trans triggered by JS */
    /* Pause wobble */
    document.getElementById("new-joke-button").style.animationPlayState = "paused";
    
    /* Resume wobble after specified time */
    var resumeWobble = () => {
        document.getElementById("new-joke-button").style.animationPlayState = "running";
    }
    setTimeout(resumeWobble, seconds*1000);
}

/* Creates <audio> element to play sound, removing itself afterward. */
var fireSound = () => {  /* DOM manipulation */
    var body = document.getElementsByTagName("body")[0];
    
    // Create sound tag
    var soundTag = document.createElement("audio");  /* HTML media tags */
    soundTag.id = "sound-player";
    soundTag.src = "http://www.soundjay.com/switch/sounds/switch-5.mp3";
    soundTag.autoplay = "autoplay";
    
    // Add sound tag
    body.appendChild(soundTag);
    
    // remove after sound ends
    soundTag.onended = () => {
        body.removeChild(soundTag);
    }
}

window.onload = function() {  /* JS Events */
    changeJoke();
}

document.getElementById("new-joke-button").onclick = function() {  /* JS Events */
    changeJoke();
    pauseButtonWobble(7);
    fireSound();
}