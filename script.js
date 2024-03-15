const options = ['lapis', 'papyrus', 'scalpellus'];

let player = {
    choice: ''
}

let computer = {
    choice: ''
}

function computerChoose() {
    const randomIndex = Math.floor(Math.random() * options.length);
    const cc = computer.choice = options[randomIndex]
    console.log("computer:", cc);
    if (cc === 'lapis') {
        document.querySelector('#image_second').src = `https://i.postimg.cc/25mHxSWW/lapis.png`
    } else if (cc == 'papyrus') {
        document.querySelector('#image_second').src = `https://i.postimg.cc/cJmFkG7b/papyrus.png`
    } else {
        document.querySelector('#image_second').src = `https://i.postimg.cc/WzDS4DBB/scalpellus.png`
    }

    return cc
}


function compareChoices() {
    computerChoose()
    ///TIE///
    if (computer.choice === player.choice) {
        resultUpdate(`It's a TIE! 🫣 computer chose ${computer.choice} and the player chose ${player.choice}`)
        document.querySelector("#result").innerText = "It's a TIE 🫣 "
    }
    ///OPTION 1///
    else if (computer.choice === options[0]) {
        if (player.choice === options[1]) {
            console.log(`The PLAYER wins 🥳! 
            The computer chose ${computer.choice} and the player chose ${player.choice}.`)
            document.querySelector("#result").innerText = "You won 🎉"
        } else {
            resultUpdate(`The COMPUTER wins 🎉! 
            The computer chose ${computer.choice} and the player chose ${player.choice}.`);
            document.querySelector("#result").innerText = "Computer won 😭"
        }
    }
    //OPTION 2///
    else if (computer.choice === options[1]) {
        if (player.choice === options[0]) {
            resultUpdate(`The COMPUTER wins 🎉! 
            The computer chose ${computer.choice} and the player chose ${player.choice}.`);
            document.querySelector("#result").innerText = "Computer won 😭"
        }
        else {
            resultUpdate(`The PLAYER wins 🥳! 
            The computer chose ${computer.choice} and the player chose ${player.choice}.`)
            document.querySelector("#result").innerText = "You won 🎉"
        }
    }
    //OPTION 3//
    else if (computer.choice === options[2]) {
        if (player.choice === options[0]) {
            resultUpdate(`The PLAYER wins 🥳! 
            The computer chose ${computer.choice} and the player chose ${player.choice}.`)
            document.querySelector("#result").innerText = "You won"
        }
        else {
            resultUpdate(`The COMPUTER wins 🎉! 
            The computer chose ${computer.choice} and the player chose ${player.choice}.`);
            document.querySelector("#result").innerText = "Computer won"
        }
    }
}

function resultUpdate(result) {
    const resultText = document.createElement('h2');
    resultText.innerText = result
    document.body.appendChild(resultText);
    resultText.style.textAlign = 'center'
    resultText.style.margin = '30px'
}


document.querySelector('#button1').addEventListener('click', () => {
    player.choice = options[0];
    document.querySelector('#image_first').src = `https://i.postimg.cc/25mHxSWW/lapis.png`
    compareChoices();
})



document.querySelector('#button2').addEventListener('click', () => {
    player.choice = options[1]
    document.querySelector('#image_first').src = `https://i.postimg.cc/cJmFkG7b/papyrus.png`
    compareChoices();
})

document.querySelector('#button3').addEventListener('click', () => {
    player.choice = options[2]
    document.querySelector('#image_first').src = `https://i.postimg.cc/WzDS4DBB/scalpellus.png`
    compareChoices();
})

function showChoice(choice) {
    console.log('Lapis');
    console.log(document.querySelector('#image_first').src);
    document.querySelector('#image_first').src = choice
}