function appendImageELem(keyword, index) {
    const imgElem = document.createElement('img');
    imgElem.src= `https://source.unspash.com/400x225/?${keyword}&sig${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}

function run() {

}

run();