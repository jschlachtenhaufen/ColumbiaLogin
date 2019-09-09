chrome.storage.sync.get(['canvasUNI', 'canvasPassword', 'pause'], function(data) {
    if (data.pause || isError())
        return;

    username = data.canvasUNI
    password = data.canvasPassword;

    let userInputIds = ['username', 'txtLoginUsername'];
    let passwordInputIds = ['password', 'txtLoginPassword'];
    let userInput, passwordInput;

    for (let i=0; i<userInputIds.length; i++) {
        userInput = document.getElementById(userInputIds[i]);
        if (userInput) {
            userInput.value = username;
            break;
        }
    }

    for (let i=0; i<passwordInputIds.length; i++) {
        passwordInput = document.getElementById(passwordInputIds[i]);
        if (passwordInput) {
            passwordInput.value = password;
            break;
        }
    }

    if ((userInput && userInput.value) || (passwordInput && passwordInput.value)) {
        if (window.location.hostname === "candidate.gradleaders.com") {
            let button = document.getElementById('ctl00_ContentPlaceHolder2_btnlogin');
            button.click();
        } else {
            let form = document.getElementsByTagName('FORM')[0];
            document.createElement('form').submit.call(form);
        }
    }
});

function isError() {
    let badIds = ['usernameError', 'passwordError', 'msg']
    for (let i=0; i<badIds.length; i++)
        if (document.getElementById(badIds[i]))
            return true;
    return false;
}
