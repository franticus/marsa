const faqItems = document.querySelectorAll('.faq__title');

const accordionToggle = e => {
  e.currentTarget.classList.toggle('faq__active');
  const item = e.currentTarget.nextElementSibling;
  if (e.currentTarget.classList.contains('faq__active')) {
    item.style.maxHeight = item.scrollHeight + 'px';
  } else {
    item.style.maxHeight = 0;
  }
};

if (faqItems) {
  faqItems.forEach(el => {
    el.addEventListener('click', accordionToggle);
  });
}

const btn = document.querySelector('.header__btn');
const menu = document.querySelector('.header-nav');
const header = document.querySelector('.header');
const body = document.querySelector('body');

function showMenu() {
  btn.classList.toggle('active');
  menu.classList.toggle('active__menu');
  header.classList.toggle('active__header');
  body.classList.toggle('active-body');
}

if (btn) {
  btn.addEventListener('click', showMenu);
}

document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed('#typed-output', {
    strings: [
      'Transform your business with clients in <strong>just 5 days!</strong>',
    ],
    typeSpeed: 20,
    startDelay: 500,
    showCursor: false,
    contentType: 'html',
  });
});
