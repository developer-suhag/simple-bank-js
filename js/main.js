// diposit
document.getElementById('deposit-button').addEventListener('click', function () {
    // set the diposit amount
    const previousDipositTotal = document.getElementById('diposit-total');
    const dipositPreviousText = previousDipositTotal.innerText;
    const dipositPreviousAmount = parseFloat(dipositPreviousText)

    // get the diposit amount
    const dipositInput = document.getElementById('deposit-input')
    const dipositAmountText = dipositInput.value;
    const newDipoistAmount = parseFloat(dipositAmountText);

    // update diposit amount 

    const totalDipositAmount = dipositPreviousAmount + newDipoistAmount;

    previousDipositTotal.innerText = totalDipositAmount;

    // update account balance 

    const previousAccountBalance = document.getElementById('account-balance');
    const previousBalanceText = previousAccountBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    // add deposit and balance 

    const totalBalance = previousBalanceAmount + newDipoistAmount;

    previousAccountBalance.innerText = totalBalance;

    // clear the diposit input after submit
    dipositInput.value = '';
})