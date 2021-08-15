// diposit
document.getElementById('deposit-button').addEventListener('click', function () {

    // get the diposit amount
    const dipositInput = document.getElementById('deposit-input')
    const dipositAmountText = dipositInput.value;
    const newDipoistAmount = parseFloat(dipositAmountText);
    // set the diposit amount
    const previousDipositTotal = document.getElementById('diposit-total');
    const dipositPreviousText = previousDipositTotal.innerText;
    const dipositPreviousAmount = parseFloat(dipositPreviousText)

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
});

// withdraw 

document.getElementById('withdraw-button').addEventListener('click', function () {
    // get the withdraw amount  
    const previousWithdrawBalance = document.getElementById('withdraw-total')
    const previousWithdrawText = previousWithdrawBalance.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    // set the withdraw amount 
    const newWithdrawBalance = document.getElementById('withdraw-input');
    const newWithdrawText = newWithdrawBalance.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    // update the withdraw amount 

    const totlaWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    previousWithdrawBalance.innerText = totlaWithdrawAmount;

    // get the  account balance 

    const previousAccountBalance = document.getElementById('account-balance');
    const previousBalanceText = previousAccountBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    // reduce account balance

    const newAccountBalance = previousBalanceAmount - newWithdrawAmount;
    previousAccountBalance.innerText = newAccountBalance;

    // clear the input filed 
    newWithdrawBalance.value = '';
})