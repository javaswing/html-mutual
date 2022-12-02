function sleep(t) {
    return (
      (t = t || 1e3),
      new Promise(function (e) {
        setTimeout(function () {
          e();
        }, t);
      })
    );
  }

jQuery(function () {
  const mediaQuery = window.matchMedia("screen and (max-width: 1023px)");

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
        leave: function() {
            let self = this;
            
        }
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
        window.addEventListener("resize", e),
          window.addEventListener("load", e);
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
          x: (e) => {
            return e * itemWidth + t},
          modifiers: {
            x: (t) => {
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
        console.log('move end')
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
        console.log('m before :>> ', m);
        console.log('p before :>> ', p );
          g((m = m * (1 - (n = 0.1)) + p * n));
          console.log('g() m :>> ', m);
          // console.log('n :>> ', n);
          // console.log('p :>> ', p);
          
          (f = m - d);
          console.log('d :>> ', d);
          console.log('m :>> ', m);
          (d = m);
          console.log('d after :>> ', d);
          console.log(' 1 - 0.005 * Math.min(100, Math.abs(f)) :>> ',  1 - 0.005 * Math.min(100, Math.abs(f)));
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

  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    // 鼠标光点处理
    let config = {
      element: document.querySelector("#cursor"),
      states: {
        click: { scale: 1 },
        default: { scale: 0.5 },
        play: { scale: 1 },
        close: { scale: 1 },
        stop: { scale: 1 },
        drag: { scale: 1 },
        view: { scale: 1, z: 0 },
      },
    };
    gsap.to(config.element, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    document.onmousemove = function (event) {
      const { clientX, clientY, target } = event;

      // init
      gsap.to(config.element, 1.3, { x: clientX, y: clientY }, 0.01);

      const status =
        target &&
        target.attributes["data-cursor"] &&
        target.attributes["data-cursor"].value
          ? target.attributes["data-cursor"].value
          : "default";
      const text =
        target &&
        target.attributes["data-cursor-label"] &&
        target.attributes["data-cursor-label"].value
          ? target.attributes["data-cursor-label"].value
          : "";

      // move
      gsap.to(
        config.element,
        1.3,
        config.states[status] || config.states.default,
        0.5,
        { y: 0, visibility: "visible", opacity: 1, stagger: 0.05 },
        0.01
      );
      config.element.className = "has-" + status + "-icon";
      config.element.innerText = text;
    };
  }

  function menuHandle(t) {
    if (t.matches) {
      var n = function () {
        var t = gsap.timeline();
        t.to(".megamenu-navigation .slide-line", {
          duration: 0.5,
          y: 50,
          stagger: 0.025,
        }),
          t.to(".menumenu-bg", {
            duration: 0.5,
            height: "0%",
          }),
          t.to(".megamenu", {
            duration: 0.5,
            zIndex: -1,
            visibility: "hidden",
            opacity: 0,
          });
      };
      document.addEventListener(
        "touchmove",
        function (t) {
          1 != jQuery(t.target).closest(".megamenu").length && t.preventDefault();
        },
        {
          passive: !1,
        }
      ),
        jQuery(".megamenu a").on("click", function () {
          n(),
            setTimeout(function () {
              jQuery("#menu-toggle").removeClass("is-open"),
                jQuery("body").removeClass("is-open");
            }, 1e3);
        }),
        jQuery("#menu-toggle").on("click", function (t) {
          jQuery(this).toggleClass("is-open"),
            jQuery("body").toggleClass("is-open"),
            jQuery("body").hasClass("is-open")
              ? setTimeout(function () {
                  !(function () {
                    var t = gsap.timeline();
                    t.set(".megamenu", {
                      zIndex: -1,
                      visibility: "hidden",
                      opacity: 0,
                    }),
                      t.set(".megamenu-navigation .slide-line", {
                        y: 50,
                        stagger: 0.025,
                      }),
                      t.to(".megamenu", {
                        duration: 0.5,
                        zIndex: 40,
                        visibility: "visible",
                        opacity: 1,
                      }),
                      t.to(".menumenu-bg", {
                        duration: 0.5,
                        height: "100%",
                      }),
                      t.to(".megamenu-navigation .slide-line", {
                        duration: 0.8,
                        y: 0,
                        stagger: 0.025,
                      });
                  })();
                }, 150)
              : setTimeout(function () {
                  n();
                }, 150);
        });
    }
  }

  menuHandle(mediaQuery);

  Promise.all([
    (function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "img";
      return new Promise(function (e) {
        imagesLoaded(
          document.querySelectorAll(t),
          {
            background: true,
          },
          e
        );
      });
    })("img"),
  ]).then(function () {});

  // 这里应该是barba调用。暂时手动调用
  initGalleryItem();

  main();
});
