// BURGER MENU

document.querySelector(".header__burger-btn").addEventListener("click", () => {
  document.querySelector('.header-nav').classList.add('header-nav_active');
});

document
  .querySelector(".burger-menu__btn-close")
  .addEventListener("click", () => {
    document
      .querySelector(".header-nav")
      .classList.remove("header-nav_active");
  });

// DROPDOWNS

document.onclick = function (e) {

  // закрываем дропдаун по клику на страницу
  if (
    e.target.className != "simplebar-content" &&
    e.target.className != "header-menu__text"
  ) {
    document.querySelectorAll(".header-menu-dropdown").forEach((tabContent) => {
      tabContent.classList.remove("dropdown_active");
    });
  }
  // закрываем модальное окно по клику на затемнение
  if (e.target == body) {
    modalClose()
  }
};

document.querySelectorAll(".header-menu__text").forEach((tabsBtn) => {
  tabsBtn.addEventListener("click", (ev) => {
    const path = ev.currentTarget.dataset.path;

    document.querySelectorAll(".header-menu-dropdown").forEach((tabContent) => {
      tabContent.classList.remove("dropdown_active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("dropdown_active");
  });
});

//search form open

document
  .querySelector(".header-form__button_top")
  .addEventListener("click", (ev) => {
    ev.preventDefault();
    document
      .querySelector(".header-form__input")
      .classList.toggle("header-form__input_active");

    document
      .querySelector(".header-form_top")
      .classList.toggle("header-form_top_active");

    document.querySelector(".header-logo").classList.toggle("header-logo_hide");
    document
      .querySelector(".header__burger-btn")
      .classList.toggle("header__burger-btn_hide");
    document
      .querySelector(".header-form__button-close")
      .classList.toggle("header-form__button-close_active");

    document.querySelector('.header-block').classList.add('header-block_active')
  });

// search form close

document
  .querySelector(".header-form__button-close")
  .addEventListener("click", (ev) => {
    ev.preventDefault();

    document
      .querySelector(".header-form__input")
      .classList.toggle("header-form__input_active");

    document
      .querySelector(".header-form_top")
      .classList.toggle("header-form_top_active");

    document.querySelector(".header-logo").classList.toggle("header-logo_hide");
    document
      .querySelector(".header__burger-btn")
      .classList.toggle("header__burger-btn_hide");
    document
      .querySelector(".header-form__button-close")
      .classList.toggle("header-form__button-close_active");

    document.querySelector('.header-block').classList.remove('header-block_active')
  });



// SWIPERS //

const swiper = new Swiper('.hero-swiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 4000,
  },
});


var swiper2 = new Swiper('.gallery-swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerColumn: 1,
  spaceBetween: 15,
  slidesPerColumnFill: 'row',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  breakpoints: {
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
      spaceBetween: 48,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
    },

    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      spaceBetween: 20,
    }
  }
});


// CHOICES SELECT
const select = document.querySelectorAll('.gallery-filter__select').forEach((select) => {
  const choices = new Choices(select, {
    searchEnabled: false,
    sorter: () => {}
  });
})

// ACCORDION

$(function () {
  $(".catalog-accordeon").accordion({
    heightStyle: "content"
  });
});


//CATALOG TABS

//countries

document.querySelectorAll(".catalog-tabs__btn").forEach((tabsBtn) => {
  tabsBtn.addEventListener("click", (ev) => {

    //аутлайн активной кнопке
    document.querySelectorAll(".catalog-tabs__btn").forEach((buttons) => {
      buttons.classList.remove("catalog-tabs__btn_active")
    })
    tabsBtn.classList.add("catalog-tabs__btn_active")

    // меняем контент
    const path = ev.currentTarget.dataset.path;
    document.querySelectorAll(".catalog-content").forEach((tabContent) => {
      tabContent.classList.remove("catalog-content_active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("catalog-content_active");

    //  // активный по умолчанию художник
    document.querySelectorAll(".catalog-artist").forEach((tabContent) => {
      tabContent.classList.remove("catalog-artist_active");
    });
    // активная кнопка к активному художнику
    document.querySelector(`[data-target="${path}"] .catalog-artist`).classList.add('catalog-artist_active')
    const btnPath = document.querySelector(`[data-target="${path}"] .catalog-artist_active`).dataset.target;

    //удаляем класс активности со всех кнопок
    document.querySelectorAll(".catalog-accordeon__artist-btn").forEach((buttons) => {
      buttons.classList.remove("artist-btn_active")
    })

    // добавляем класс к нужной кнопке
    document.querySelector(`[data-path="${btnPath}"]`).classList.add('artist-btn_active');


  });
});


//artists

document.querySelectorAll(".catalog-accordeon__artist-btn").forEach((tabsBtn) => {
  tabsBtn.addEventListener("click", (ev) => {

    // делаем кнопку активной
    document.querySelectorAll(".catalog-accordeon__artist-btn").forEach((buttons) => {
      buttons.classList.remove("artist-btn_active")
    })
    tabsBtn.classList.add("artist-btn_active")

    //меняем художника
    const path = ev.currentTarget.dataset.path;
    document.querySelectorAll(".catalog-artist").forEach((tabContent) => {
      tabContent.classList.remove("catalog-artist_active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("catalog-artist_active");


  });
});


// EVENTS

document.querySelector('.events-btn').addEventListener('click', () => {
  document.querySelectorAll('.events-item').forEach((card) => {
    card.classList.add('events-item_active');
  })
  document.querySelector('.events-btn').classList.add('events-btn_hide');
})


//EVENTS SWIPER

const eventsSwiper = () => {

  //делаем все карточки активными
  document.querySelectorAll('.events-item').forEach((card) => {
    card.classList.add('events-item_active');
  })
  // инициализируем свайпер
  new Swiper('.events-swiper', {
    // Optional parameters
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 15,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'row',

  });
}
// запускаем свайпер, если ширина экрана меньше 430пх
if (document.documentElement.clientWidth <= 430) {
  eventsSwiper()
}

// отслеживаем изменение ширины экрана
window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth <= 430) {
    eventsSwiper();
  }
});


// EDITIONS

// EDITIONS SWIPER
var swiper3 = new Swiper('.editions-swiper', {

  slidesPerView: 2,
  slidesPerGroup: 2,
  slidesPerColumn: 1,
  spaceBetween: 34,
  slidesPerColumnFill: 'row',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  breakpoints: {
    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 1,
      spaceBetween: 50,
    },

    1024: {
      spaceBetween: 48,
    },

  }
});

// PROJECTS SWIPER
var swiper4 = new Swiper('.projects-swiper-container', {

  slidesPerView: 1,
  slidesPerGroup: 1,

  // slidesPerColumnFill: 'row',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1650: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 1,
      spaceBetween: 50,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 1,
      spaceBetween: 15,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 1,
      spaceBetween: 50,
    },

    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 1,
      spaceBetween: 15,
    },

    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 1,
      spaceBetween: 34,
    },




  }
});


