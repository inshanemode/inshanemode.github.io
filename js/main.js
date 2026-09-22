/**
 * JAVASCRIPT CHÍNH CHO PORTFOLIO LANDING PAGE
 * Hệ thống Animation Suite: Particle Canvas tương tác, 3D Tilt Cards, Spotlight Mouse, Scroll Reveal & Count-up
 */

// Bộ SVG Icons tinh giản chuẩn UI
const ICONS = {
  github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  facebook: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
  mail: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  externalLink: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  code: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  sun: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`,
  moon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  heart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  arrowUp: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`
};

// Đăng ký Plugin GSAP ScrollTrigger nếu có sẵn
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Đảm bảo trình duyệt luôn mở lại từ đỉnh trang (Hero) mỗi khi F5 / Reset
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
if (window.location.hash) {
  history.replaceState(null, null, window.location.pathname);
}
window.scrollTo(0, 0);

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("pageshow", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  initTheme();
  initOpeningOverlay();
  initLanguageSwitcher();
  initDynamicContent();
  initProfileImageCarousel();
  initParticlesCanvas();
  initTypewriter();
  initTiltAndSpotlight();
  initScrollReveal();
  initProjectsFilter();
  initSmoothScroll();
  initContactForm();
  initBackToTop();
  initMobileMenu();
  initCuteRisingAndHorizontalPin();
  initScrollTriggerSkillsAndTimeline();
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh();
  }
});

/* ===========================================================================
   0. OPENING OVERLAY & BLURRED PINK HEART GLOW CURSOR
   =========================================================================== */
function initOpeningOverlay() {
  const overlay = document.getElementById("site-intro-overlay");
  const surface = overlay?.querySelector(".site-intro-surface");
  const wordmark = overlay?.querySelector(".site-intro-wordmark");
  if (!overlay || !surface || !wordmark) return;

  const text = wordmark.textContent.trim();
  wordmark.textContent = "";

  Array.from(text).forEach((character, index) => {
    const span = document.createElement("span");
    span.className = character === " "
      ? "site-intro-char is-space"
      : "site-intro-char";
    span.style.setProperty("--char-index", index);
    span.textContent = character === " " ? "\u00a0" : character;
    wordmark.appendChild(span);
  });

  // Khởi chạy hiệu ứng vệt màu blur hình trái tim màu hồng nhạt bám theo con trỏ chuột
  const heartEngine = initIntroHeartGlow(overlay);

  let isDismissing = false;

  const dismiss = (e) => {
    if (isDismissing) return;
    isDismissing = true;

    // Kích hoạt hiệu ứng trái tim nổ toả ra khi click
    if (heartEngine?.triggerBurst) {
      const clickX = e?.clientX || window.innerWidth / 2;
      const clickY = e?.clientY || window.innerHeight / 2;
      heartEngine.triggerBurst(clickX, clickY);
    }

    overlay.classList.add("is-dismissed");
    surface.setAttribute("aria-hidden", "true");
    window.setTimeout(() => {
      if (heartEngine?.cleanup) {
        heartEngine.cleanup();
      }
      overlay.remove();
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    }, 700);
  };

  surface.addEventListener("click", dismiss);
  surface.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      dismiss(event);
    }
  });
}

/**
 * Hiệu ứng vệt sáng blur màu hồng nhạt hình trái tim bám theo con trỏ chuột
 * Kèm hiệu ứng nổ pháo hoa trái tim toả ra khi click
 */
