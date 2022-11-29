// loading 动画部分
const timeLine = gsap.timeline();

timeLine.set(".page-transition", {
  duration: 0.5,
  height: "100%",
  top: "0%",
});

timeLine.to(".page-loading-logo-wrap", 0.5, {
  duration: 0.5,
  zIndex: 1,
  visibility: "visible",
  opacity: 1,
});

window.setTimeout(function () {
  document.body.classList.remove("is-ready");
  const timeLine = gsap.timeline();
  timeLine.to(".page-loading-logo-wrap", 0.5, {
    visibility: "hidden",
    opacity: 0,
    zIndex: -1,
    delay: 0.5,
  });
  timeLine.to(".page-transition", 0.5, {
    duration: 0.5,
    height: "100%",
    top: "100%",
    delay: 0.3,
  });
  timeLine.set(".page-transition", {
    top: "-100%",
  });
}, 2500);

// 页面切换过渡特效
barba.init({
  sync: true,
  debug: false,
  timeout: 4000,
  prefetchIgnore: true,
  prevent: function (t) {
    return "#" === t.el.getAttribute("href").slice(0, 1);
  },
  transitions: [
    {
      // @todo
    },
  ],
});

function initGalleryItem() {
  if (jQuery(".home").length) {
    var t = gsap.timeline();
    t.to(".home .gallery__item-img .gallery__item-post", 0.5, {
      duration: 0.5,
      ease: Power3.easeOut,
      scale: 0.5,
      stagger: 0.05,
      delay: 2.5,
    }),
      t.to(".home .gallery__item-img .gallery__item-post", 0.5, {
        duration: 0.5,
        ease: Power3.easeOut,
        width: "100%",
        stagger: 0.05,
      }),
      t.to(".home .gallery__item-img .gallery__item-post", 0.5, {
        duration: 0.1,
        ease: Sine.easeInOut,
        scale: 1,
        stagger: 0.05,
      });
  }
}

function LeavePageGalleryItemAnimation() {
  if (jQuery(".home").length) {
    var t = gsap.timeline();
    t.to(".home .gallery__item-img .gallery__item-post", 0.5, {
      duration: 0.5,
      ease: Power3.easeOut,
      scale: 0.5,
      stagger: 0.05,
    }),
      t.to(".home .gallery__item-img .gallery__item-post", 0.5, {
        duration: 0.5,
        ease: Power3.easeOut,
        width: "100%",
        stagger: 0.05,
      }),
      t.to(".home .gallery__item-img .gallery__item-post", 0.5, {
        duration: 0.1,
        ease: Sine.easeInOut,
        scale: 1,
        stagger: 0.05,
      });
  }
}

