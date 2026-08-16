// Rizka Septia Prabu — Portfolio interactions

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const backTop = document.getElementById("backTop");
  const yearEl = document.getElementById("year");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const revealEls = document.querySelectorAll(".reveal");

  // Tahun footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Navbar shadow saat scroll
  const onScroll = () => {
    const scrolled = window.scrollY > 40;
    navbar.classList.toggle("scrolled", scrolled);
    backTop.classList.toggle("show", window.scrollY > 500);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Kembali ke atas
  backTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  // Menu mobile
  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  // Tutup menu saat link diklik
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      document.body.style.overflow = "";
    })
  );

  // Scroll spy — highlight nav aktif
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = navLinks.querySelectorAll("a");

  const spy = () => {
    const pos = window.scrollY + 120;
    let current = "home";
    sections.forEach((sec) => {
      if (pos >= sec.offsetTop) current = sec.id;
    });
    navAnchors.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === `#${current}`)
    );
  };
  spy();
  window.addEventListener("scroll", spy, { passive: true });

  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));

  // Animate skill bars saat terlihat
  const langCard = document.querySelector(".lang-card");
  if (langCard) {
    const barIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".bar span").forEach((bar) => {
              if (bar.dataset.width) bar.style.width = bar.dataset.width;
            });
            barIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    barIO.observe(langCard);
  }
});