function initIntroHeartGlow(overlay) {
  const heartEl = document.getElementById("site-intro-heart");
  const canvas = document.getElementById("site-intro-burst-canvas");
  if (!heartEl || !overlay) return null;

  const ctx = canvas?.getContext("2d");

  let width = window.innerWidth;
  let height = window.innerHeight;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  const resize = () => {
    if (!canvas || !ctx) return;
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  resize();
  window.addEventListener("resize", resize);

  let mouseX = width / 2;
  let mouseY = height / 2;
  let currentX = mouseX;
  let currentY = mouseY;
  let animId = null;
  let time = 0;
  let hasMoved = false;
  let isBursting = false;

  const burstParticles = [];
  const BURST_COLORS = [
    "#f472b6",
    "#fb7185",
    "#fda4af",
    "#fbcfe8",
    "#ff3366",
    "#ec4899",
    "#f43f5e"
  ];

  const onPointerMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Ngay lần di chuột đầu tiên, cập nhật ngay toạ độ chuột để không bị trễ từ giữa màn hình
    if (!hasMoved) {
      currentX = mouseX;
      currentY = mouseY;
      hasMoved = true;
    }
  };

  window.addEventListener("pointermove", onPointerMove);

  const drawMiniHeart = (c, x, y, size, angle, color, alpha) => {
    c.save();
    c.translate(x, y);
    c.rotate(angle);
    c.globalAlpha = alpha;
    c.fillStyle = color;
    c.beginPath();
    const h = size;
    const w = size;
    c.moveTo(0, h * 0.3);
    c.bezierCurveTo(-w * 0.5, -h * 0.2, -w, h * 0.35, 0, h);
    c.bezierCurveTo(w, h * 0.35, w * 0.5, -h * 0.2, 0, h * 0.3);
    c.closePath();
    c.fill();
    c.restore();
  };

  const render = () => {
    time += 0.035;

    if (!isBursting) {
      // Tốc độ bám cực nhạy (0.45) giúp trái tim bám sát con trỏ chuột ngay lập tức
      currentX += (mouseX - currentX) * 0.45;
      currentY += (mouseY - currentY) * 0.45;

      // Nhịp tim đập êm dịu, nhẹ nhàng
      const beat = Math.sin(time * 2.2) * 0.06;
      const scale = 1 + beat;

      heartEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${scale})`;
    } else if (ctx) {
      // Vẽ các hạt mini trái tim nổ toả ra 360 độ
      ctx.clearRect(0, 0, width, height);

      for (let i = burstParticles.length - 1; i >= 0; i--) {
        const p = burstParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.vy -= 0.08; // Lực nổi nhẹ lên trên
        p.rotation += p.rotSpeed;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          burstParticles.splice(i, 1);
          continue;
        }

        if (p.isHeart) {
          drawMiniHeart(ctx, p.x, p.y, p.size, p.rotation, p.color, p.alpha);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    animId = requestAnimationFrame(render);
  };

  animId = requestAnimationFrame(render);

  const triggerBurst = (clickX, clickY) => {
    isBursting = true;
    const originX = hasMoved ? currentX : clickX;
    const originY = hasMoved ? currentY : clickY;

    // Kích hoạt shockwave trên vệt blur chính
    heartEl.style.setProperty("--heart-x", `${originX}px`);
    heartEl.style.setProperty("--heart-y", `${originY}px`);
    heartEl.classList.add("is-bursting");

    // Sinh 40 mini trái tim và hạt sáng hồng nổ toả ra các hướng
    const TOTAL_BURST = 40;
    for (let i = 0; i < TOTAL_BURST; i++) {
      const angle = (i / TOTAL_BURST) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      const speed = 4 + Math.random() * 11;
      burstParticles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 9 + Math.random() * 13,
        color: BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.22,
        alpha: 0.95,
        decay: 0.024 + Math.random() * 0.016,
        isHeart: Math.random() < 0.72
      });
    }
  };

  const cleanup = () => {
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("resize", resize);
    if (animId) cancelAnimationFrame(animId);
  };

  return { triggerBurst, cleanup };
}

/* ==========================================================================
   1. THEME TOGGLE (DARK / LIGHT MODE & AUTO SYSTEM PREFERENCE)
   ========================================================================== */
function getSystemTheme() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  // Mặc định theo thời gian thực tế: 6h - 18h là Sáng, 18h - 6h là Tối
  const hour = new Date().getHours();
  return (hour >= 6 && hour < 18) ? "light" : "dark";
}

function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("portfolio-theme");
  
  // Giao diện mặc định tự động xác định theo trạng thái hệ thống/thiết bị
  const initialTheme = (storedTheme === "light" || storedTheme === "dark") ? storedTheme : getSystemTheme();
  applyTheme(initialTheme);

  // Tự động lắng nghe khi trạng thái hệ điều hành/trình duyệt thay đổi
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      const newSysTheme = e.matches ? "dark" : "light";
      applyTheme(newSysTheme);
      localStorage.setItem("portfolio-theme", newSysTheme);
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleSystemThemeChange);
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      
      toggleBtn.classList.add("theme-switching");
      setTimeout(() => {
        applyTheme(nextTheme);
        localStorage.setItem("portfolio-theme", nextTheme);
        setTimeout(() => {
          toggleBtn.classList.remove("theme-switching");
        }, 80);
      }, 120);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === "dark" ? ICONS.heart : ICONS.moon;
    toggleBtn.setAttribute("aria-label", theme === "dark" ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối");
    toggleBtn.setAttribute("title", theme === "dark" ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối");
  }
}

/* ==========================================================================
   2. INTERACTIVE CANVAS PARTICLE SYSTEM (60 FPS)
   ========================================================================== */
function initParticlesCanvas() {
  const canvas = document.getElementById("hero-particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 55 : 110;
  let mouse = { x: null, y: null, radius: 160 };

  function resizeCanvas() {
    const parent = canvas.parentElement;
    width = parent ? parent.offsetWidth : window.innerWidth;
    height = parent ? parent.offsetHeight : window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    } else {
      mouse.x = null;
      mouse.y = null;
    }
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  const colors = [
    { r: 244, g: 114, b: 182 }, // Soft Blossom Pink (#f472b6)
    { r: 251, g: 113, b: 133 }, // Coral Rose Pink (#fb7185)
    { r: 253, g: 164, b: 175 }, // Pastel Light Pink (#fda4af)
    { r: 251, g: 207, b: 232 }, // Cotton Candy Baby Pink (#fbcfe8)
    { r: 255, g: 107, b: 157 }, // Sweet Strawberry Pink (#ff6b9d)
    { r: 244, g: 63, b: 94 },   // Romantic Rose Pink (#f43f5e)
    { r: 236, g: 72, b: 153 }   // Vibrant Pink (#ec4899)
  ];

  class SparkleParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 30;
      this.vx = (Math.random() - 0.5) * 0.38;
      this.vy = -(Math.random() * 0.38 + 0.16); // Nhẹ nhàng bay lơ lửng lên trên
      this.baseSize = Math.random() * 11 + 11; // To hơn: Size từ 11px đến 22px
      this.size = this.baseSize;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.45 + 0.35;
      this.isHeart = true; // 100% là trái tim màu hồng lơ lửng phát sáng
      this.rotation = (Math.random() - 0.5) * 0.5; // Nghiêng nhẹ tự nhiên
      this.rotSpeed = (Math.random() - 0.5) * 0.008; // Xoay chuyển êm dịu
      this.pulseSpeed = Math.random() * 0.03 + 0.015;
      this.pulseTime = Math.random() * Math.PI;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotSpeed;
      this.pulseTime += this.pulseSpeed;

      // Nhịp phập phồng nhẹ tạo cảm giác trái tim thở lấp lánh
      this.size = this.baseSize * (1 + Math.sin(this.pulseTime) * 0.2);

      // Tương tác đẩy trái tim khi chuột di vào (y chang animation hiện tại)
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && dist > 0.1) {
          let force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 3.2;
          this.y -= (dy / dist) * force * 3.2;
          this.rotation += (dx > 0 ? -1 : 1) * force * 0.04;
        }
      }

      if (this.y < -45 || this.x < -45 || this.x > width + 45) {
        this.reset(false);
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);

      const c = this.color;
      const currentAlpha = Math.max(0.15, this.alpha * (0.8 + Math.sin(this.pulseTime) * 0.25));

      // Vẽ trái tim màu hồng phát sáng lơ lửng
      const s = this.size;
      const w = s * 1.05;
      const h = s * 1.05;
      const yOff = -h * 0.42;

      ctx.beginPath();
      ctx.moveTo(0, h * 0.3 + yOff);
      ctx.bezierCurveTo(-w * 0.55, -h * 0.22 + yOff, -w * 0.95, h * 0.35 + yOff, 0, h + yOff);
      ctx.bezierCurveTo(w * 0.95, h * 0.35 + yOff, w * 0.55, -h * 0.22 + yOff, 0, h * 0.3 + yOff);
      ctx.closePath();

      ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${currentAlpha})`;
      ctx.shadowColor = `rgba(${c.r}, ${c.g}, ${c.b}, 0.7)`;
      ctx.shadowBlur = 8;
      ctx.fill();

      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new SparkleParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Cập nhật và vẽ các trái tim và hạt sáng pastel
    particles.forEach(p => {
      p.update();
      p.draw(ctx);
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3. PROFILE IMAGE CAROUSEL & 3D PARALLAX TILT
   ========================================================================== */
function initProfileImageCarousel() {
  const container = document.getElementById("profile-image-carousel");
  if (!container) return;

  // Nếu có danh sách ảnh trong PORTFOLIO_DATA thì nạp động
  if (typeof PORTFOLIO_DATA !== "undefined" && Array.isArray(PORTFOLIO_DATA.personal?.avatars) && PORTFOLIO_DATA.personal.avatars.length > 0) {
    const avatars = PORTFOLIO_DATA.personal.avatars;
    container.innerHTML = avatars.map((src, idx) => `
      <img 
        src="${src}" 
        alt="Lê Anh Huy (inshanemode) Avatar ${idx + 1}" 
        class="profile-image ${idx === 0 ? "active" : ""}" 
        data-index="${idx}"
      />
    `).join("") + `
      <div class="profile-carousel-dots" id="profile-carousel-dots" aria-label="Bộ chọn ảnh đại diện">
        ${avatars.map((_, idx) => `<span class="carousel-dot ${idx === 0 ? "active" : ""}" data-index="${idx}"></span>`).join("")}
      </div>
    `;
  }

  const images = container.querySelectorAll(".profile-image");
  const dots = container.querySelectorAll(".carousel-dot");
  if (images.length <= 1) return;

  let currentIndex = 0;
  let timer = null;
  const ROTATE_INTERVAL = 2800; // Tự động đổi ảnh mỗi 2.8 giây, chạy liên tục và mượt mà

  const showImage = (index) => {
    images.forEach((img, idx) => {
      if (idx === index) {
        img.classList.add("active");
        img.style.zIndex = "2";
      } else {
        img.classList.remove("active");
        img.style.zIndex = "1";
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    currentIndex = index;
  };

  const nextImage = () => {
    const nextIdx = (currentIndex + 1) % images.length;
    showImage(nextIdx);
  };

  const startTimer = () => {
    stopTimer();
    timer = setInterval(nextImage, ROTATE_INTERVAL);
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  // Khởi chạy timer tự động chạy liên tục (không bị khựng khi rê chuột)
  startTimer();

  // Click vào ảnh đại diện để đổi ngay sang ảnh tiếp theo
  container.addEventListener("click", () => {
    nextImage();
    startTimer();
  });

  // Click vào từng chấm tròn để chuyển ngay đến ảnh tương ứng
  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      if (!isNaN(idx)) {
        showImage(idx);
        startTimer();
      }
    });
  });
}

function initTiltAndSpotlight() {
  const cards = document.querySelectorAll(".spotlight-card, .tilt-card");

  cards.forEach(card => {
    const isProfileCard = card.classList.contains("profile-card");
    const isSkillCard = card.classList.contains("skill-category-card");
    const isTimelineCard = card.classList.contains("timeline-card-inner");
    const isTestimonialCard = card.classList.contains("testimonial-card");
    const listenerTarget = isProfileCard ? (card.closest(".profile-card-wrapper") || card) : card;

    listenerTarget.addEventListener("mouseenter", () => {
      if (isSkillCard || isTimelineCard || isTestimonialCard) {
        card.style.transformOrigin = "50% 50%";
      }
      if (isProfileCard) {
        const wrapper = card.closest(".profile-card-wrapper");
        wrapper?.classList.add("hover-dissolve");
      }
    });

    listenerTarget.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Cập nhật tọa độ chiếu đèn spotlight
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      // Hiệu ứng nghiêng 3D nếu thẻ có class .tilt-card
      if (card.classList.contains("tilt-card") && window.innerWidth > 768) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Góc nghiêng: profile card 18 độ, skill & timeline & testimonial card 8.5 độ, thẻ khác 8 độ
        const maxTilt = isProfileCard ? 18 : ((isSkillCard || isTimelineCard || isTestimonialCard) ? 8.5 : 8);
        const normX = Math.max(-1.15, Math.min(1.15, (x - centerX) / (centerX || 1)));
        const normY = Math.max(-1.15, Math.min(1.15, (y - centerY) / (centerY || 1)));
        const rotateX = normY * -maxTilt;
        const rotateY = normX * maxTilt;

        card.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      }
    });

    listenerTarget.addEventListener("mouseleave", () => {
      if (card.classList.contains("tilt-card")) {
        card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      }
      if (isSkillCard) {
        card.style.transformOrigin = "50% 100%";
      }
      if (isProfileCard) {
        const wrapper = card.closest(".profile-card-wrapper");
        wrapper?.classList.remove("hover-dissolve");
      }
    });
  });
}

/* ==========================================================================
   4. SCROLL REVEAL & COUNT-UP STATS
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        
        // Nếu phần tử chứa số đếm thống kê thì kích hoạt count-up
        if (entry.target.classList.contains("stat-card")) {
          animateCountUp(entry.target);
        }

        // Bật thanh kỹ năng nếu có
        const skillBars = entry.target.querySelectorAll(".skill-bar-fill");
        skillBars.forEach(bar => {
          const targetWidth = bar.getAttribute("data-width") || "80%";
          bar.style.width = targetWidth;
        });

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: "0px 0px 0px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

// Hiệu ứng đếm số mượt mà từ 0 lên giá trị mục tiêu
function animateCountUp(cardElement) {
  const numElement = cardElement.querySelector(".stat-number");
  if (!numElement || numElement.getAttribute("data-counted") === "true") return;

  const rawText = numElement.textContent.trim();
  const match = rawText.match(/([0-9.]+)/);
  if (!match) return;

  const targetNum = parseFloat(match[1]);
  const suffix = rawText.replace(match[1], "");
  const isFloat = rawText.includes(".");
  const duration = 1800; // ms
  const startTime = performance.now();

  numElement.setAttribute("data-counted", "true");

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Hàm easing mượt (easeOutQuart)
    const easeOut = 1 - Math.pow(1 - progress, 4);
    const current = targetNum * easeOut;

    numElement.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      numElement.textContent = rawText;
    }
  }

  requestAnimationFrame(update);
}

/* ==========================================================================
   4.5. LANGUAGE SWITCHER & I18N SYSTEM (VI / EN)
   ========================================================================== */
let currentLang = localStorage.getItem("portfolio_lang") || "vi";

function initLanguageSwitcher() {
  const langSwitcher = document.getElementById("lang-switcher");
  if (langSwitcher) {
    const btns = langSwitcher.querySelectorAll(".lang-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedLang = btn.getAttribute("data-lang");
        if (selectedLang && selectedLang !== currentLang) {
          setLanguage(selectedLang);
        }
      });
    });
  }
}

