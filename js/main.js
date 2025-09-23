console.log("Portfolio loaded!");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});






document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const closeBtn = document.querySelector('.close');
  const backBtn = document.getElementById('modalBackBtn'); 
  const previewBtns = document.querySelectorAll('.preview-btn');

  previewBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const imgSrc = this.getAttribute('data-img');
      const title = this.getAttribute('data-title') || 'Project Preview';
      const desc = this.getAttribute('data-desc') || 'No description available.';

      modalImg.src = imgSrc;
      modalImg.alt = title;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;

      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.add('fade-out');
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('fade-out');
      document.body.style.overflow = '';
    }, 300);
  }

  closeBtn.addEventListener('click', closeModal);
  backBtn.addEventListener('click', closeModal); 
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'block') closeModal();
  });
});