const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

checkButton.addEventListener("click", function validateBillAmountAndCashGiven() {
    hideMessage()
    if (Number(billAmount.value >= 0)) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = cashGiven.value - billAmount.value
            calculateChange(amountToBeReturned)
        } else {
            showMessage("The cash given must be atleast equal to the bill amount.")
        }
    } else {
        showMessage("Invalid Bill Amount")
    }
})

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        )
            amountToBeReturned %= availableNotes[i]
            noOfNotes[i].innerHTML = numberOfNotes

    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(text) {
    message.style.display = "block"
    message.innerHTML = text
}