function setLanguage(lang, isInitial = false) {
  if (lang !== "vi" && lang !== "en") lang = "vi";
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);
  document.documentElement.setAttribute("lang", lang);

  // 1. Cập nhật trạng thái active trên các nút chọn ngôn ngữ
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // 2. Cập nhật các phần tử tĩnh có thuộc tính data-i18n và data-i18n-placeholder
  if (typeof I18N_DICTIONARY !== "undefined" && I18N_DICTIONARY[lang]) {
    const dict = I18N_DICTIONARY[lang];
    const getNestedVal = (obj, path) => path.split(".").reduce((prev, curr) => (prev ? prev[curr] : null), obj);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = getNestedVal(dict, key);
      if (val !== null && val !== undefined) {
        el.textContent = val;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = getNestedVal(dict, key);
      if (val !== null && val !== undefined) {
        el.placeholder = val;
      }
    });
  }

  // 3. Cập nhật dữ liệu động cá nhân
  if (typeof PORTFOLIO_DATA !== "undefined") {
    const data = PORTFOLIO_DATA;
    const langData = data.personal[lang] || data.personal.vi;

    const heroBio = document.getElementById("hero-bio");
    if (heroBio && langData.bio) {
      heroBio.textContent = langData.bio;
    }

    const heroStatus = document.getElementById("hero-status-text");
    if (heroStatus && langData.statusBadge) {
      heroStatus.textContent = langData.statusBadge;
    }

    const contactLocation = document.getElementById("contact-location-text");
    if (contactLocation && langData.location) {
      contactLocation.textContent = langData.location;
    }

    // Cập nhật Quick Stats ở Hero
    const heroQuickStats = document.getElementById("hero-quick-stats");
    if (heroQuickStats && data.about && data.about.stats) {
      heroQuickStats.innerHTML = data.about.stats.map(s => `
        <div class="quick-stat-card">
          <span class="quick-stat-val">${s.number}</span>
          <span class="quick-stat-lbl">${lang === "en" ? s.label_en : s.label_vi}</span>
        </div>
      `).join("");
    }

    // Tái hiển thị các danh mục theo ngôn ngữ được chọn
    renderSkills(data.skills);
    renderProjects(data.projects);
    renderTimeline(data.timeline);
    renderTestimonials(data.testimonials);

    // Cập nhật chuỗi chữ xoay vòng hiệu ứng gõ máy
    updateTypewriterTitles(langData.rotatingTitles);
  }

  // 4. Kích hoạt lại hiệu ứng 3D tilt và spotlight cho các thẻ mới render
  if (typeof initTiltAndSpotlight === "function" && !isInitial) {
    setTimeout(initTiltAndSpotlight, 50);
  }

  // 5. Cập nhật ScrollTrigger để hiệu ứng cuộn luôn chuẩn xác
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh();
  }
}

