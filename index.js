//Бургер меню
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('.header').classList.toggle('header__open');
    });
});

   document.querySelectorAll('.nav__link').forEach(function (el) {
    el.addEventListener('click', function () {
        document.querySelector('.header').classList.remove('header__open');
    });
});

//Табы
let tabsBtn = document.querySelectorAll('.how__btn');
let tabsConsultation = document.querySelectorAll('.consultation');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) {
            btn.classList.remove('how__btn--active');
            e.currentTarget.classList.add('how__btn--active');
        });

        tabsConsultation.forEach(function (element) {
            element.classList.remove('consultation--active');
            document.querySelector(`[data-target="${path}"]`).classList.add('consultation--active')
        });
    });
});

//Слайдер
const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    a11y: {
        paginationBulletMessage: 'Тут название слайда {{index}}',
    }
  });

//Поисковик
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__btn').addEventListener('click', function () {
    document.querySelector('.header').classList.add('search-open');
  });
  document.querySelector('.search__button').addEventListener('click', function () {
    document.querySelector('.header').classList.remove('search-open');
  });
});
//Аккордион
new Accordion('.accordion-container');


