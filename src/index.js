console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function dogImages() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => data.message.forEach(image => appendImage(image)))
}
console.log(dogImages())

// document.getElementById("dog-image-container")
function appendImage(imageUrl) {
    let imageC = document.getElementById("dog-image-container")
    let newElement = document.createElement("img")
    newElement.src = imageUrl
    imageC.append(newElement)
}