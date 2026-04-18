const nav = $("nav");
const navOffset = nav.outerHeight();
$("body").css("margin-top", navOffset + "px");

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const toggle = document.querySelector(".mobile-island-toggle");

  navLinks.classList.toggle("active");
  toggle.classList.toggle("active-toggle");
}

$(document).ready(function () {
  $(".spinner").fadeOut(300, () => {
    $("#loading").fadeOut(300, () => {
      $("body").css("overflow-y", "auto");
    });
  });
});

$(window).on("scroll", function () {
  if ($(window).width() < 768) return;

  let scrollPos = $(window).scrollTop();

  if ($("section").eq(1).length) {
    let sectionOffset = $("section").eq(1).offset().top;

    if (scrollPos >= sectionOffset - 20) {
      nav.addClass("is-fixed").removeClass("hide-nav");
    } else {
      if (nav.hasClass("is-fixed")) {
        nav.addClass("hide-nav");
        $("body").css("margin-top", $("nav").outerHeight());

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
  if ($(window).width() >= 768) {
    const navLinks = document.getElementById("navLinks");
    const toggle = document.querySelector(".mobile-island-toggle");

    navLinks.classList.remove("active");
    toggle.classList.remove("active-toggle");
  }
});

$(window).on("resize", function () {
  if ($(window).width() < 768) {
    nav.removeClass("is-fixed hide-nav");
    $("body").css("margin-top", 0);
  }
});
