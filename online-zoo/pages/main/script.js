let items = document.querySelectorAll('.pets-collection');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active_pet', direction)
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active_pet');
        isEnabled = true;
    });
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.left-btn').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
});


document.querySelector('.right-btn').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
});




// let offset = 0;
// const petsContainer = document.querySelector('.slider-line');

// document.querySelector('.slider').addEventListener('click', function() {
//     offset = offset + 298;
//     if(offset > 2300) {
//         offset = 0
//     }
//     petsContainer.style.left = -offset + 'px';
// });

let range = document.querySelector('.slider');
let block = document.querySelector('.slider-line');
let sliderComment = document.querySelector('.slider-comment');
range.oninput = function () {
    if(sliderComment.offsetWidth == 940) {
        block.style.right = this.value *321 + 'px';
        console.log(sliderComment.offsetWidth)
    }
    else {block.style.right = this.value *295.5 + 'px'};
}
