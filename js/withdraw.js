document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    withdrawField.value = '';

    if (isNaN(newWithdrawAmmount)) {
        alert('thik moto $money de')
        return
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previusWithdrawTotalString = withdrawTotalElement.innerText;
    const previusWithdrawTotal = parseFloat(previusWithdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previusBalanceTotalString);


    if (newWithdrawAmmount > previousbalanceTotal) {
        alert('baper bank e r taka nai')
        return
    }
    const currentWithdrawTotal = newWithdrawAmmount + previusWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBlance = previousbalanceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = currentBlance;

})