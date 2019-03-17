// Simple modal code for Aurora Georges' Portfolio site
// By Trym Sneltvedt

var modal = document.createElement('div');
modal.id = 'portfolio-modal';
modal.innerText = 'Click/tap anywhere to close';
document.body.appendChild(modal);

function showModal(caller) {
  modal.style.display = 'block';
  modal.style.backgroundImage = "url(" + caller.src + ")";
}

function hideModal() {
  modal.style['display'] = 'none';
}

modal.addEventListener('click', hideModal);
