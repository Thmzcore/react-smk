/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  // Ketika discroll lebih dari 50 viewport height, tambahkan class scroll-header ke header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== Datas Questions ===============*/
import Questions from "./assets/Data/questions.js";

let DataQuestion = Questions;

function showQuestion(questions) {
  const boxQuestions = document.querySelector(".questions-group");

  boxQuestions.innerHTML = "";

  questions.forEach(quest => {
    let dataQuest = `
    <div class="questions-item">
    <header class="questions-head">
    <i class="ri-add-line question-icon"></i>
    <h3 class="item-title">${quest.title}</h3>
    </header>
    <div class="questions-content">
    <div class="question-desc">${quest.desc}</div>
    </div>
    </div>
    `
    boxQuestions.innerHTML += dataQuest;
  });
}

showQuestion(DataQuestion);

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions-item')

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.questions-head')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if (openItem && openItem !== item) {
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions-content')

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // Ketika discroll lebih dari 400 viewport height, tambahan class show-scroll ke tag dengan class scroll-top
  if (this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Topik yang dipilih sebelumnya (jika pengguna dipilih)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Mendapatkan tema saat ini yang dimiliki antarmuka dengan memvalidasi kelas tema gelap
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Memvalidasi jika pengguna sebelumnya memilih topik
if (selectedTheme) {
  // Jika validasi terpenuhi, akan ditanya apa masalahnya untuk mengetahui apakah akan mengaktifkan atau menonaktifkan dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Aktifkan / nonaktifkan tema secara manual dengan tombol
themeButton.addEventListener('click', () => {
  // Tambahkan atau hapus tema gelap / ikon
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // Menyimpan tema dan ikon saat ini yang dipilih pengguna
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
});
/*=============== SCROLL REVEAL =============== */
ScrollReveal({
  reset: true,
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.text-content');
ScrollReveal().reveal('.home-img', {
  delay: 500
});
ScrollReveal().reveal('.home-social', {
  delay: 600
});
ScrollReveal().reveal('.about-img, .contact-box', {
  origin: 'left'
});
ScrollReveal().reveal('.about-data, .contact-form', {
  origin: 'right'
});
ScrollReveal().reveal('.steps-card, .product-card, .questions-group', {
  interval: 100
});


