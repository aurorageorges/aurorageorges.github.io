// Simple modal code for Aurora Georges' Portfolio site
// By Trym Sneltvedt

var modal = document.createElement('div');
modal.id = 'portfolio-modal';

var note = document.createElement('div');
note.id = 'portfolio-modal-note';
note.innerText = 'Click/tap anywhere to close';

var image = document.createElement('div');
image.id = 'portfolio-modal-image';

modal.appendChild(note);
modal.appendChild(image);
document.body.appendChild(modal);

function showModal(caller) {
  modal.style.display = 'flex';
  image.style.backgroundImage = "url(" + caller.src + ")";
}

function hideModal() {
  modal.style['display'] = 'none';
}

modal.addEventListener('click', hideModal);
