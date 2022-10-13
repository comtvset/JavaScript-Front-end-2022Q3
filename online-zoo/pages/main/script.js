let imgBlock = document.querySelectorAll('.random-img');


let imgArray = [
"url('../../../online-zoo/assets/images/two-toed_sloth.jpg')",
"url('../../../online-zoo/assets/images/cheetahs.jpg')",
"url('../../../online-zoo/assets/images/eagles.jpg')",
"url('../../../online-zoo/assets/images/gnawer.jpg')",
"url('../../../online-zoo/assets/images/hamster.jpg')",
"url('../../../online-zoo/assets/images/gorillas.jpg')",
"url('../../../online-zoo/assets/images/hippo.jpg')",
"url('../../../online-zoo/assets/images/panda.jpg')",
"url('../../../online-zoo/assets/images/penguins.jpg')",
"url('../../../online-zoo/assets/images/rodents.jpg')",
"url('../../../online-zoo/assets/images/squirrel.jpg')",
"url('../../../online-zoo/assets/images/meerkat.jpg')",
"url('../../../online-zoo/assets/images/monkey.jpg')",
"url('../../../online-zoo/assets/images/tiger.jpg')",
"url('../../../online-zoo/assets/images/wild_cat.jpg')",
"url('../../../online-zoo/assets/images/monkey2.jpg')",
"url('../../../online-zoo/assets/images/elephant.jpg')",
"url('../../../online-zoo/assets/images/red_panda.jpg')",
"url('../../../online-zoo/assets/images/camel.jpg')",
]

let userArr = [
    'Michael John',
    'Oskar Samborsky',
    'Fredericka Michelin',
    'Mila Riksha',
    'Alex Soras',
    'Paweł Nowak',
    'Otto Stein',
    'Dzmitry Yankovskiy',
    'Miroslawa Brick',
    'Agniezka Pawlak',
    'William Buckley',
]


let items = document.querySelectorAll('.pets-collection');
let currentItem = 0;
let isEnabled = true;
let pets = document.querySelectorAll('.pets_card');

// POPUP
let popupBg = document.querySelector('.popup_bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');
let copyClass = document.querySelector('.gradient-block-test');



openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.gradient-block-test_popup').innerHTML = e.currentTarget.innerHTML;
        popupBg.classList.add('active');
        popup.classList.add('active');
        document.body.style.overflowY = "hidden";
    })

})

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    document.body.style.overflow = "auto";
});






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
    setTimeout(() => {random()}, 500);

});


document.querySelector('.right-btn').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
    setTimeout(() => {random()}, 500);
});

function random () {
for (let i = 0; i < imgBlock.length; i++){
    let randimage = imgArray[Math.ceil(Math.random() * imgArray.length)];
    imgBlock[i].style.backgroundImage = randimage;
    };
}



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


const fbMenu = document.querySelector('.fbmenu');
const boxMenu = document.querySelector('.menu__box');
const logo = document.querySelector('.logo');
const main = document.querySelector('.main');
const introOp = document.querySelector('.intro');
const imgOp = document.querySelector('.img-puppy');
const aboutOp = document.querySelector('.wrapper_about-1');

if (fbMenu) {
    // const boxMenu = document.querySelector('.menu__box');
    fbMenu.addEventListener('click', activeBurger);
    boxMenu.addEventListener('click', deactiveBurger);

}
const about = document.getElementById('menu');
logo.addEventListener('click', deactiveBurger);
main.addEventListener('click', deactiveBurger);

// about.addEventListener('click', function() {
//     boxMenu.classList.remove('_active')
// });

function activeBurger() {
    document.body.classList.toggle('_lock');
    fbMenu.classList.toggle('_active');
    boxMenu.classList.toggle('_active');
    document.body.classList.toggle('_active');
    // logo.classList.toggle('_active');
    introOp.classList.toggle('_active');
    imgOp.classList.toggle('_active');
    aboutOp.classList.toggle('_active');
}

function deactiveBurger() {
    document.body.classList.remove('_lock');
    boxMenu.classList.remove('_active');
    fbMenu.classList.remove('_active');
    document.body.classList.remove('_active');
    // logo.classList.remove('_active');
    introOp.classList.remove('_active');
    imgOp.classList.remove('_active');
    aboutOp.classList.remove('_active');
}


