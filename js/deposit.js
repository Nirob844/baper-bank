// diposit balance
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    const depositTotalElement = document.getElementById('deposit-total');
    const previusDepositTotalString = depositTotalElement.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString);

    const currentDepositTotal = newDepositAmmount + previusDepositTotal;
    depositTotalElement.innerText = currentDepositTotal;

    // total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previusBalanceTotalString);

    const currentBlance = previousbalanceTotal + newDepositAmmount;
    balanceTotalElement.innerText = currentBlance;


    depositField.value = '';
})