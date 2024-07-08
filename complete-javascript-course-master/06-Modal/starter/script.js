'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showmodal = document.querySelectorAll('.show-modal');
function openmodal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
for (let i = 0; i < showmodal.length; i++) {
  showmodal[i].addEventListener('click', openmodal);
}
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'Enter') {
    openmodal();
  }
});