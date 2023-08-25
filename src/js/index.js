const boardImage = document.querySelectorAll('.board-image')
const goArrow = document.getElementById('button-go')
const backArrow = document.getElementById('button-back')
let currentImage = 0

goArrow.addEventListener('click', function () {
    const allImages = boardImage.length - 1;
    if(currentImage === allImages) {
        return;
    }
    
    currentImage++;
    boardImage.forEach(image => {
        image.classList.remove('active')
    });

    boardImage[currentImage].classList.add('active');
});

backArrow.addEventListener('click', function () {
    if(currentImage === 0) {
        return;
    };
    currentImage--;

    boardImage.forEach(image => {
        image.classList.remove('active')
    });

    boardImage[currentImage].classList.add('active');
})