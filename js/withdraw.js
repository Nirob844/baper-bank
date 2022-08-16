document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previusWithdrawTotalString = withdrawTotalElement.innerText;
    const previusWithdrawTotal = parseFloat(previusWithdrawTotalString);

    const currentWithdrawTotal = newWithdrawAmmount + previusWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previusBalanceTotalString);

    const currentBlance = previousbalanceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = currentBlance;


    withdrawField.value = '';
})