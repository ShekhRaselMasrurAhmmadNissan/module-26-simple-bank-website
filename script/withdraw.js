const withdrawBtn = document.getElementById('btn-withdraw');
withdrawBtn.addEventListener('click', (event) => {
	const withdrawField = document.getElementById('withdraw-field');
	const withdrawAmount = parseFloat(withdrawField.value);

	const withdrawTotalElement = document.getElementById('withdraw-total');
	const totalBalanceElement = document.getElementById('total-balance');

	let totalBalance = parseFloat(totalBalanceElement.innerText);
	let withdrawTotalAmount = parseFloat(withdrawTotalElement.innerText);
	let currentWithdrawTotal = (withdrawAmount + withdrawTotalAmount).toFixed(
		2
	);
	let currentTotalAmount = (totalBalance - withdrawAmount).toFixed(2);
	if (parseFloat(currentTotalAmount) < 0) {
		alert('You Can not withdraw more than your current value');
		withdrawField.value = '';
		return;
	}
	withdrawTotalElement.innerText = parseFloat(currentWithdrawTotal);
	totalBalanceElement.innerText = parseFloat(currentTotalAmount);
	withdrawField.value = '';
});
