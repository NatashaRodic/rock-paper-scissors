/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
const RPS_LOOKUP = {
    r: 'https://i.postimg.cc/25mHxSWW/lapis.png',
    p: 'https://i.postimg.cc/cJmFkG7b/papyrus.png',
    s: 'https://i.postimg.cc/WzDS4DBB/scalpellus.png',

}
/*----- app's state (variables) -----*/
let scores; // Object
let results;
let winner;


/*----- cached element references -----*/
const pResultEl = document.getElementById('p-result');
const cResultEl = document.getElementById('c-result')

/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
    scores = {
        p: 0,
        t: 0,
        c: 0
    };
    results = {
        p: 'r',
        c: 'r'
    };
    winner = 't';
    render();
}

function renderScores() {
    for (let key in scores) {
        const scoreEl = document.getElementById(`${key}-score`)
        scoreEl.innerHTML = scores[key];
    }


}

function renderResults() {

}

function render() {
    renderScores()
    renderResults()
}