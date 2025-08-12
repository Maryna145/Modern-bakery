const modal = document.querySelector('.backdrop')
const modalBtnOpen = document.querySelector(".modal-Btn-Open");
const modalBtnClose = document.querySelector(".modal-Btn-Close");

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click',toggleModal);
modalBtnClose.addEventListener("click",toggleModal);


