


document.addEventListener("DOMContentLoaded", function (event) {


    //Selectors
    const buttonEl = document.querySelector('#roll');
    const dice = document.querySelector('.dice');
    const rollHistory = document.querySelector(".dice-history")


    //EventListeners
    buttonEl.addEventListener('click', diceRoll);


    let historyList = [];

    function rolledDice() {
        let rollResult = Math.floor(Math.random() * 6) + 1;
        //creates a random number between 1 and 6, the 
        //Math.random() * 6 will generate a random number from 0 to 5 
        //and 1 will be added to it.
        let diceFace = getDiceFace(rollResult);
        dice.innerHTML = diceFace;
        historyList.push(rollResult);
        updateRollHistory();
    }

    function updateRollHistory() {
        rollHistory.innerHTML = "";

        for (let i = 0; i < historyList.length; i++) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`
            rollHistory.appendChild(listItem);

        }
    }

    function getDiceFace(rollResult) {
        switch (rollResult) {
            // Unicode is used to get the dice face number
            case 1:
                return "&#9856;"
                break;
            case 2:
                return "&#9857;";
                break;
            case 3:
                return "&#9858;";
                break;
            case 4:
                return "&#9859;";
                break;
            case 5:
                return "&#9860;"
                break;
            case 6:
                return "&#9861;";
                break;

            default:
                return "";
                break;
        }
    }

    function diceRoll() {
        dice.classList.add("roll-animation");
        setTimeout(() => {
            dice.classList.remove("roll-animation");
            rolledDice()
        }, 1000);
    }
})
