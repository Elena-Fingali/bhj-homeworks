const modalMain = document.getElementById('modal_main');
const modalClose = Array.from(document.getElementsByClassName('modal__close'));
const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');


modalMain.classList.add('modal_active');

modalClose.forEach(item => item.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
});

showSuccess.onclick = function() {
    modalSuccess.classList.add('modal_active');
};