// EDITIONS SPOILER
const spoiler = () => {
  //показываем на странице только категории в состоянии checked
  document.querySelectorAll('.editions-category__chechbox').forEach((check) => {
    if (check.checked) {
      check.parentElement.classList.add('editions-category__item_active');
    }
  })

  // При клике на заголовок Категории показываем все остальные категории
  document.querySelector('.editions-subtitle_category').addEventListener('click', (ev) => {
    document.querySelector('.editions-subtitle__btn').classList.toggle('editions-subtitle__btn_active')

    document.querySelectorAll('.editions-category__item').forEach((category) => {

      category.classList.toggle('editions-category__item_show')

      if (category.childNodes[1].checked) {
        category.classList.add('editions-category__item_active');
      }

      if (!category.childNodes[1].checked) {
        category.classList.remove('editions-category__item_active');
      }
    })
  })

  // убираем состояние checked при клике на крестик
  document.querySelectorAll('.editions-category__btn').forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      ev.currentTarget.previousElementSibling.previousElementSibling.checked = ''
    })
  })
}

//убираем свайпер на моб устройствах и добавляем спойлер

if (document.documentElement.clientWidth <= 430) {
  swiper3.destroy()
  spoiler()
}

// YMAP

ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.758286, 37.601501],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14
  });

  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  var placemark = new ymaps.Placemark([55.758286, 37.601501], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/ymap.svg',
    iconImageSize: [20, 20],
  });
  myMap.geoObjects.add(placemark);
}


// CONTACTS VALIDATION

var selector = document.querySelector('input[type="tel"]');

var im = new Inputmask("+7 (999) - 999 - 99 - 99");
im.mask(selector);

new JustValidate('.contacts-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Как вас зовут?',
    tel: 'Введите номер телефона',
  }
})


// MODAL WINDOW

// получаем доступ ко всем нужным элементам
const slides = document.querySelectorAll('.gallery-slide');
const modal = document.querySelector('.gallery-modal');
const modalBtn = document.querySelector('.gallery-slide__btn')
const modalImg = document.querySelector('.gallery-modal__img-wrapper')
const modalInform = document.querySelector('.gallery-modal__inform')
const main = document.querySelector('main')
const body = document.body
let previousActiveElement;


// функция, которая будет блокировать доступ ко всем элементам, пока открыто модальное окно
const inertAll = (value) => {

  main.inert = value
  main.classList.toggle('inert')
  body.classList.toggle('hidden')

  modal.inert = !value
}

modal.inert = true

// открытие модального окна
slides.forEach((slide) => {
  slide.addEventListener('click', (ev) => {

    // берем содержимое слайда (фото и описание)
    let description = ev.currentTarget.lastElementChild;
    let picture = ev.currentTarget.firstElementChild

    // Вставляем информацию о картине в модальное окно
    modalInform.append(description.cloneNode(true))
    modalImg.append(picture.cloneNode(true))

    // делаем окно активным
    modal.classList.add('gallery-modal_active')

    // вызываем функцию, которая скрывает доступ к остальным элементам
    inertAll(true)
  })
})

const modalClose = () => {

  // удаляем всю информацию о прошлой картине
  modalInform.firstElementChild.remove()
  modalImg.firstElementChild.remove()

  // удаляем у модального окна класс активности
  modal.classList.remove('gallery-modal_active')
  // отменяем инерт у всех элементов, кроме модального окна
  inertAll(false)
}

// создаем обработчик события для закрытия модального окна по клике на кнопку "закрыть"
modalBtn.addEventListener('click', modalClose)


let keys = {
  ESC: 27,
}


// Скролл до блока с художниками

const artistBtn = document.querySelectorAll('.catalog-accordeon__artist-btn');
const artistContent = document.querySelectorAll('.catalog-artist');

const scrollInto = () => {
  artistContent.forEach((content) => {
    content.scrollIntoView({
      block: "start",
      behavior: "smooth"
    })
  })
}


artistBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (document.documentElement.clientWidth <= 768) {
      scrollInto()
    }
  })
})

// tippy (tooltip)

let tooltips = document.querySelectorAll('.project-tooltip')

tippy(tooltips, {
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  interactive: true,
  maxWidth: 264,


})
