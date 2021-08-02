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
    if (billAmount.value > 0) {
        displayCahGivenSection();
        checkButton.addEventListener('click', () => {
            errorText.style.display = 'none'
            // console.log(billAmount.value)
            if (billAmount.value > 0) {
                if (cashGiven.value >= billAmount.value) {
                    const amountToBeReturn = cashGiven.value - billAmount.value;
                    calculateChange(amountToBeReturn);
                    showTable()
                } else {
                    showErrorMessage("Given Amount can't be less than Bill Amount.")
                }
            } else {
                showErrorMessage('Invalid Bill Amount')
            }
        })
    } else {
        hideCashGivenSection()
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

function displayCahGivenSection() {
    cashGivenSection.style.display = 'block'
}

function hideCashGivenSection() {
    cashGivenSection.style.display = 'none'
}
function hideCashGivenAndTable() {
    cashGivenSection.style.display = 'none'
    tableSection.style.display = 'none'
}
function showTable() {
    tableSection.style.display = 'block'
}


/*
function getValue() {

    let billAmount = Number(document.getElementById('billAmount').value);
    let cashGiven = Number(document.getElementById('cashGiven').value);
    let cash = calculateValue(billAmount, cashGiven);
    let arr = ['twoThoudand', 'fiveHundred', 'oneHundred', 'fifty', 'twenty', 'ten', 'five'];
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).innerHTML = cash[i];
    }
}

function calculateValue(billAmount, cashGiven) {
    let getValue = cashGiven - billAmount;
    let val = getValue;
    console.log(val)
    let arr = [0, 0, 0, 0, 0, 0, 0]
    while (val >= 1) {

        if (val >= 2000) {
            let quo = Math.floor(val / 2000)
            arr[0] = arr[0] + quo;
            val = val % 2000
        } else if (val >= 500) {
            let quo = Math.floor(val / 500);
            arr[1] = arr[1] + quo;
            val = val % 500
        } else if (val >= 100) {
            let quo = Math.floor(val / 100);
            arr[2] = arr[2] + quo;
            val = val % 100
        } else if (val >= 20) {
            let quo = Math.floor(val / 20);
            arr[3] = arr[3] + quo;
            val = val % 20
        } else if (val >= 10) {
            let quo = Math.floor(val / 10);
            arr[4] = arr[4] + quo;
            val = val % 10
        } else if (val >= 5) {
            let quo = Math.floor(val / 5);
            arr[5] = arr[5] + quo;
            val = val % 5
        } else if (val >= 1) {
            let quo = Math.floor(val / 1);
            arr[6] = arr[6] + quo;
            val = val % 1
        }
        console.log("hello")

    }
    return arr;
}
*/