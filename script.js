/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
const RPS_LOOKUP = {
    r: { img: 'https://i.postimg.cc/25mHxSWW/lapis.png', beats: 's' },
    p: { img: 'https://i.postimg.cc/cJmFkG7b/papyrus.png', beats: 'r' },
    s: { img: 'https://i.postimg.cc/WzDS4DBB/scalpellus.png', beats: 'p' },

}
/*----- app's state (variables) -----*/
let scores; // Object
let results;
let winner;


/*----- cached element references -----*/
const pResultEl = document.getElementById('p-result');
const cResultEl = document.getElementById('c-result')
const countdownEl = document.getElementById('countdown')

/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleChoice);

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

//in response to user interaction (player makes a move),
//we update all imacted state, then finally, call render
function handleChoice(e) {
    //Guards (do nothing unless one of the three buttons were clicked)
    if (e.target.tagName !== 'BUTTON') return;
    console.log(e.target.tagName)
    //Player has made a choice 
    results.p = e.target.innerText.toLowerCase();
    //Compute a random choice for the computer
    results.c = getRandomRPS();
    winner = getWinner();
    scores[winner] += 1;
    render()
}

function getWinner() {
    if (results.p === results.c) return 't';
    return RPS_LOOKUP[results.p].beats === results.c ? 'p' : 'c';
}

function getRandomRPS() {
    const rps = Object.keys(RPS_LOOKUP);
    const rndIdx = Math.floor(Math.random() * rps.length);
    return rps[rndIdx]
}

function renderScores() {
    for (let key in scores) {
        const scoreEl = document.getElementById(`${key}-score`)
        scoreEl.innerHTML = scores[key];
    }


}

function renderResults() {
    pResultEl.src = RPS_LOOKUP[results.p].img;
    cResultEl.src = RPS_LOOKUP[results.c].img;

}


// Transfer/visualize all state to the DOM
function render() {
    renderCountdown(function () {
        renderScores()
        renderResults()
    })

}

function renderCountdown(cb) {
    let count = 3;
    AUDIO.currentTime = 0;
    AUDIO.play();
    countdownEl.style.visibility = 'visible';
    countdownEl.innerText = count;
    const timerId = setInterval(function () {
        count--;
        if (count) {
            countdownEl.innerText = count;
        } else {
            clearInterval(timerId)
            countdownEl.style.visibility = 'hidden'
            cb();
        }
    }, 1000)

}