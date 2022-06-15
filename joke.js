const political = document.getElementById("blf-cb3");
let request = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,racist,sexist,explicit";
document.getElementById("readyRequest").innerHTML = request;

// political.addEventListener("change", isPolitical());

function isPolitical() {
    if (political.checked === true) {
        request = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    } else {
        request = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,racist,sexist,explicit";
    }
    document.getElementById("readyRequest").innerHTML = request;
}

async function getJoke() {
    try {
        const response = await fetch(request)
        const data = await response.json()
        console.log(data.setup)
        console.log(data.delivery)
        createdJoke(data)
    } catch (e) {
        console.log(e)
    }
}

function createdJoke(d) {
    if (d.type === "single") {
        document.getElementById("jokeDisplay").innerHTML = d.joke;
    } else {
        document.getElementById("setupDisplay").innerHTML = d.setup;
        document.getElementById("deliveryDisplay").innerHTML = d.delivery;
    }
}