function main() {
  if (
    "true" ==
    document
      .querySelector("[data-scroll-container]")
      .getAttribute("data-horizontal")
  ) {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      getSpeed: true,
      getDirection: true,
      direction: "horizontal",
      gestureDirection: "both",
      multiplier: 1.5,
      touchMultiplier: 1.5,
      smartphone: {
        direction: "horizontal",
        smooth: true,
        horizontalGesture: true,
        gestureDirection: "both",
        multiplier: 1.5,
        touchMultiplier: 1.5,
      },
      tablet: {
        breakpoint: 1024,
        smooth: true,
        direction: "horizontal",
        horizontalGesture: true,
        gestureDirection: "both",
        multiplier: 1.5,
        touchMultiplier: 1.5,
      },
    });
    setTimeout(
      function (scroll) {
        jQuery(window).trigger("resize"), scroll.update();
      },
      500,
      scroll
    );
  } else {
    // @todo
  }

  let matchMediaList = window.matchMedia("screen and (max-width: 1023px)");
  function s(t) {
    if (t.matches) {
      var e = function () {
        var t = 0.01 * window.innerHeight;
        document.documentElement.style.setProperty("--vh", t + "px");
      };
      window.addEventListener("resize", e), window.addEventListener("load", e);
    }
  }
  s(matchMediaList);

  if (jQuery(".home").length) {
    let galleryDom = document.querySelector("#top-works-gallery");
    let galleryItemListDom = document.querySelectorAll(".gallery__item");
    // let imgPost = document.querySelectorAll(".gallery__item-post");
    let itemWidth = galleryItemListDom[0].clientWidth;
    let totalWidth = galleryItemListDom.length * itemWidth;

    let f = 0;
    let d = 0;
    let p = 0;
    let m = 0;

    const g = function (t) {
      gsap.set(galleryItemListDom, {
        x: (e) => e * itemWidth + t,
        modifiers: {
          x: (t, n) => {
            const tmp = gsap.utils.wrap(
              -itemWidth,
              totalWidth - itemWidth,
              parseInt(t)
            );
            return tmp + "px";
          },
        },
      });
    };

    g(0);

    let flag = false;
    let starX = 0;
    let endX = 0;

    const starHandle = function (t) {
      starX = t.clientX || t.touches[0].clientX;
      flag = true;
      galleryDom.classList.add("is-dragging");
    };

    const endHandle = function () {
      flag = false;
      galleryDom.classList.remove("is-dragging");
    };

    const moveHandle = function (t) {
      if (flag) {
        endX = t.clientX || t.touches[0].clientX;
        p += 5 * (endX - starX);
        starX = endX;
      }
    };

    galleryDom.addEventListener("touchstart", starHandle);
    galleryDom.addEventListener("mousedown", starHandle);

    galleryDom.addEventListener("mouseleave", endHandle);
    galleryDom.addEventListener("mouseup", endHandle);
    galleryDom.addEventListener("touchend", endHandle);

    galleryDom.addEventListener("mousemove", moveHandle);
    galleryDom.addEventListener("touchmove", moveHandle);

    galleryDom.addEventListener("mousewheel", function (t) {
      (p -= 0.9 * t.deltaY), (p -= 0.9 * t.deltaX);
    });

    galleryDom.addEventListener("selectstart", function () {
      return false;
    });

    window.addEventListener("resize", function () {
      itemWidth = galleryItemListDom[0].clientWidth;
      totalWidth = galleryItemListDom.length * itemWidth;
    });
    window.addEventListener(
      "load",
      function () {
        itemWidth = galleryItemListDom[0].clientWidth;
        totalWidth = galleryItemListDom.length * itemWidth;
      },
      false
    );

    !(function t() {
      var n;
      requestAnimationFrame(t),
        g((m = m * (1 - (n = 0.1)) + p * n)),
        (f = m - d),
        (d = m),
        gsap.to(galleryItemListDom, {
          scale: 1 - 0.005 * Math.min(100, Math.abs(f)),
        });
    })();
  }
}

// 拦截a标签事件
const clickHandle = (t) => {
  t.currentTarget.href === window.location.href &&
    (t.preventDefault(), t.stopPropagation());
};

const allADom = document.querySelectorAll("a[href]");

for (let index = 0; index < allADom.length; index++) {
  const element = allADom[index];
  element.addEventListener("click", clickHandle);
}

// 移动状态下菜单监听
jQuery(".js-modal-open").on("click", function () {
  var t = jQuery(this).data("target"),
    e = document.getElementById(t);
  return (
    jQuery(this.hash).find("video").get(0).play(),
    jQuery("body").addClass("fixed"),
    jQuery(e).fadeIn(),
    !1
  );
});

jQuery(".js-modal-close").on("click", function () {
  return (
    jQuery(this.hash).find("video").get(0).pause(),
    jQuery("body").removeClass("fixed"),
    jQuery(".js-modal").fadeOut(),
    !1
  );
});

// 主题切换事件
jQuery("#toggle-switch").on("change", function () {
  jQuery(this).prop("checked")
    ? (jQuery("html").removeClass("is-light"),
      jQuery("html").addClass("is-dark"))
    : (jQuery("html").addClass("is-light"),
      jQuery("html").removeClass("is-dark"));
});


if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) { // 鼠标光点处理

}

Promise.all([
  (function () {
    var t =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "img";
    return new Promise(function (e) {
      imagesLoaded(
        document.querySelectorAll(t),
        {
          background: !0,
        },
        e
      );
    });
  })("img"),
]).then(function () {}),
  initGalleryItem();

main();
