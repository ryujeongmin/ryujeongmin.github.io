
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  // Scroll Animations (AOS replacement)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });

  // Header Scroll Effect
  const header = document.querySelector('.th-layout-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Typing Effect
  const text = "Jeongmin Ryu.";
  const typingElement = document.getElementById("typing-text");
  const typeSpeed = 100; // ms
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      typingElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, typeSpeed);
    }
  }

  // Start typing after a short delay
  if (typingElement) {
    setTimeout(type, 500);
  }

  // Native Smooth Scroll for Anchor Links (fixes jumping)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile Menu Toggle logic
  const menuBtn = document.querySelector('.btn-momenu');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      let fullMenu = document.querySelector('.header-fullmenu');

      // Dynamic injection if not present (since we refactored pages without it)
      if (!fullMenu) {
        fullMenu = document.createElement('div');
        fullMenu.className = 'header-fullmenu';
        fullMenu.innerHTML = `
          <div class="fullmenu-wrapper">
            <ul class="fullmenu-gnblist">
              <li class="fullmenu-gnbitem">
                <a class="fullmenu-gnblink" href="./about.html">ABOUT</a>
              </li>
              <li class="fullmenu-gnbitem">
                <a class="fullmenu-gnblink" href="./index.html#PkM75YP0Bf">PROJECTS</a>
              </li>
              <li class="fullmenu-gnbitem">
                <a class="fullmenu-gnblink" href="./ai_projects.html">PROJECT WITH AI</a>
              </li>
            </ul>
          </div>
          <button class="fullmenu-close" aria-label="Close Menu"></button>
        `;
        document.body.appendChild(fullMenu);

        // Add close event listener to the newly created button
        const closeBtn = fullMenu.querySelector('.fullmenu-close');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            fullMenu.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
          });
        }

        // Close on link click
        const links = fullMenu.querySelectorAll('.fullmenu-gnblink');
        links.forEach(link => {
          link.addEventListener('click', () => {
            fullMenu.classList.remove('active');
            document.body.style.overflow = '';
          });
        });
      }

      // Toggle active state
      // Small delay to allow DOM paint if just created
      requestAnimationFrame(() => {
        fullMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      });
    });
  }

  // Generate Blurred Backgrounds for Feature Images (Zig-Zag Layout)
  const featureImages = document.querySelectorAll('.feature-media img');
  featureImages.forEach(img => {
    // Create the blur background element
    const blurBg = document.createElement('div');
    blurBg.className = 'media-bg-blur';
    blurBg.style.backgroundImage = `url('${img.src}')`;

    // Insert it before the image (z-index in CSS handles stacking)
    const parent = img.parentElement;
    if (parent) {
      parent.insertBefore(blurBg, img);
    }
  });

});
