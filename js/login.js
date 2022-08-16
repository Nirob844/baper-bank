document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordsField = document.getElementById('user-password');
    const password = passwordsField.value;
    if (email === 'sontan@bapp.com' && password === 'baperBank') {
        window.location.href = 'bank.html';
    }
    else { alert('tui password vul disot thik kore de na hole muri kha'); }

})