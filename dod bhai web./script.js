// Scroll progress indicator
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
});

// Section reveal on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section:not(.hero)').forEach(section => {
    observer.observe(section);
});

// Animation feature: fade-in and slide-up for elements with 'animate-on-scroll' class
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    animationObserver.observe(el);
});

// Custom cursor
document.addEventListener('mousemove', (e) => {
    document.querySelector('.custom-cursor').style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    setTimeout(() => {
        document.querySelector('.cursor-follower').style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }, 100);
});

document.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelector('.custom-cursor').classList.add('cursor-active');
        document.querySelector('.cursor-follower').classList.add('follower-active');
    });
    item.addEventListener('mouseleave', () => {
        document.querySelector('.custom-cursor').classList.remove('cursor-active');
        document.querySelector('.cursor-follower').classList.remove('follower-active');
    });
});

// Initialize all product sliders
document.addEventListener('DOMContentLoaded', function() {
    const productSliders = document.querySelectorAll('.product-with-slider');
    
    productSliders.forEach((productSlider, index) => {
        const slider = productSlider.querySelector('.slider-container');
        const slides = productSlider.querySelectorAll('.slide');
        const prevBtn = productSlider.querySelector('.prev-arrow');
        const nextBtn = productSlider.querySelector('.next-arrow');
        const dotsContainer = productSlider.querySelector('.slider-dots');
        
        let currentSlide = 0;
        
        // Create dots for this slider
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
        
        const dots = productSlider.querySelectorAll('.dot');
        
        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateSlider();
        }
        
        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }
        
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
        });
        
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector(".hero-bg");
  const images = ["images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg"];
  let i = 0;

  setInterval(() => {
    bg.style.opacity = 0;
    setTimeout(() => {
      i = (i + 1) % images.length;
      bg.style.backgroundImage = `url(${images[i]})`;
      bg.style.opacity = 1;
    }, 1000);
  }, 5000);
});