/* ==========================================================================
   5. RENDER DYNAMIC DATA FROM DATA.JS
   ========================================================================== */
function initDynamicContent() {
  if (typeof PORTFOLIO_DATA === "undefined") return;

  const data = PORTFOLIO_DATA;

  // 1. Navbar & Hero Info
  const brandName = document.getElementById("brand-name");
  if (brandName) brandName.textContent = data.personal.nickname || data.personal.name;

  const heroName = document.getElementById("hero-name");
  if (heroName) heroName.textContent = data.personal.name;

  // Social Links in Hero
  renderSocialLinks(data.socials);

  // Áp dụng ngôn ngữ hiện tại
  setLanguage(currentLang, true);

  // 2. Contact Details
  const contactEmail = document.getElementById("contact-email-text");
  const contactEmailLink = document.getElementById("contact-email-link");
  if (contactEmail && contactEmailLink) {
    contactEmail.textContent = data.personal.email;
    contactEmailLink.href = `mailto:${data.personal.email}`;
  }

  const contactPhone = document.getElementById("contact-phone-text");
  const contactPhoneLink = document.getElementById("contact-phone-link");
  if (contactPhone && contactPhoneLink) {
    contactPhone.textContent = data.personal.phone;
    contactPhoneLink.href = `tel:${data.personal.phone.replace(/[^0-9+]/g, '')}`;
  }

  // Copy email button
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(data.personal.email).then(() => {
        showToast(currentLang === "en" ? "Email copied to clipboard!" : "Đã sao chép email vào bộ nhớ tạm thành công!");
      }).catch(() => {
        showToast(currentLang === "en" ? "You can copy the email manually." : "Bạn có thể copy email thủ công nhé.");
      });
    });
  }
}

function renderSocialLinks(socials) {
  const container = document.getElementById("hero-social-links");
  if (!container || !socials) return;

  container.innerHTML = socials.map(item => `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="${item.name}">
      ${ICONS[item.icon] || ICONS.externalLink}
    </a>
  `).join("");
}

function renderSkills(skills) {
  const container = document.getElementById("skills-container");
  if (!container || !skills) return;

  const isEn = currentLang === "en";

  container.innerHTML = skills.map((group, idx) => {
    const categoryTitle = isEn ? (group.category_en || group.category_vi) : (group.category_vi || group.category_en);
    const categoryDesc = isEn ? (group.description_en || group.description_vi) : (group.description_vi || group.description_en);

    return `
      <div class="skill-category-card spotlight-card tilt-card" data-card-idx="${idx}">
        <div class="skill-cat-header">
          <h3>${categoryTitle}</h3>
          <p>${categoryDesc}</p>
        </div>
        <div class="skill-items-list">
          ${group.items.map(item => {
            const itemName = isEn ? (item.name_en || item.name_vi) : (item.name_vi || item.name_en);
            return `
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">${itemName}</span>
                  <span class="skill-percent" data-target="${item.level}">${item.level}</span>
                </div>
                <div class="skill-bar-bg">
                  <div class="skill-bar-fill" data-width="${item.level}" style="width: ${item.level};"></div>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function renderProjects(projects) {
  const container = document.getElementById("horizontal-track") || document.getElementById("projects-grid");
  if (!container || !projects) return;

  const isEn = currentLang === "en";

  container.innerHTML = projects.map((proj, idx) => {
    const pInfo = isEn ? (proj.en || proj.vi || proj) : (proj.vi || proj.en || proj);
    const title = pInfo.title || proj.title;
    const desc = pInfo.description || proj.description;

    return `
      <div class="cute-project-card" onclick="openProjectModal('${proj.id}')" role="button" tabindex="0" aria-label="${isEn ? 'View details for ' : 'Xem chi tiết '}${title}">
        <div class="card-img-wrap">
          ${proj.video ? `
            <video src="${proj.video}" autoplay loop muted playsinline class="card-video"></video>
            <span class="card-video-pill">▶ Demo Video</span>
          ` : `
            <img src="${proj.image}" alt="${title}" class="card-img" />
          `}
        </div>
        <h3 class="card-title">${title}</h3>
        <p class="card-desc">${desc}</p>
        <div class="card-tags">
          ${(proj.tags || []).map(tag => `<span class="cute-tag">${tag}</span>`).join("")}
        </div>
      </div>
    `;
  }).join("");

  // Tự động kích hoạt phát video mượt mà trên trình duyệt
  const cardVideos = container.querySelectorAll("video.card-video");
  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (entry.isIntersecting) {
          vid.muted = true;
          vid.playsInline = true;
          const p = vid.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          vid.pause();
        }
      });
    }, { threshold: 0.25 });
    cardVideos.forEach(v => videoObserver.observe(v));
  } else {
    cardVideos.forEach(v => {
      v.muted = true;
      v.playsInline = true;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    });
  }
}

