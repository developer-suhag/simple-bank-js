// diposit
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the diposit amount
    const dipositInput = document.getElementById('deposit-input')
    const dipoistAmount = dipositInput.value;
    // set the diposit amount
    const dipositCurrent = document.getElementById('diposit-total');
    dipositCurrent.innerText = dipoistAmount;
    // clear the diposit input after submit
    dipositInput.value = '';
})