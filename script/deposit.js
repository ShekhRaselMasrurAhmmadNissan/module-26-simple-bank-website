const depositBtn = document.getElementById('btn-deposit');
depositBtn.addEventListener('click', (event) => {
	const depositField = document.getElementById('deposit-field');
	const depositAmount = parseFloat(depositField.value);

	const depositTotalElement = document.getElementById('deposit-total');
	const totalBalanceElement = document.getElementById('total-balance');

	let totalBalance = parseFloat(totalBalanceElement.innerText);
	let depositTotalAmount = parseFloat(depositTotalElement.innerText);
	let currentDepositTotal = (depositAmount + depositTotalAmount).toFixed(2);
	let currentTotalAmount = (depositAmount + totalBalance).toFixed(2);
	depositTotalElement.innerText = parseFloat(currentDepositTotal);
	totalBalanceElement.innerText = parseFloat(currentTotalAmount);
	depositField.value = '';
});
