const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const nextButton = document.querySelector('#next-button');
const checkButton = document.querySelector('#check-button');
const errorText = document.querySelector('#error-text');
const cashDisplayArray = document.querySelectorAll('.notes');
const cashGivenSection = document.querySelector('.cashGiven');
const tableSection = document.querySelector('.change-table');
hideCashGivenAndTable()

nextButton.addEventListener('click', () => {
    if (+billAmount.value > 0) {
        errorText.style.display = 'none'
        showCashGivenSection();
        checkButton.addEventListener('click', () => {
            if (+cashGiven.value > 0) {
                if (+cashGiven.value >= +billAmount.value) {
                    const amountToBeReturn = cashGiven.value - billAmount.value;
                    calculateChange(amountToBeReturn);
                    showTable();
                } else {
                    showErrorMessage("Given Amount can't be less than Bill Amount.");
                }
            } else {
                showErrorMessage('Invalid Cash Amount');
                tableSection.style.display = 'none';
            }
        })
    } else {
        /* when cash section cash is given and bill amount is not having appropiate */
        hideCashGivenAndTable();
        showErrorMessage("Put a Valid Input !! ")
    }
})


function calculateChange(remainingBalance) {
    let cashArray = [2000, 500, 100, 20, 10, 5, 1];
    for (let i = 0; i < cashArray.length; i++) {
        const quocent = Math.trunc(remainingBalance / cashArray[i])
        cashDisplayArray[i].innerText = quocent;
        remainingBalance = remainingBalance % cashArray[i]
        console.log(remainingBalance)
    }
}


function showErrorMessage(msgText) {
    errorText.style.display = 'block'
    errorText.innerHTML = msgText;
}

function showCashGivenSection() {
    cashGivenSection.style.display = 'block'
}

function hideCashGivenAndTable() {
    cashGiven.value = "";
    cashGivenSection.style.display = 'none'
    tableSection.style.display = 'none'
}
function showTable() {
    tableSection.style.display = 'block'
}

