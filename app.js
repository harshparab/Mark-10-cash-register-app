const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button")
const message = document.querySelector(".error-message")

checkButton.addEventListener("clicked", function validateBillAmountAndCashGiven(){
    if (billAmount > 0 ){

    }else {
        MessageChannel.innerText = "The bill Amout should be greater than zero"
     }
})