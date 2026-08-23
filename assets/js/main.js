// ============================================================
// Utkarsh Mishra — Research Portfolio
// Vanilla JS: mobile nav, scroll reveals, multi-photo galleries
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initReveal();
  initGalleries();
  document.querySelector(".site-footer #year").textContent = new Date().getFullYear();
});

/* ---- Mobile nav toggle ---- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---- Scroll reveal ---- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---- Reusable multi-photo gallery ----
   Markup expected per gallery:
   <div class="gallery" data-gallery>
     <div class="gallery-track">
       <img src="..."> <img src="..."> <img src="...">
     </div>
     <button class="gallery-btn gallery-prev">‹</button>
     <button class="gallery-btn gallery-next">›</button>
     <div class="gallery-dots"></div>
   </div>
   Add or remove <img> tags freely — dots and buttons build themselves.
*/
function initGalleries() {
  document.querySelectorAll("[data-gallery]").forEach((gallery) => {
    const track = gallery.querySelector(".gallery-track");
    const slides = Array.from(track.children);
    const dotsWrap = gallery.querySelector(".gallery-dots");
    const prevBtn = gallery.querySelector(".gallery-prev");
    const nextBtn = gallery.querySelector(".gallery-next");
    let index = 0;

    // Hide controls entirely if there's only one photo
    if (slides.length <= 1) {
      if (prevBtn) prevBtn.style.display = "none";
      if (nextBtn) nextBtn.style.display = "none";
      return;
    }

    // Build dots
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "gallery-dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("aria-label", `Show photo ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dotsWrap.querySelectorAll(".gallery-dot").forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
      });
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      update();
    }

    prevBtn.addEventListener("click", () => goTo(index - 1));
    nextBtn.addEventListener("click", () => goTo(index + 1));

    // Touch swipe support
    let startX = 0;
    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
      const delta = e.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 40) {
        delta < 0 ? goTo(index + 1) : goTo(index - 1);
      }
    });
  });
}
