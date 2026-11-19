import './style.css';

// Unregister any stale service workers or caches from previous ports
if (typeof window !== 'undefined') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(regs => {
      for (const r of regs) r.unregister();
    });
  }
  if ('caches' in window) {
    caches.keys().then(names => {
      for (const n of names) caches.delete(n);
    });
  }
}

/* ==========================================================================
   SANKĀRA Highlands Retreat — Interactive Logic
   ========================================================================== */



document.addEventListener('DOMContentLoaded', () => {
  // Set dynamic copyright year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Toast feedback helper
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Copy phone number interaction (Section F.3)
  const copyBtn = document.getElementById('btn-copy-phone');
  const copyLabel = document.getElementById('copy-label');
  const phoneText = "+94 77 758 5872";

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const originalText = copyLabel ? copyLabel.textContent : 'Copy Number';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(phoneText);
        } else {
          throw new Error('Clipboard API unavailable');
        }
      } catch (err) {
        // Robust fallback for older browsers or non-secure contexts
        const textarea = document.createElement('textarea');
        textarea.value = phoneText;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      // Button text changes to "COPIED ✓" for 2 seconds per Section F.3
      if (copyLabel) copyLabel.textContent = 'COPIED ✓';
      copyBtn.classList.add('copied');
      showToast('Phone number copied: ' + phoneText);

      setTimeout(() => {
        if (copyLabel) copyLabel.textContent = originalText;
        copyBtn.classList.remove('copied');
      }, 2000);
    });
  }



  // Navbar subtle transparent frosted glass effect on scroll
  const header = document.querySelector('.simple-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Smooth scroll offset adjustment for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Gallery Lightbox Modal
  const galleryCardBtns = document.querySelectorAll('.gallery-card-btn');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  const galleryItems = [
    {
      webp: '/gal/gallery-1-1200.webp',
      jpg: '/gal/gallery-1-1200.jpg',
      alt: 'SANKĀRA hotel suite photograph 1'
    },
    {
      webp: '/gal/gallery-2-1200.webp',
      jpg: '/gal/gallery-2-1200.jpg',
      alt: 'SANKĀRA hotel suite photograph 2'
    },
    {
      webp: '/gal/gallery-3-1200.webp',
      jpg: '/gal/gallery-3-1200.jpg',
      alt: 'SANKĀRA hotel suite photograph 3'
    },
    {
      webp: '/gal/gallery-4-1200.webp',
      jpg: '/gal/gallery-4-1200.jpg',
      alt: 'SANKĀRA hotel suite photograph 4'
    }
  ];

  let currentGalleryIndex = 0;
  let lastFocusedElement = null;

  function setLightboxItem(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentGalleryIndex = index;

    const item = galleryItems[currentGalleryIndex];
    if (lightboxImg) {
      lightboxImg.src = item.webp;
      lightboxImg.alt = item.alt;
    }
    if (lightboxCounter) lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryItems.length}`;
  }

  function openLightboxModal(index) {
    lastFocusedElement = document.activeElement;
    setLightboxItem(index);
    if (lightbox) {
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    }
  }

  function closeLightboxModal() {
    if (lightbox) {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }
  }

  if (galleryCardBtns.length && lightbox) {
    galleryCardBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => openLightboxModal(idx));
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightboxModal);
    }

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        setLightboxItem(currentGalleryIndex - 1);
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        setLightboxItem(currentGalleryIndex + 1);
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop-click')) {
        closeLightboxModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') {
        closeLightboxModal();
      } else if (e.key === 'ArrowLeft') {
        setLightboxItem(currentGalleryIndex - 1);
      } else if (e.key === 'ArrowRight') {
        setLightboxItem(currentGalleryIndex + 1);
      }
    });
  }
});
