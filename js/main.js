console.log("Portfolio loaded!");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

let lastScrollY = 0;

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('close-btn');

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
    lastScrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    history.pushState({ lightbox: true }, '', '#view');
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    window.scrollTo(0, lastScrollY);
  }

  document.querySelectorAll('.gallery').forEach(gallery => {
    gallery.addEventListener('click', function(e) {
      if (e.target.tagName === 'IMG') {
        openLightbox(e.target.src);
      }
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });

  window.addEventListener('popstate', function(e) {
    if (lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
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
