// ===== Scroll Reveal Animation =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Trigger counter animation for stats
      if (entry.target.classList.contains('hero-stats')) {
        animateCounters();
      }
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
  observer.observe(el);
});

// ===== Counter Animation for Stats =====
let countersAnimated = false;

function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;
  
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const text = stat.textContent;
    const hasPlus = text.includes('+');
    const numMatch = text.match(/\d+/);
    
    if (numMatch) {
      const target = parseInt(numMatch[0]);
      let current = 0;
      const increment = target / 50;
      const duration = 1500;
      const stepTime = duration / 50;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = text;
          clearInterval(counter);
        } else {
          stat.textContent = Math.floor(current) + (hasPlus ? '+' : '');
        }
      }, stepTime);
    }
  });
}

// ===== Active Navigation Link Highlighting =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavOnScroll() {
  const scrollY = window.scrollY;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
  
  // Remove active class when at the very top (hero section)
  if (scrollY < 100) {
    navLinks.forEach(link => link.classList.remove('active'));
  }
}

window.addEventListener('scroll', highlightNavOnScroll);

// ===== Mobile Navigation Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (navToggle && navLinksContainer) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinksContainer.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinksContainer.contains(e.target)) {
      navToggle.classList.remove('active');
      navLinksContainer.classList.remove('active');
    }
  });
}

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Navbar Background on Scroll =====
const nav = document.querySelector('.nav');

function updateNavBackground() {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10, 10, 10, 0.95)';
    nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
  } else {
    nav.style.background = 'rgba(10, 10, 10, 0.85)';
    nav.style.boxShadow = 'none';
  }
}

window.addEventListener('scroll', updateNavBackground);

// ===== Parallax Effect for Hero Grid Background =====
const heroGridBg = document.querySelector('.hero-grid-bg');

function parallaxEffect() {
  if (heroGridBg) {
    const scrolled = window.scrollY;
    heroGridBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
}

window.addEventListener('scroll', parallaxEffect);

// ===== Typing Effect for Hero Greeting =====
const heroGreeting = document.querySelector('.hero-greeting');
if (heroGreeting) {
  const originalText = heroGreeting.textContent;
  heroGreeting.textContent = '';
  heroGreeting.style.opacity = '1';
  
  let i = 0;
  function typeWriter() {
    if (i < originalText.length) {
      heroGreeting.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 80);
    }
  }
  
  // Start typing after a short delay
  setTimeout(typeWriter, 500);
}

// ===== Magnetic Button Effect =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
});

// ===== Tilt Effect for Cards =====
const cards = document.querySelectorAll('.project-card, .skill-category, .education-card, .timeline-content');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});

// ===== Skill Chips Ripple Effect =====
const skillChips = document.querySelectorAll('.skill-chip, .tag');

skillChips.forEach(chip => {
  chip.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      background: rgba(200, 255, 0, 0.4);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
      left: ${x}px;
      top: ${y}px;
      width: 100px;
      height: 100px;
      margin-left: -50px;
      margin-top: -50px;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple animation to stylesheet
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ===== Add Stagger Animation Delay to Cards =====
function addStaggerDelay() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach((category, index) => {
    category.style.transitionDelay = `${index * 0.1}s`;
  });

  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.15}s`;
  });
  
  const contactLinks = document.querySelectorAll('.contact-link');
  contactLinks.forEach((link, index) => {
    link.style.transitionDelay = `${index * 0.1}s`;
  });
}

// Initialize stagger delays
addStaggerDelay();

// ===== Cursor Glow Effect =====
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
cursorGlow.style.cssText = `
  position: fixed;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(200, 255, 0, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
  opacity: 0;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
  cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
  cursorGlow.style.opacity = '0';
});

// ===== Scroll Progress Indicator =====
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #c8ff00, #a0cc00);
  z-index: 10001;
  transition: width 0.1s ease;
  box-shadow: 0 0 10px rgba(200, 255, 0, 0.5);
`;
document.body.appendChild(progressBar);

function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateProgressBar);

// ===== Text Scramble Effect on Hover =====
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  
  update() {
    let output = '';
    let complete = 0;
    
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span style="color: var(--accent)">${char}</span>`;
      } else {
        output += from;
      }
    }
    
    this.el.innerHTML = output;
    
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// Apply scramble effect to section titles on hover
document.querySelectorAll('.section-title').forEach(title => {
  const originalText = title.textContent;
  const fx = new TextScramble(title);
  
  title.addEventListener('mouseenter', () => {
    fx.setText(originalText);
  });
});

// ===== Console Easter Egg =====
console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold; color: #c8ff00;');
console.log('%cThanks for checking out my portfolio. Feel free to reach out!', 'font-size: 14px; color: #a0a0a0;');
console.log('%c📧 shreedivya1920@gmail.com', 'font-size: 12px; color: #f5f5f5;');

// ===== Performance: Throttle scroll events =====
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Apply throttling to scroll handlers
window.removeEventListener('scroll', highlightNavOnScroll);
window.removeEventListener('scroll', updateNavBackground);
window.removeEventListener('scroll', parallaxEffect);
window.removeEventListener('scroll', updateProgressBar);

window.addEventListener('scroll', throttle(highlightNavOnScroll, 100));
window.addEventListener('scroll', throttle(updateNavBackground, 100));
window.addEventListener('scroll', throttle(parallaxEffect, 16));
window.addEventListener('scroll', throttle(updateProgressBar, 16));