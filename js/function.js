
const kt = window.jQuery;
const gt = LocomotiveScroll;

const Dt = window.matchMedia("screen and (max-width: 1023px)");
function Lt(t) {
    if (t.matches) {
        var n = function() {
            var t = e().timeline();
            t.to(".megamenu-navigation .slide-line", {
                duration: .5,
                y: 50,
                stagger: .025
            }),
            t.to(".menumenu-bg", {
                duration: .5,
                height: "0%"
            }),
            t.to(".megamenu", {
                duration: .5,
                zIndex: -1,
                visibility: "hidden",
                opacity: 0
            })
        };
        document.addEventListener("touchmove", (function(t) {
            1 != kt(t.target).closest(".megamenu").length && t.preventDefault()
        }
        ), {
            passive: !1
        }),
        kt(".megamenu a").on("click", (function() {
            n(),
            setTimeout((function() {
                kt("#menu-toggle").removeClass("is-open"),
                kt("body").removeClass("is-open")
            }
            ), 1e3)
        }
        )),
        kt("#menu-toggle").on("click", (function(t) {
            kt(this).toggleClass("is-open"),
            kt("body").toggleClass("is-open"),
            kt("body").hasClass("is-open") ? setTimeout((function() {
                !function() {
                    var t = e().timeline();
                    t.set(".megamenu", {
                        zIndex: -1,
                        visibility: "hidden",
                        opacity: 0
                    }),
                    t.set(".megamenu-navigation .slide-line", {
                        y: 50,
                        stagger: .025
                    }),
                    t.to(".megamenu", {
                        duration: .5,
                        zIndex: 40,
                        visibility: "visible",
                        opacity: 1
                    }),
                    t.to(".menumenu-bg", {
                        duration: .5,
                        height: "100%"
                    }),
                    t.to(".megamenu-navigation .slide-line", {
                        duration: .8,
                        y: 0,
                        stagger: .025
                    })
                }()
            }
            ), 150) : setTimeout((function() {
                n()
            }
            ), 150)
        }
        ))
    }
}
 
function Et() {
    var t = gsap.timeline();
    t.to(".home .gallery__item-img .gallery__item-post", .5, {
        duration: .5,
        ease: Sine.easeInOut,
        scale: .5,
        stagger: .025
    }),
    t.to(".home .gallery__item-img .gallery__item-post", .5, {
        duration: .5,
        ease: Sine.easeInOut,
        width: "0%",
        stagger: .025
    }),
    t.to(".page-transition", .5, {
        duration: .5,
        height: "100%",
        top: "0%"
    }),
    t.to(".page-loading-logo-wrap", .5, {
        duration: .5,
        zIndex: 1,
        visibility: "visible",
        opacity: 1
    }),
    t.set(".page-loading-logo-wrap", {
        visibility: "hidden",
        opacity: 0,
        zIndex: -1,
        delay: .5
    }),
    t.to(".page-transition", .5, {
        duration: .5,
        height: "100%",
        top: "100%",
        delay: .3
    }),
    t.set(".page-transition", {
        top: "-100%"
    })
}

function St() {
    var t = gsap.timeline();
    t.to(".page-transition", .5, {
        duration: .5,
        height: "100%",
        top: "0%"
    }),
    t.to(".page-loading-logo-wrap", .5, {
        duration: .5,
        zIndex: 1,
        visibility: "visible",
        opacity: 1
    }),
    t.set(".page-loading-logo-wrap", {
        visibility: "hidden",
        opacity: 0,
        zIndex: -1,
        delay: .5
    }),
    t.to(".page-transition", .5, {
        duration: .5,
        height: "100%",
        top: "100%",
        delay: .3
    }),
    t.set(".page-transition", {
        top: "-100%"
    })
}






function At() {
    if (kt(".home").length) {
        var t = gsap.timeline();
        t.to(".home .gallery__item-img .gallery__item-post", .5, {
            duration: .5,
            ease: Power3.easeOut,
            scale: .5,
            stagger: .05,
            delay: 2.5
        }),
        t.to(".home .gallery__item-img .gallery__item-post", .5, {
            duration: .5,
            ease: Power3.easeOut,
            width: "100%",
            stagger: .05
        }),
        t.to(".home .gallery__item-img .gallery__item-post", .5, {
            duration: .1,
            ease: Sine.easeInOut,
            scale: 1,
            stagger: .05
        })
    }
}


function Ct() {
    if (kt(".home").length) {
        var t = gsap.timeline();
        t.to(".home .gallery__item-img .gallery__item-post", .5, {
            duration: .5,
            ease: Power3.easeOut,
            scale: .5,
            stagger: .05
        }),
        t.to(".home .gallery__item-img .gallery__item-post", .5, {
            duration: .5,
            ease: Power3.easeOut,
            width: "100%",
            stagger: .05
        }),
        t.to(".home .gallery__item-img .gallery__item-post", .5, {
            duration: .1,
            ease: Sine.easeInOut,
            scale: 1,
            stagger: .05
        })
    }
}

