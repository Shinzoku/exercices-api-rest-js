// 
async function randomImg() {
    try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
        const data = await response.json()
        insertPicture(data.message)
    } catch (e) {
        console.log(e);
    }

}

// insert a rnd img in dom
function insertPicture(url) {
    document.getElementById('displayDog').innerHTML = `<img src="${url}" alt="image de chien" />`;
}

randomImg()