document.getElementById('login-submit').addEventListener('click', function () {
    // email filed
    const emailFiled = document.getElementById('email-filed');
    const userEmail = emailFiled.value;
    // password filed
    const passwordFiled = document.getElementById('password-filed')
    const userPassword = passwordFiled.value;
    // redirect to another page 
    // check email and password
    if ((userEmail == 'sm@bank.com') && (userPassword == 'secret')) {
        window.location.href = 'banking.html'
    }

})