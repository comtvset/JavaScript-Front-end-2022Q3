const body = document.querySelector('body');
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');


//BODY
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);


body.className = 'body';
main.className = 'main';
footer.className = 'footer';

//HEADER
header.className = 'header';
const headerContainer = document.createElement('div');
header.appendChild(headerContainer);
headerContainer.className = 'header-container';

const logoContainer = document.createElement('a');
headerContainer.appendChild(logoContainer);
logoContainer.className = 'logo-container';

const logoBird = document.createElement('img');
logoContainer.appendChild(logoBird);
logoBird.className = 'logo-bird';
logoBird.setAttribute('src', '/assets/icon/logo_bird_c.png');
logoBird.setAttribute('alt', 'logo');

const headerEl = document.createElement('div');
headerContainer.appendChild(headerEl);
headerEl.className = 'header-el';

const score = document.createElement('div');
score.textContent = 'score: 5';
headerEl.appendChild(score);
score.className = 'lng-score';

const round = document.createElement('div');
round.textContent = 'round: 1';
headerEl.appendChild(round);
round.className = 'lng-round';

//MAIN
main.className = 'main';
const mainContainer = document.createElement('div');
main.appendChild(mainContainer);
mainContainer.className = 'main-container';

const greetings = document.createElement('div');
mainContainer.appendChild(greetings);
greetings.className = 'greetings';

const greetingsHead = document.createElement('h1');
greetingsHead.textContent = 'Welcome!';
greetings.appendChild(greetingsHead);
greetingsHead.className = 'lng-greetings-head';

const greetingsText = document.createElement('div');
greetingsText.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eaque officiis perspiciatis pariatur, debitis cum temporibus, exercitationem tempora fugit modi, laborum ipsam provident sed. Laborum facilis non neque soluta eaque.';
greetings.appendChild(greetingsText);
greetingsText.className = 'lng-greetings-text';

const langContainer = document.createElement('div');
greetings.appendChild(langContainer);
langContainer.className = 'lang-container';

const langText = document.createElement('div');
langText.textContent = 'language';
langContainer.appendChild(langText);
langText.className = 'lng-lang-text';

const langSelect = document.createElement('select');
langContainer.appendChild(langSelect);
langSelect.className = 'lang-select';

const langOptionEN = document.createElement('option');
langSelect.appendChild(langOptionEN);
langOptionEN.setAttribute('value', 'en');
langOptionEN.textContent = 'EN'

const langOptionRU = document.createElement('option');
langSelect.appendChild(langOptionRU);
langOptionRU.setAttribute('value', 'ru');
langOptionRU.textContent = 'RU'


const playGame = document.createElement('a');
greetings.appendChild(playGame);
playGame.className = 'btn-flip';
playGame.setAttribute('data-play', 'Play');
playGame.setAttribute('data-go', 'Let\'s go');


//game
const game = document.createElement('div');
mainContainer.appendChild(game);
game.className = 'no-game';

const questionContainer = document.createElement('div');
game.appendChild(questionContainer);
questionContainer.className = 'question-container';

let player = new Player(questionContainer);



// -- choice --

const wrapperMiddle = document.createElement('div');
game.appendChild(wrapperMiddle);
wrapperMiddle.className = 'wrapper-middle';


const choiceContainer = document.createElement('div');
// choiceContainer.textContent = 'choice-container';
wrapperMiddle.appendChild(choiceContainer);
choiceContainer.className = 'choice-container';


class Choice {
    constructor(name) {
        const choiceText = document.createElement('div');
        choiceContainer.appendChild(choiceText);
        choiceText.className = 'choice-text';

        const choice = document.createElement('input');
        choiceText.appendChild(choice);
        choice.className = 'choice';
        choice.setAttribute('type', 'radio');
        choice.setAttribute('name', 'choice');

        const ch = document.createElement('span');
        this.ch;
        ch.textContent = name;
        choiceText.appendChild(ch);
        ch.className = 'ch-text';
    }
}

let ch1 = new Choice('Ворон');
let ch2 = new Choice('Журавль');
let ch3 = new Choice('Ласточка');
let ch4 = new Choice('Орел');
let ch5 = new Choice('Пингвин');
let ch6 = new Choice('Курица');


const answerContainer = document.createElement('div');
wrapperMiddle.appendChild(answerContainer);
answerContainer.className = 'answer-container';

let player2 = new Player(answerContainer);


const next = document.createElement('a');
game.appendChild(next);
next.className = 'btn-flip';
next.setAttribute('data-play', 'Next');
next.setAttribute('data-go', 'Click');


//FOOTER
footer.className = 'footer';
const footerContainer = document.createElement('div');
footer.appendChild(footerContainer);
footerContainer.className = 'footer-container';

const gitHub = document.createElement('a');
footerContainer.appendChild(gitHub);
gitHub.setAttribute('href', 'https://github.com/comtvset');
const gitIcon = document.createElement('img');
gitHub.appendChild(gitIcon);
gitIcon.className = 'footer-el';
gitIcon.classList.add('size-icon32');
gitIcon.setAttribute('src', '/assets/icon/GitHub-Mark-32px(white).png');
gitIcon.setAttribute('alt', 'github');


const school = document.createElement('a');
footerContainer.appendChild(school);
school.setAttribute('href', 'https://rs.school/js');
const schoolIcon = document.createElement('img');
school.appendChild(schoolIcon);
schoolIcon.className = 'footer-el';
schoolIcon.setAttribute('src', '/assets/icon/rs_school_js.png');
schoolIcon.setAttribute('alt', 'rs_school');

const intro = document.createElement('div');
body.appendChild(intro);
intro.className = 'intro';


//language
const allLang = ['en', 'ru'];

langSelect.addEventListener('change', changeURLLang);
function changeURLLang() {
    let lang = langSelect.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLang() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    langSelect.value = hash;

    for(let key in translate) {
        document.querySelector('.lng-' + key).textContent = translate[key][hash];
    }
}

changeLang();


// next.addEventListener('click', () => {
//     header.classList.add('no-greetings');
//     main.classList.add('no-greetings');
//     footer.classList.add('no-greetings');

// });


playGame.addEventListener('click', () => {
    greetings.classList.add('no-greetings');
    game.classList.add('game');
});




