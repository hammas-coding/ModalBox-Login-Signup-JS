let loginButton = document.querySelector('.login');
let signupButton = document.querySelector('.signup');

let loginCloseMark = document.querySelector('.close-mark');
let signupCloseMark = document.querySelector('.second-close-mark');

let loginBg = document.querySelector('.modal-background');
let signupBg = document.querySelector('.modal-background-second');


loginButton.addEventListener('click', function () {
    loginBg.classList.add('background-active');
});
loginCloseMark.addEventListener('click', function () {
    loginBg.classList.remove('background-active');
});

signupButton.addEventListener('click', function () {
    signupBg.classList.add('background-second-active');
});
signupCloseMark.addEventListener('click', function () {
    signupBg.classList.remove('background-second-active');
});
// document.addEventListener('click', function (event) {
//     if (event.target.matches('.close-mark') || !event.target.closest('.login-modal')) {
//         loginBg.classList.remove('background-active')
//     }
// },
// false);
