
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")
let message = document.getElementById("message")
let isFliped = false;

function flipCard(userNumber) {
    if (!isFliped) {
        let kingNumber = Math.ceil(Math.random() * 6);
        let winningCards = [];
        if (kingNumber === 1) {
            winningCards = [1,5]
            img1.src = "./king card.png";
            img2.src = "./joker cards.png";
            img3.src = "./joker cards.png";
            img4.src = "./joker cards.png";
            img5.src = "./king card.png";
            img6.src = "./joker cards.png";
        } else if (kingNumber === 2) {
            winningCards = [2,3]
            img1.src = "./joker cards.png";
            img2.src = "./king card.png";
            img3.src = "./king card.png";
            img4.src = "./joker cards.png";
            img5.src = "./joker cards.png";
            img6.src = "./joker cards.png";
        } else if (kingNumber === 3) {
            winningCards = [4,6]
            img1.src = "./joker cards.png";
            img2.src = "./joker cards.png";
            img3.src = "./joker cards.png";
            img4.src = "./king card.png";
            img5.src = "./joker cards.png";
            img6.src = "./king card.png";
        }
        else if (kingNumber === 4) {
            winningCards = [2,6]
            img1.src = "./joker cards.png";
            img2.src = "./king card.png";
            img3.src = "./joker cards.png";
            img4.src = "./joker cards.png";
            img5.src = "./joker cards.png";
            img6.src = "./king card.png";
        }
        else if (kingNumber === 5) {
            winningCards = [1,4]
            img1.src = "./king card.png";
            img2.src = "./joker cards.png";
            img3.src = "./joker cards.png";
            img4.src = "./king card.png";
            img5.src = "./joker cards.png";
            img6.src = "./joker cards.png";
        }
        else if (kingNumber === 6) {
            winningCards = [2,5]
            img1.src = "./joker cards.png";
            img2.src = "./king card.png";
            img3.src = "./joker cards.png";
            img4.src = "./joker cards.png";
            img5.src = "./king card.png";
            img6.src = "./joker cards.png";
        }
        isFliped = true;
        if (winningCards.includes(userNumber)) {
    message.innerHTML = "You Won!";
    message.style.fontSize = "24px"
       } else {
    message.innerHTML = "You lose!";
    message.style.fontSize = "24px"
       }

    }
}

function reset() {
    img1.src = "./cards.jpeg";
    img2.src = "./cards.jpeg";
    img3.src = "./cards.jpeg";
    img4.src = "./cards.jpeg";
    img5.src = "./cards.jpeg";
    img6.src = "./cards.jpeg";
    isFliped = false;
    message.innerHTML = "try your luck"
}