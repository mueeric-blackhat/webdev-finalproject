let liked = false;
let likeCount = 0;

function likePost() {
  const btn = document.querySelector('.like-button');
  const countSpan = document.getElementById('like-count');
  if (!liked) {
    likeCount++;
    btn.classList.add('liked');
    liked = true;
  } else {
    likeCount--;
    btn.classList.remove('liked');
    liked = false;
  }
  countSpan.textContent = likeCount;
}

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Optional: Close modal when clicking outside modal-content
window.onclick = function(event) {
  document.querySelectorAll('.modal').forEach(function(modal) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};
