let link = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,racist,sexist,explicit,political";
let linkDiv;
let jokeDiv;

function updateLink (e)
{
	if (e.checked) {
		link = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,racist,sexist,explicit";
	} else {
		link = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,racist,sexist,explicit,political";
	}
	refreshDisplay();
}

function refreshDisplay ()
{
	linkDiv.innerHTML = link;
}

function loader ()
{
	linkDiv = document.getElementById('link');
	jokeDiv = document.getElementById('joke');
	refreshDisplay();
}

async function getJoke ()
{
	const response = await fetch(link);
	if (response.ok) {
		const json = await response.json();
		// console.log(json);
		if (json.type === "single")
		{
			jokeDiv.innerHTML = "<div class=\"single-part-joke\">" + json.joke + "</div>";
		} else {
			jokeDiv.innerHTML = "<div class=\"two-part-setup\">" + json.setup + "</div>";
			jokeDiv.innerHTML += "<div class=\"two-part-delivery\">" + json.delivery + "</div>";
		}
	}
}