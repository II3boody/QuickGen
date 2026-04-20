$(document).ready(function () {
  $(".spinner").fadeOut(300, () => {
    $("#loading").fadeOut(300, () => {
      $("body").css("overflow-y", "auto");
    });
  });
});

const nav = $("nav");

if (nav.length > 0) {
  const navOffset = nav.outerHeight();
  $("body").css("margin-top", navOffset + "px");

  $(window).on("scroll", function () {
    if ($(window).width() < 768) return;

    let scrollPos = $(window).scrollTop();
    let sections = $("section");

    if (sections.length > 1) {
      let sectionOffset = sections.eq(1).offset().top;

      if (scrollPos >= sectionOffset - 20) {
        nav.addClass("is-fixed").removeClass("hide-nav");
      } else {
        if (nav.hasClass("is-fixed")) {
          nav.addClass("hide-nav");
          $("body").css("margin-top", nav.outerHeight());

          setTimeout(() => {
            nav.removeClass("is-fixed hide-nav");
          }, 300);
        } else {
          $("body").css("margin-top", 0);
        }
      }
    }
  });

  $(window).on("resize", function () {
    const navLinks = document.getElementById("navLinks");
    const toggle = document.querySelector(".mobile-island-toggle");

    if ($(window).width() >= 768) {
      if (navLinks) navLinks.classList.remove("active");
      if (toggle) toggle.classList.remove("active-toggle");
    }

    if ($(window).width() < 768) {
      nav.removeClass("is-fixed hide-nav");
      $("body").css("margin-top", 0);
    }
  });
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const toggle = document.querySelector(".mobile-island-toggle");

  if (navLinks && toggle) {
    navLinks.classList.toggle("active");
    toggle.classList.toggle("active-toggle");
  }
}

let path = window.location.pathname;
let page = path.split("/").pop();

