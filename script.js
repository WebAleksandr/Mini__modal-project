"use strict";

const modalBtn = document.querySelector('[data-modal]'),
   modal = document.querySelector('.modal'),
   modalDialog = document.querySelector('.modal__dialog'),
   modalClose = document.querySelector('[data-close]');

function openModal() {
   modal.classList.add('show');
   modal.classList.remove('hide');
}

function closeModal() {
   modal.classList.remove('show');
   modal.classList.add('hide');
}

modalBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);


document.addEventListener('keydown', (e) => {
   if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
   }
});
modal.addEventListener('click', (e) => {
   if (e.target === modalDialog) {
      closeModal();
   }
});

