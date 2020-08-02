function appendImageELem(keyword, index) {
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}

// function remove photos 
function removePhotos() {
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}

// function search Photos 
function searchPhotos(event) {
    const keyword = event.target.value;

    if (event.key === 'Enter' && keyword) {
        removePhotos() // เรีนกใช้ function removePhotos เพื่อให้โปรแกรมเคลียร์ค่าเก่าออกก่อน

        for (let i = 1; i <= 9; i++) {
            appendImageELem(keyword, i);
        }
    }
}

function run() {
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhotos)
}

run();