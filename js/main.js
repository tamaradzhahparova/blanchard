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
  if (
    e.target.className != "simplebar-content" &&
    e.target.className != "header-menu__text"
  ) {
    document.querySelectorAll(".header-menu-dropdown").forEach((tabContent) => {
      tabContent.classList.remove("dropdown_active");
    });
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
  });



// SWIPERS //

const swiper = new Swiper('.hero-swiper', {
  // Optional parameters
  loop: true,

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
window.addEventListener('resize',function() {
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

//убираем свайпер на моб устройствах

if (document.documentElement.clientWidth <= 430) {
  swiper3.destroy()
  spoiler()
}