(Tt = gsap.timeline()).set(".page-transition", {
    duration: .5,
    height: "100%",
    top: "0%"
}),
Tt.to(".page-loading-logo-wrap", .5, {
    duration: .5,
    zIndex: 1,
    visibility: "visible",
    opacity: 1
}),
window.setTimeout((function() {
    document.body.classList.remove("is-ready");
    var t = gsap.timeline();
    t.to(".page-loading-logo-wrap", .5, {
        visibility: "hidden",
        opacity: 0,
        zIndex: -1,
        delay: .5
    }),
    t.to(".page-transition", .5, {
        duration: .5,
        height: "100%",
        top: "100%",
        delay: .3
    }),
    t.set(".page-transition", {
        top: "-100%"
    })
}
), 2500);

function Pt() {
    if ("true" == document.querySelector("[data-scroll-container]").getAttribute("data-horizontal")) {
        var t = new gt({
            el: document.querySelector("[data-scroll-container]"),
            smooth: !0,
            getSpeed: !0,
            getDirection: !0,
            direction: "horizontal",
            gestureDirection: "both",
            multiplier: 1.5,
            touchMultiplier: 1.5,
            smartphone: {
                direction: "horizontal",
                smooth: !0,
                horizontalGesture: !0,
                gestureDirection: "both",
                multiplier: 1.5,
                touchMultiplier: 1.5
            },
            tablet: {
                breakpoint: 1024,
                smooth: !0,
                direction: "horizontal",
                horizontalGesture: !0,
                gestureDirection: "both",
                multiplier: 1.5,
                touchMultiplier: 1.5
            }
        });
        setTimeout((function(t) {
            kt(window).trigger("resize"),
            t.update()
        }
        ), 500, t)
    } else {
        var n, r, i = new gt({
            el: document.querySelector("[data-scroll-container]"),
            smooth: !0,
            smoothMobile: !0,
            getSpeed: !1,
            getDirection: !1,
            multiplier: 1.5,
            touchMultiplier: 1.5,
            direction: "vertical",
            smartphone: (n = {
                smooth: 1,
                direction: "vertical"
            },
            bt(n, "smooth", !0),
            bt(n, "multiplier", 1.5),
            bt(n, "touchMultiplier", 1.5),
            n),
            tablet: (r = {
                breakpoint: 1024,
                smooth: 1
            },
            bt(r, "smooth", !0),
            bt(r, "direction", "vertical"),
            bt(r, "multiplier", 1.5),
            bt(r, "touchMultiplier", 1.5),
            r)
        });
        kt(document).ready((function() {
            kt(".tab-menu-item").on("click", (function() {
                kt(".tab-content").removeClass("active"),
                kt(".tab-content[data-id='" + kt(this).attr("data-id") + "']").addClass("active"),
                kt(".tab-menu-item").removeClass("active"),
                kt(this).parent().find(".tab-menu-item").addClass("active"),
                setTimeout((function(t) {
                    kt(window).trigger("resize"),
                    t.update()
                }
                ), 500, i)
            }
            ))
        }
        )),
        setTimeout((function(t) {
            kt(window).trigger("resize"),
            t.update()
        }
        ), 500, i)
    }
    var o = window.matchMedia("screen and (max-width: 1023px)");
    function s(t) {
        if (t.matches) {
            var e = function() {
                var t = .01 * window.innerHeight;
                document.documentElement.style.setProperty("--vh", t + "px")
            };
            window.addEventListener("resize", e),
            window.addEventListener("load", e)
        }
    }
    if (o.addListener(s),
    s(o),
    kt(".home").length) {
        var a = document.querySelector("#top-works-gallery")
          , l = document.querySelectorAll(".gallery__item")
          , c = (document.querySelectorAll(".gallery__item-img"),
        document.querySelectorAll(".gallery__item-post"))
          , u = (a.clientWidth,
        l[0].clientWidth)
          , h = l.length * u
          , f = (c[0],
        0)
          , d = 0
          , p = 0
          , m = 0
          , g = function(t) {
           gsap.set(l, {
                x: function(e) {
                    return e * u + t
                },
                modifiers: {
                    x: function(t, n) {
                        var r = gsap.utils.wrap(-u, h - u, parseInt(t));
                        return "".concat(r, "px")
                    }
                }
            })
        };
        g(0);
        var v = 0
          , y = 0
          , b = !1
          , w = function(t) {
            v = t.clientX || t.touches[0].clientX,
            b = !0,
            a.classList.add("is-dragging")
        }
          , x = function(t) {
            b && (y = t.clientX || t.touches[0].clientX,
            p += 5 * (y - v),
            v = y)
        }
          , _ = function() {
            b = !1,
            a.classList.remove("is-dragging")
        };
        a.addEventListener("mousewheel", (function(t) {
            p -= .9 * t.deltaY,
            p -= .9 * t.deltaX
        }
        )),
        a.addEventListener("touchstart", w),
        a.addEventListener("touchmove", x),
        a.addEventListener("touchend", _),
        a.addEventListener("mousedown", w),
        a.addEventListener("mousemove", x),
        a.addEventListener("mouseleave", _),
        a.addEventListener("mouseup", _),
        a.addEventListener("selectstart", (function() {
            return !1
        }
        )),
        window.addEventListener("resize", (function() {
            a.clientWidth,
            u = l[0].clientWidth,
            h = l.length * u
        }
        )),
        window.addEventListener("load", (function() {
            a.clientWidth,
            u = l[0].clientWidth,
            h = l.length * u
        }
        ), !1);
        !function t() {
            var n;
            requestAnimationFrame(t),
            g(m = m * (1 - (n = .1)) + p * n),
            f = m - d,
            d = m,
            gsap.to(l, {
                scale: 1 - .005 * Math.min(100, Math.abs(f))
            })
        }()
    }
    for (var T = document.querySelectorAll("a[href]"), k = function(t) {
        t.currentTarget.href === window.location.href && (t.preventDefault(),
        t.stopPropagation())
    }, E = 0; E < T.length; E++)
        T[E].addEventListener("click", k);
    if (kt(".js-modal-open").on("click", (function() {
        var t = kt(this).data("target")
          , e = document.getElementById(t);
        return kt(this.hash).find("video").get(0).play(),
        kt("body").addClass("fixed"),
        kt(e).fadeIn(),
        !1
    }
    )),
    kt(".js-modal-close").on("click", (function() {
        return kt(this.hash).find("video").get(0).pause(),
        kt("body").removeClass("fixed"),
        kt(".js-modal").fadeOut(),
        !1
    }
    )),
    kt("#toggle-switch").on("change", (function() {
        kt(this).prop("checked") ? (kt("html").removeClass("is-light"),
        kt("html").addClass("is-dark")) : (kt("html").addClass("is-light"),
        kt("html").removeClass("is-dark"))
    }
    )),
    kt((function() {
        kt("#category-works-list .works-post a").each((function(t) {
            kt("#category-works-list-bg .works-post-images").removeClass("active"),
            kt(this).hover((function() {
                kt("#category-works-list-bg .works-post-images:nth-child(" + (t + 1) + ")").toggleClass("active")
            }
            ), (function() {
                kt("#category-works-list-bg .works-post-images").removeClass("active")
            }
            ))
        }
        )),
        kt("#top-works-gallery-title-wrap .top-works-gallery-title").removeClass("active"),
        kt("#top-works-gallery .gallery__item a").each((function(t) {
            kt(this).hover((function() {
                kt("#top-works-gallery-title-wrap .top-works-gallery-title").removeClass("active"),
                kt("#top-works-gallery-title-wrap .top-works-gallery-title:nth-child(" + (t + 1) + ")").toggleClass("active")
            }
            ), (function() {
                kt("#top-works-gallery-title-wrap .top-works-gallery-title").removeClass("active")
            }
            ))
        }
        ))
    }
    )),
    !navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
        var S = function(t) {
            var e, n, r, i;
            C(t.clientX, t.clientY);
            var o = (null === (e = t.target) || void 0 === e || null === (n = e.attributes["data-cursor"]) || void 0 === n ? void 0 : n.value) || "default"
              , s = (null === (r = t.target) || void 0 === r || null === (i = r.attributes["data-cursor-label"]) || void 0 === i ? void 0 : i.value) || "";
            A(o, s)
        }
          , A = function(t, n) {
            gsap.to(O.element, 1.3, O.states[t] || O.states.default, .5, {
                y: 0,
                visibility: "visible",
                opacity: 1,
                stagger: .05
            }, .01),
            O.element.className = "has-".concat(t, "-icon"),
            O.element.innerText = n
        }
          , C = function(t, n) {
            gsap.to(O.element, 1.3, {
                x: t,
                y: n
            }, .01)
        }
          , O = {
            element: document.querySelector("#cursor"),
            states: {
                click: {
                    scale: 1
                },
                default: {
                    scale: .5
                },
                play: {
                    scale: 1
                },
                close: {
                    scale: 1
                },
                stop: {
                    scale: 1
                },
                drag: {
                    scale: 1
                },
                view: {
                    scale: 1,
                    z: 0
                }
            }
        };
        gsap.set(O.element, {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }),
        document.onmousemove = S
    }
}


// 图片初始化动画
// At();

// Ct();

// 11735 行为@barba/core设置开始

// Pt();

// Dt.addEventListener(Lt)
Lt(Dt),
Promise.all([function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "img";
    return new Promise((function(e) {
        imagesLoaded(document.querySelectorAll(t), {
            background: !0
        }, e)
    }
    ))
}("img")]).then((function() {})),

Pt();