function renderTimeline(timeline) {
  const container = document.getElementById("timeline-container");
  if (!container || !timeline) return;

  const isEn = currentLang === "en";

  container.innerHTML = `
    <div class="timeline-pinned-wrapper" id="timeline-pinned-stage">
      <!-- Cột tiến trình Laser & Chấm mốc bên trái -->
      <div class="timeline-rail" id="timeline-rail">
        <div class="timeline-rail-line"></div>
        <div class="timeline-laser-line" id="timeline-laser-line"></div>
        <div class="timeline-rail-dots" id="timeline-rail-dots">
          ${timeline.map((item, idx) => {
            const period = isEn ? (item.period_en || item.period_vi) : (item.period_vi || item.period_en);
            return `
              <div class="timeline-rail-dot ${idx === 0 ? 'active' : ''}" data-step="${idx}" title="${period}">
                <span class="timeline-dot-inner"></span>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <!-- Khung thẻ xếp chồng (Task-Switcher Stack) -->
      <div class="timeline-cards-stack" id="timeline-cards-stack">
        ${timeline.map((item, idx) => {
          const tInfo = isEn ? (item.en || item.vi || item) : (item.vi || item.en || item);
          const period = isEn ? (item.period_en || item.period_vi) : (item.period_vi || item.period_en);
          const company = isEn ? (item.company_en || item.company_vi) : (item.company_vi || item.company_en);
          const role = tInfo.role || item.role;
          const desc = tInfo.description || item.description;
          const achievements = tInfo.achievements || item.achievements || [];

          return `
            <div class="timeline-stack-card" data-card-idx="${idx}" style="z-index: ${10 + idx};">
              <div class="timeline-card-inner spotlight-card tilt-card">
                <div class="timeline-card-header">
                  <div class="timeline-period">${period}</div>
                </div>
                <h3 class="timeline-title">${role}</h3>
                <div class="timeline-company">${company}</div>
                <p class="timeline-desc">${desc}</p>
                ${achievements.length > 0 ? `
                  <ul class="timeline-achievements">
                    ${achievements.map(ach => `<li>${ach}</li>`).join("")}
                  </ul>
                ` : ''}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderTestimonials(testimonials) {
  const container = document.getElementById("testimonials-container");
  if (!container || !testimonials || testimonials.length === 0) return;

  const isEn = currentLang === "en";

  container.innerHTML = testimonials.map((item, idx) => {
    const tInfo = isEn ? (item.en || item.vi || item) : (item.vi || item.en || item);
    const quote = tInfo.quote || item.quote;
    const role = tInfo.role || item.role;

    return `
      <div class="testimonial-card spotlight-card tilt-card reveal delay-${idx + 1}">
        <div class="testimonial-card-top">
          <div class="testimonial-tag-pill tag-pill-${idx}">
            <span class="testimonial-tag-dot tag-dot-${idx}"></span>
            <span>${item.tag}</span>
          </div>
          <svg class="testimonial-quote-svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>

        <p class="testimonial-quote-text">“${quote}”</p>

        <div class="testimonial-author-row">
          <div class="testimonial-avatar-wrap" style="background: ${item.gradient};">
            <span>${item.initials}</span>
          </div>
          <div class="testimonial-author-info">
            <h4 class="testimonial-name">${item.author}</h4>
            <span class="testimonial-role">${role}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   6. TYPEWRITER EFFECT IN HERO (BILINGUAL)
   ========================================================================== */
let typewriterTimeout = null;
let activeTypewriterTitles = [];

function initTypewriter() {
  const target = document.getElementById("typewriter-text");
  if (!target || typeof PORTFOLIO_DATA === "undefined") return;

  const pData = PORTFOLIO_DATA.personal;
  const langData = pData[currentLang] || pData.vi;
  activeTypewriterTitles = langData.rotatingTitles || [
    "Shopify Technical Support (Remote)",
    "IT & Technical Specialist",
    "Freelance CMS & E-Commerce",
    "inshanemode"
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseDuration = 1800;

  function type() {
    if (activeTypewriterTitles.length === 0) return;
    if (titleIndex >= activeTypewriterTitles.length) titleIndex = 0;
    const currentTitle = activeTypewriterTitles[titleIndex];

    if (isDeleting) {
      target.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentTitle.length) {
      delay = pauseDuration;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % activeTypewriterTitles.length;
      delay = 350;
    }

    typewriterTimeout = setTimeout(type, delay);
  }

  type();
}

function updateTypewriterTitles(newTitles) {
  if (Array.isArray(newTitles) && newTitles.length > 0) {
    activeTypewriterTitles = newTitles;
  }
}

/* ==========================================================================
   7. PROJECT FILTERING
   ========================================================================== */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter").toLowerCase();
      const cards = document.querySelectorAll(".project-card");

      cards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.style.display = "flex";
          setTimeout(() => card.classList.add("reveal-visible"), 50);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ==========================================================================
   8. PROJECT DETAILS MODAL
   ========================================================================== */
window.openProjectModal = function(projectId) {
  if (typeof PORTFOLIO_DATA === "undefined") return;
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-project-content");
  if (!modal || !modalContent) return;

  const isEn = currentLang === "en";
  const pInfo = isEn ? (project.en || project.vi || project) : (project.vi || project.en || project);
  const title = pInfo.title || project.title;
  const desc = pInfo.fullDescription || pInfo.description || project.fullDescription || project.description;
  const highlights = pInfo.highlights || project.highlights || [];

  const mediaHtml = project.video ? `
    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 20px; aspect-ratio: 16/9; background: #0b0f19; box-shadow: 0 8px 24px rgba(0,0,0,0.2);">
      <video src="${project.video}" controls autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: contain;"></video>
    </div>
  ` : `
    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 20px; height: 260px;">
      <img src="${project.image}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;" />
    </div>
  `;

  modalContent.innerHTML = `
    ${mediaHtml}
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
      <span class="project-badge" style="position:static;">${project.category}</span>
      <span style="color: var(--text-muted); font-size: 0.85rem;">${isEn ? 'Project ID:' : 'Mã dự án:'} ${project.id}</span>
    </div>
    <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 12px;">${title}</h2>
    <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">
      ${desc}
    </p>

    ${highlights && highlights.length > 0 ? `
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 8px;">${isEn ? 'Key Technical Highlights:' : 'Điểm nổi bật kỹ thuật:'}</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
          ${highlights.map(h => `<li style="position: relative; padding-left: 18px; color: var(--text-secondary); font-size: 0.9rem;"><span style="position: absolute; left: 0; color: var(--primary); font-weight: 700;">-</span> ${h}</li>`).join("")}
        </ul>
      </div>
    ` : ''}

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 8px;">${isEn ? 'Technologies Used:' : 'Công nghệ sử dụng:'}</h4>
      <div class="project-tags">
        ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      ${project.liveDemo && project.liveDemo !== "#" && project.liveDemo.startsWith("http") ? `
        <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          ${ICONS.externalLink} ${isEn ? 'Visit Live Demo' : 'Ghé thăm Website'}
        </a>
      ` : ''}
      ${project.github && project.github !== "#" ? `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          ${ICONS.code} ${isEn ? 'GitHub Source' : 'Mã nguồn GitHub'}
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  const modalVid = modal.querySelector("video");
  if (modalVid) {
    modalVid.muted = true;
    modalVid.playsInline = true;
    const p = modalVid.play();
    if (p && p.catch) p.catch(() => {});
  }
};

window.closeProjectModal = function() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    const vid = modal.querySelector("video");
    if (vid) vid.pause();
  }
};

document.addEventListener("click", (e) => {
  const modal = document.getElementById("project-modal");
  if (modal && e.target === modal) {
    closeProjectModal();
  }
});

/* ==========================================================================
   9. NAVBAR BLUR ON SCROLL & SCROLLSPY
   ========================================================================== */
function initSmoothScroll() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Xử lý tất cả các liên kết anchor nội bộ (#contact, #about, #skills, #timeline,...)
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"]):not([href="#projects"])');
  anchorLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();

        const navHeight = navbar ? navbar.offsetHeight : 70;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        // Xoá hash (#contact, #about) khỏi thanh địa chỉ URL để khi Reload/Reset trang luôn về đầu trang
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, null, window.location.pathname);
        }
      }
    });
  });

  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    // Thu nhỏ thanh navbar khi cuộn xuống
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // Scrollspy nhận diện vị trí đang xem
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}` || (sectionId === "hero-showcase-stage" && scrollY > 600 && link.getAttribute("href") === "#projects")) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

/* ==========================================================================
   10. MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links-menu");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }
}

/* ==========================================================================
   11. CONTACT FORM & TOAST
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  const submitBtn = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const isEn = currentLang === "en";
    const dict = (typeof I18N_DICTIONARY !== "undefined" && I18N_DICTIONARY[currentLang]) 
      ? I18N_DICTIONARY[currentLang].sections 
      : {};

    const nameInput = form.querySelector("input[name='name']");
    const emailInput = form.querySelector("input[name='email']");
    const messageInput = form.querySelector("textarea[name='message']");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email || !message) {
      showToast(isEn ? "Please fill in your name, email, and message!" : "Vui lòng điền đầy đủ họ tên, email và nội dung tin nhắn!");
      return;
    }

    // Hiển thị trạng thái đang gửi
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span style="display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
          <svg style="animation: spin 0.8s linear infinite;" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="9" stroke-dasharray="36" stroke-dashoffset="14" stroke-linecap="round"/>
          </svg>
          ${dict.formSending || (isEn ? "Sending message..." : "Đang gửi tin nhắn...")}
        </span>
      `;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/leanhhuy.dev@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Name": name,
          "Email": email,
          "Message": message,
          "_subject": `[Portfolio inshanemode] Message from ${name}!`,
          "_template": "table",
          "_captcha": "false"
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        showToast(dict.formSuccess || (isEn ? "Thank you! Your message has been sent successfully." : "Cảm ơn bạn! Tin nhắn đã được gửi thành công đến email của Huy."));
        form.reset();
      } else if (result.message && result.message.toLowerCase().includes("activation")) {
        showToast(isEn ? "FormSubmit activation email sent to leanhhuy.dev@gmail.com!" : "FormSubmit đã gửi email kích hoạt đến leanhhuy.dev@gmail.com! Bạn hãy vào Gmail bấm 'Activate Form' 1 lần để hoàn tất nhé!");
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (err) {
      console.warn("Lỗi gửi qua API FormSubmit, chuyển sang fallback mailto:", err);
      showToast(isEn ? "Opening Email app for direct message..." : "Đang mở ứng dụng Email để bạn gửi trực tiếp...");
      setTimeout(() => {
        window.location.href = `mailto:leanhhuy.dev@gmail.com?subject=${encodeURIComponent(`[Portfolio] Message from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      }, 1200);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = dict.formSubmitBtn || (isEn ? "Send Message" : "Gửi tin nhắn ngay");
      }
    }
  });
}