if (
  page == "index.html" ||
  page == "" ||
  document.title.toLowerCase().includes("home")
) {
  function iniatAdvert() {
    const adContainer = document.querySelector("#adContainer");
    if (!adContainer) return;

    let frag = ``;
    for (let i = 0; i < 7; i++) {
      frag += `<div class="swiper-slide"><img src="assets/imgs/Logo${i + 1}.png" alt="advert"></div>`;
    }
    adContainer.innerHTML = frag;
  }
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    breakpoints: {
      640: { slidesPerView: 2 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 6 },
    },
  });

  const features = [
    {
      title: "تعلم تفاعلي",
      description: "كل درس يتضمن تمارين عملية وتطبيقات حقيقية.",
      icon: "fa-bolt",
    },
    {
      title: "مسار تعليمي واضح",
      description: "منهج منظم ومدروس يأخذك خطوة بخطوة.",
      icon: "fa-bullseye",
    },
    {
      title: "جاهز لسوق العمل",
      description: "المحتوى مصمم يخليك تبدأ شغل Freelance مباشرة.",
      icon: "fa-award",
    },
    {
      title: "سرعة في الإنجاز",
      description: "استخدم الذكاء الاصطناعي عشان تنفذ مهامك أسرع.",
      icon: "fa-bolt-lightning",
    },
    {
      title: "أدوات حديثة",
      description: "تعلم استخدام أحدث أدوات الذكاء الاصطناعي.",
      icon: "fa-microchip",
    },
    {
      title: "شهادات معتمدة",
      description: "احصل على شهادات موثقة ومعتمدة.",
      icon: "fa-certificate",
    },
  ];

  const testimonials = [
    {
      name: "إميلي رودريغيز",
      job: "منشئة محتوى",
      image: "https://i.pravatar.cc/150?u=1",
      comment: "أفضل استثمار قمت به في مسيرتي المهنية.",
      stars: 5,
    },
    {
      name: "مايكل تشين",
      job: "أخصائي أتمتة",
      image: "https://i.pravatar.cc/150?u=2",
      comment: "ميزة صندوق التجارب ساعدتني على التعلم أسرع.",
      stars: 5,
    },
    {
      name: "سارة جونسون",
      job: "مصممة جرافيك",
      image: "https://i.pravatar.cc/150?u=3",
      comment: "انتقلت من مبتدئة إلى كسب 5000 دولار شهرياً.",
      stars: 5,
    },
    {
      name: "سارة محمد",
      job: "مستقلة",
      image: "https://i.pravatar.cc/150?u=4",
      comment: "المسارات التعليمية هنا واضحة جداً.",
      stars: 5,
    },
    {
      name: "أحمد خالد",
      job: "مطور واجهات",
      image: "https://i.pravatar.cc/150?u=5",
      comment: "كورس الـ Front-End غير نظرتي للبرمجة.",
      stars: 5,
    },
    {
      name: "ليلى حسن",
      job: "تسويق رقمي",
      image: "https://i.pravatar.cc/150?u=6",
      comment: "أدوات التوليد خلتني أعمل خطط في دقائق.",
      stars: 5,
    },
    {
      name: "ياسين علي",
      job: "كاتب محتوى",
      image: "https://i.pravatar.cc/150?u=7",
      comment: "اتعلمت إزاي أخلي الـ AI المساعد بتاعي.",
      stars: 5,
    },
  ];

  // features card (how to section)
  function displayFeatCards() {
    const featuresContainer = document.querySelector("#featuresContainer");
    if (!featuresContainer) return;

    let frag = ``;
    features.forEach((feature) => {
      const cardHTML = `
        <div class="card d-flex flex-column align-items-start text-white p-4 gap-4 rad-16">
          <div class="icon d-flex justify-content-center align-items-center">
            <i class="fa-solid ${feature.icon}"></i>
          </div>
          <div class="info d-flex flex-column gap-3">
            <h2 class="fs-4 fw-bold m-0">${feature.title}</h2>
            <p class="m-0">${feature.description}</p>
          </div>
        </div>
      `;
      frag += cardHTML;
    });
    featuresContainer.innerHTML = frag;
  }

  function displayTestimonials() {
    const wrapper = document.getElementById("testimonials-wrapper");
    if (!wrapper) return;
    let frag = "";
    testimonials.forEach((item) => {
      let starsHTML = "";
      for (let i = 0; i < item.stars; i++) {
        starsHTML += '<i class="fa-solid fa-star text-warning"></i> ';
      }
      frag += `
      <div class="swiper-slide">
        <div class="card p-4 text-white rad-16 h-100 d-flex flex-column justify-content-between">
          <div>
            <div class="stars mb-3">${starsHTML}</div>
            <p class="comment mb-4 fs-5" style="line-height: 1.8;">"${item.comment}"</p>
          </div>
          <div class="user-info d-flex align-items-center gap-3">
            <img src="${item.image}" alt="${item.name}" class="rounded-circle" style="width: 50px; height: 50px; object-fit: cover;">
            <div class="text-start">
              <h6 class="m-0 fw-bold">${item.name}</h6>
              <small class="text-secondary">${item.job}</small>
            </div>
          </div>
        </div>
      </div>`;
    });
    wrapper.innerHTML = frag;

    new Swiper(".testimonialsSwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 1000 },
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    displayFeatCards();
    displayTestimonials();
    iniatAdvert();
  });
} else if (page == "Educational.html") {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      window.location.href = "view-educational-page.html";
    });
  });
} else if (page == "sign-up.html") {
  const signUpForm = document.querySelector("#signup-form");
  if (signUpForm) {
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = signUpForm.querySelector('input[type="text"]').value;
      const email = signUpForm.querySelector('input[type="email"]').value;
      const password = signUpForm.querySelector('input[type="password"]').value;

      if (name && email && password) {
        const user = { name, email, password };
        localStorage.setItem(email, JSON.stringify(user));

        alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.");
        window.location.href = "sign-in.html";
      } else {
        alert("يرجى ملء جميع الحقول");
      }
    });
  }
} else if (page == "sign-in.html") {
  const signInForm = document.querySelector("#signin-form");
  if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = signInForm.querySelector('input[type="email"]').value;
      const password = signInForm.querySelector('input[type="password"]').value;
      const storedUser = localStorage.getItem(email);

      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
          sessionStorage.setItem("isLoggedIn", "true");
          sessionStorage.setItem("userName", user.name);

          window.location.href = "index.html";
        } else {
          alert("كلمة المرور غير صحيحة!");
        }
      } else {
        alert("هذا الحساب غير موجود، يرجى إنشاء حساب أولاً.");
      }
    });
  }
}
