/**
 * Taking elements as variable
 */
const submitBtn = document.getElementById('btn-submit');
const emailField = document.getElementById('user-email');
const passwordField = document.getElementById('user-password');
// console.log(event.target);
// console.log(emailValue);
// console.log(passwordValue);

/**
 * Adding the functionality
 */
submitBtn.addEventListener('click', (event) => {
	let emailValue = emailField.value;
	let passwordValue = passwordField.value;
	if (emailValue === 'sontan@baap.com' && passwordValue === 'secret') {
		// console.log('Valid User');
		// console.log(emailValue);
		// console.log(passwordValue);
		window.location.href = 'bank.html';
	} else {
		// console.log('Invalid User');
		// console.log(emailValue);
		// console.log(passwordValue);
		emailField.value = '';
		passwordField.value = '';
		alert('Invalid information!!');
	}
});