function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `${ICONS.check} <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

/* ==========================================================================
   12. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  btn.innerHTML = ICONS.arrowUp;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================================================
   13. GEN Z CUTE RISING & HORIZONTAL PINNING SHOWCASE
   ========================================================================== */
function initCuteRisingAndHorizontalPin() {
  const stage = document.getElementById("hero-showcase-stage");
  const heroLayer = document.getElementById("hero-layer");
  const showcaseBox = document.getElementById("showcase-box");
  const track = document.getElementById("horizontal-track");

  if (!stage || !heroLayer || !showcaseBox || !track || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  // Khoảng cách cần trượt ngang
  const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + (window.innerWidth * 0.14));

  // Master Timeline liên kết duy nhất 1 ScrollTrigger Pin
  const masterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-showcase-stage",
      start: "top top",           // Ghim lại ngay từ đỉnh trang
      end: "+=3600",             // Tổng thời lượng cuộn trồi lên + trượt ngang
      pin: true,                 // Ghim màn hình lại
      scrub: 1.2,                // Cuộn mượt mà có độ nảy nhẹ
      invalidateOnRefresh: true,
      markers: false,
      id: "Cute-Rising-Horizontal"
    }
  });

  // =========================================================================
  // BƯỚC 1: Banner mờ dần + Khối bộ sưu tập trồi từ dưới lên & nở to
  // =========================================================================
  
  // 1A. Banner mờ dần và trôi nhẹ lên
  masterTimeline.to(heroLayer, {
    opacity: 0,
    scale: 0.9,
    filter: "blur(8px)",
    y: -30,
    duration: 2,
    ease: "power1.out"
  }, 0);

  // 1B. Khối bộ sưu tập pastel từ dưới (yPercent: 110) trồi lên giữa màn hình
  masterTimeline.fromTo(showcaseBox, 
    {
      yPercent: 110,         // Nằm ẩn phía dưới
      scale: 0.75,           // Thu nhỏ bo tròn như tấm thiệp
      borderRadius: "56px",  // Góc bo tròn mũm mĩm
      opacity: 0.95
    },
    {
      yPercent: 0,           // Lên chính giữa màn hình
      scale: 1,              // Nở to 100%
      borderRadius: "0px",   // Khít màn hình
      opacity: 1,
      duration: 2,
      ease: "power2.out"
    },
    0
  );

  // =========================================================================
  // BƯỚC 2: Khi đã đủ kích thước giữa màn hình -> Bắt đầu trượt ngang các thẻ
  // =========================================================================
  masterTimeline.to(track, {
    x: getScrollAmount,
    ease: "none",
    duration: 5
  });

  // =========================================================================
  // BƯỚC 3: Thu nhỏ nhẹ & mờ dần êm ái khi lướt hết dự án (chuyển tiếp sang About)
  // Tích hợp trực tiếp trong Master Timeline -> Cuộn ngược lên không bao giờ bị kẹt kích thước!
  // =========================================================================
  masterTimeline.to(showcaseBox, {
    scale: 0.9,
    borderRadius: "28px",
    opacity: 0,
    ease: "power1.inOut",
    duration: 0.8
  });

  // Kích hoạt cuộn mượt đến stage khi bấm "Khám phá dự án" hoặc liên kết #projects
  const projectNavLinks = document.querySelectorAll('a[href="#projects"]');
  projectNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // Cuộn đến điểm bắt đầu trượt ngang của stage (khoảng 30% chặng đường)
      const st = masterTimeline.scrollTrigger;
      if (st) {
        const targetScroll = st.start + (st.end - st.start) * 0.30;
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth"
        });
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, null, window.location.pathname);
        }
      }
    });
  });
}

/* ==========================================================================
   SCROLLTRIGGER ANIMATIONS FOR SKILLS & TIMELINE
   ========================================================================== */
function initScrollTriggerSkillsAndTimeline() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    // Fallback nếu không có GSAP
    document.querySelectorAll(".skill-bar-fill").forEach(b => {
      b.style.width = b.getAttribute("data-width") || "80%";
    });
    document.querySelectorAll(".skill-percent").forEach(p => {
      p.textContent = p.getAttribute("data-target") || "80%";
    });
    const l = document.getElementById("timeline-laser-line");
    if (l) l.style.height = "100%";
    return;
  }

  // 1. SCROLLTRIGGER CHO PHẦN KỸ NĂNG & CÔNG NGHỆ (#skills): HIỆU ỨNG LÁ BÀI BAY RA & THU LẠI
  const skillsSection = document.getElementById("skills");
  const skillsGrid = document.getElementById("skills-container");
  if (skillsSection && skillsGrid) {
    const skillsHeader = skillsSection.querySelector(".text-center");
    const skillCards = Array.from(skillsGrid.querySelectorAll(".skill-category-card"));

    // Header section xuất hiện thanh lịch
    if (skillsHeader) {
      gsap.fromTo(skillsHeader.children,
        { opacity: 0, y: 35, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsHeader,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    if (skillCards.length >= 3) {
      // Thiết lập tâm xoay ở đáy giữa mỗi thẻ (giống hệt cách xòe bài từ gốc tay)
      gsap.set(skillCards, { transformOrigin: "50% 100%" });
      gsap.set(skillCards[1], { zIndex: 3 }); // Card giữa (BA) nằm trên cùng của tụ bài
      gsap.set(skillCards[0], { zIndex: 1 }); // Card trái (UI/UX)
      gsap.set(skillCards[2], { zIndex: 2 }); // Card phải (Kỹ thuật)

      // Tính khoảng cách để lá bài bên trái và phải chụm về đúng tâm của lá bài giữa
      let d0 = 0;
      let d2 = 0;
      function updateCardOffsets() {
        if (window.innerWidth > 992) {
          const prevTransform = skillCards.map(c => c.style.transform);
          skillCards.forEach(c => c.style.transform = "none");
          const r0 = skillCards[0].getBoundingClientRect();
          const r1 = skillCards[1].getBoundingClientRect();
          const r2 = skillCards[2].getBoundingClientRect();
          d0 = r1.left - r0.left;
          d2 = r1.left - r2.left;
          skillCards.forEach((c, i) => c.style.transform = prevTransform[i]);
        } else {
          d0 = 0;
          d2 = 0;
        }
      }

      updateCardOffsets();

      const dealTL = gsap.timeline({ paused: true });

      if (window.innerWidth > 992) {
        // Lá bài trung tâm (BA) trồi lên trước
        dealTL.fromTo(skillCards[1],
          { x: 0, y: 80, scale: 0.88, opacity: 0, rotationZ: 0 },
          { x: 0, y: 0, scale: 1, opacity: 1, rotationZ: 0, duration: 0.65, ease: "power3.out" },
          0
        );

        // Lá bài bên trái (UI/UX) bay vụt sang trái, xoay từ -16 độ về 0 độ với độ nảy đàn hồi
        dealTL.fromTo(skillCards[0],
          { x: d0, y: 100, scale: 0.84, opacity: 0, rotationZ: -16 },
          { x: 0, y: 0, scale: 1, opacity: 1, rotationZ: 0, duration: 0.75, ease: "back.out(1.4)" },
          0.06
        );

        // Lá bài bên phải (Kỹ thuật) bay vụt sang phải, xoay từ +16 độ về 0 độ với độ nảy đàn hồi
        dealTL.fromTo(skillCards[2],
          { x: d2, y: 100, scale: 0.84, opacity: 0, rotationZ: 16 },
          { x: 0, y: 0, scale: 1, opacity: 1, rotationZ: 0, duration: 0.75, ease: "back.out(1.4)" },
          0.1
        );
      } else {
        // Mobile: Các lá bài trồi lên so le với góc nghiêng nhẹ
        skillCards.forEach((c, i) => {
          dealTL.fromTo(c,
            { y: 60, opacity: 0, scale: 0.9, rotationZ: (i % 2 === 0 ? -5 : 5) },
            { y: 0, opacity: 1, scale: 1, rotationZ: 0, duration: 0.65, ease: "back.out(1.3)" },
            i * 0.1
          );
        });
      }

      // Khi các lá bài vừa đáp xuống vị trí, thanh tiến độ kéo dài và số đếm % nhảy liên tục
      skillCards.forEach((c) => {
        const bars = c.querySelectorAll(".skill-bar-fill");
        const percents = c.querySelectorAll(".skill-percent");
        bars.forEach((bar, bIdx) => {
          const rawTarget = bar.getAttribute("data-width") || "80%";
          const targetNum = parseInt(rawTarget, 10) || 80;
          const percentSpan = percents[bIdx];

          dealTL.fromTo(bar,
            { width: "0%" },
            { width: rawTarget, duration: 0.85, ease: "power2.out" },
            0.45 + bIdx * 0.04
          );

          if (percentSpan) {
            const counterObj = { val: 0 };
            dealTL.to(counterObj, {
              val: targetNum,
              duration: 0.85,
              ease: "power2.out",
              onUpdate: () => {
                percentSpan.textContent = Math.round(counterObj.val) + "%";
              }
            }, "<");
          }
        });
      });

      // Đưa timeline về trạng thái ban đầu (tụ bài ẩn ở giữa)
      dealTL.progress(0);

      // Kích hoạt ScrollTrigger:
      // - Khi kéo xuống tới Kỹ năng: 3 lá bài bay vụt ra (deal out)
      // - Khi kéo lên lại (rời khỏi khu vực): các lá bài tự động gom thu trở lại vào tụ bài giữa
      ScrollTrigger.create({
        trigger: skillsGrid,
        start: "top 78%",
        end: "bottom 18%",
        animation: dealTL,
        onEnter: () => dealTL.timeScale(1.0).play(),
        onLeave: () => dealTL.timeScale(1.6).reverse(),
        onEnterBack: () => dealTL.timeScale(1.0).play(),
        onLeaveBack: () => dealTL.timeScale(1.6).reverse()
      });

      ScrollTrigger.addEventListener("refreshInit", updateCardOffsets);
    }
  }

  // 2. SCROLLTRIGGER CHO PHẦN HÀNH TRÌNH / TIMELINE (#timeline): PINNED TASK-SWITCHER STACKED CARDS
  const timelineSection = document.getElementById("timeline");
  const stage = document.getElementById("timeline-pinned-stage");
  const cardsStack = document.getElementById("timeline-cards-stack");

  if (timelineSection && stage && cardsStack) {
    const cards = Array.from(cardsStack.querySelectorAll(".timeline-stack-card"));
    const dots = Array.from(stage.querySelectorAll(".timeline-rail-dot"));
    const laserLine = document.getElementById("timeline-laser-line");

    if (cards.length > 0) {
      // Thiết lập vị trí khởi tạo chuẩn xác:
      // Card 0 ở trung tâm hiển thị sắc nét 100%
      gsap.set(cards[0], { y: 0, scale: 1.0, autoAlpha: 1 });

      // Các card còn lại (1, 2, 3) đợi ở dưới và ẩn đi
      cards.slice(1).forEach((c) => {
        gsap.set(c, { y: 65, scale: 0.94, autoAlpha: 0 });
      });

      if (laserLine) {
        if (window.innerWidth <= 768) {
          gsap.set(laserLine, { width: "0%", height: "2px" });
        } else {
          gsap.set(laserLine, { height: "0%", width: "2px" });
        }
      }

      // Quãng đường cuộn khi màn hình ghim đứng yên:
      // Mỗi lần chuyển thẻ tương ứng 700px lăn chuột mượt mà
      const numTransitions = cards.length - 1;
      const scrollDistance = numTransitions * 700;

      const updateDots = () => {
        const curTime = stackTL.time();
        const currentStep = Math.min(numTransitions, Math.round(curTime));
        dots.forEach((dot, dIdx) => {
          if (dIdx < currentStep) {
            dot.classList.add("completed");
            dot.classList.remove("active");
          } else if (dIdx === currentStep) {
            dot.classList.add("active");
            dot.classList.remove("completed");
          } else {
            dot.classList.remove("active", "completed");
          }
        });
      };

      const stackTL = gsap.timeline({
        onUpdate: updateDots,
        scrollTrigger: {
          trigger: stage,
          start: "center 52%",   // Kéo thẻ lên tới chính giữa màn hình mới ghim và cuộn thẻ
          end: `+=${scrollDistance}`,
          pin: timelineSection,
          scrub: 0.8,
          anticipatePin: 1
        }
      });

      // Cho phép click vào từng chấm mốc để cuộn nhanh đến thẻ tương ứng
      dots.forEach((dot, idx) => {
        dot.addEventListener("click", (e) => {
          e.preventDefault();
          const st = stackTL.scrollTrigger;
          if (st) {
            const targetTime = idx * 1.0;
            const targetProgress = targetTime / stackTL.totalDuration();
            const targetScroll = st.start + targetProgress * (st.end - st.start);
            window.scrollTo({
              top: targetScroll,
              behavior: "smooth"
            });
          }
        });
      });

      // Tạo chuỗi chuyển đổi chuẩn "Vuốt xoá tác vụ" iOS:
      // Thẻ cũ: Lướt nhẹ lên trên, thu nhỏ nhẹ và tan biến hoàn toàn (autoAlpha: 0)
      // Thẻ tiếp theo: Trồi lên từ dưới thay thế thẻ cũ, nở to và hiện rõ hoàn toàn (autoAlpha: 1)
      for (let i = 0; i < numTransitions; i++) {
        const startTime = i * 1.0;
        const currentCard = cards[i];
        const nextCard = cards[i + 1];

        // Tia laser hồng neon kéo dài xuống dần theo từng mốc
        if (laserLine) {
          const isMobile = window.innerWidth <= 768;
          stackTL.to(laserLine, {
            [isMobile ? "width" : "height"]: `${((i + 1) / numTransitions) * 100}%`,
            ease: "none",
            duration: 1.0
          }, startTime);
        }

        // Thẻ cũ: Lướt nhẹ lên trên, thu nhỏ và tan biến hoàn toàn ("mất")
        stackTL.to(currentCard, {
          y: -65,
          scale: 0.94,
          autoAlpha: 0,
          ease: "power2.inOut",
          duration: 0.85
        }, startTime);

        // Thẻ tiếp theo: Trồi lên từ dưới, nở to và hiện rõ hoàn toàn ("hiện")
        stackTL.fromTo(nextCard,
          { y: 65, scale: 0.94, autoAlpha: 0 },
          { y: 0, scale: 1.0, autoAlpha: 1, ease: "power2.out", duration: 0.85 },
          startTime + 0.15
        );
      }

      // Khoảng nghỉ giữ nguyên thẻ cuối cùng để người dùng đọc thoải mái trước khi unpin
      stackTL.to({}, { duration: 0.4 });
    }
  }
}

// Đảm bảo toạ độ tính toán chính xác 100% khi toàn bộ tài nguyên đã tải
window.addEventListener("load", () => {
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh();
  }
});
