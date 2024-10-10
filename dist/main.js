(() => {
    "use strict";
    const e = ({
        formId: e,
        someElem: t = []
    }) => {
        const o = document.getElementById(e),
            r = document.createElement("div");
        try {
            if (!o) throw new Error("Вверни форму на место, пожалуйста");
            o.addEventListener("submit", (e => {
                e.preventDefault(), (() => {
                    const e = o.querySelectorAll("input"),
                        c = new FormData(o),
                        n = {};
                    var a;
                    r.textContent = "Загрузка...", o.append(r), c.forEach(((e, t) => {
                        n[t] = e
                    })), t.forEach((e => {
                        const t = document.getElementById(e.id);
                        console.log(t), "block" === e.type ? n[e.id] = t.textContent : "input" === e.type && (n[e.id] = e.value)
                    })), (a = n, fetch("https://jsonplaceholder.typicode.com/posts", {
                        method: "POST",
                        body: JSON.stringify(a),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((e => e.json()))).then((t => {
                        r.textContent = "Спасибо! Наш менеджер с Вами свяжется!", e.forEach((e => {
                            e.value = ""
                        }))
                    })).catch((e => {
                        r.textContent = "Ошибка..."
                    }))
                })()
            }))
        } catch (e) {
            console.log(e.message)
        }
    };
    (() => {
        const e = document.getElementById("timer-hours"),
            t = document.getElementById("timer-minutes"),
            o = document.getElementById("timer-seconds"),
            r = document.getElementById("timer-days");
        let c;
        const n = () => {
            let n = (() => {
                let e = (new Date("26 september 2024 12:45:00").getTime() - (new Date).getTime()) / 1e3;
                e < 0 && (e = 0);
                let t = Math.floor(e / 60 / 60 / 24),
                    o = Math.floor(e / 60 / 60 % 24),
                    r = Math.floor(e / 60 % 60),
                    c = Math.floor(e % 60);
                return t = t < 10 ? "0" + t : t, o = o < 10 ? "0" + o : o, r = r < 10 ? "0" + r : r, c = c < 10 ? "0" + c : c, {
                    timeRemaining: e,
                    days: t,
                    hours: o,
                    minutes: r,
                    seconds: c
                }
            })();
            r.textContent = n.days, e.textContent = n.hours, t.textContent = n.minutes, o.textContent = n.seconds, 0 === n.timeRemaining && clearInterval(c)
        };
        n(), c = setInterval(n, 1e3)
    })(), (() => {
        const e = document.querySelector("menu"),
            t = document.querySelector("body");
        t.addEventListener("click", (t => {
            (t.target.closest(".menu") || t.target.closest(".close-btn") || t.target.closest("ul>li>a") || !t.target.closest(".active-menu") && e.classList.contains("active-menu")) && e.classList.toggle("active-menu")
        }))
    })(), (() => {
        const e = document.querySelector(".popup"),
            t = document.querySelectorAll(".popup-btn"),
            o = e.querySelector(".popup-close"),
            r = t => {
                window.outerWidth >= 768 ? (t => {
                    ((t, o) => {
                        e.style.opacity = o, (({
                            timing: e,
                            draw: t,
                            duration: o
                        }) => {
                            let r = performance.now();
                            requestAnimationFrame((function c(n) {
                                let a = (n - r) / o;
                                a > 1 && (a = 1);
                                let l = e(a);
                                t(l), a < 1 && requestAnimationFrame(c)
                            }))
                        })({
                            duration: 400,
                            timing: e => e,
                            draw(r) {
                                "block" === t ? (e.style.display = t, e.style.opacity = o + r) : (e.style.opacity = o - r, e.style.opacity <= 0 && (e.style.display = t))
                            }
                        })
                    })(t, "block" == t ? 0 : 1)
                })(t) : (t => {
                    e.style.display = t, e.style.opacity = "block" == t ? 1 : 0
                })(t)
            };
        t.forEach((e => {
            e.addEventListener("click", (e => {
                e.preventDefault(), r("block")
            }))
        })), o.addEventListener("click", (e => {
            e.preventDefault(), r("none")
        }))
    })(), (() => {
        const e = document.querySelector(".calc-item.calc-square"),
            t = document.querySelector(".calc-item.calc-count"),
            o = document.querySelector(".calc-item.calc-day"),
            r = /\D+/;
        e.addEventListener("input", (e => {
            e.target.value = e.target.value.replace(r, "")
        })), t.addEventListener("input", (e => {
            e.target.value = e.target.value.replace(r, "")
        })), o.addEventListener("input", (e => {
            e.target.value = e.target.value.replace(r, "")
        }))
    })(), (() => {
        const e = /[^а-я -]+/gi,
            t = /[^a-z@0-9-_.!~*']+/gi,
            o = /[^0-9()-]/,
            r = t => {
                t.addEventListener("input", (t => {
                    t.target.value = t.target.value.replace(e, "")
                }))
            },
            c = e => {
                e.addEventListener("input", (e => {
                    e.target.value = e.target.value.replace(t, "")
                }))
            },
            n = e => {
                e.addEventListener("input", (e => {
                    e.target.value = e.target.value.replace(o, "")
                }))
            };
        (() => {
            const e = document.querySelector(".form-name"),
                t = document.querySelector(".form-email"),
                o = document.querySelector(".form-phone");
            r(e), c(t), n(o)
        })(), (() => {
            const e = document.querySelector(".top-form"),
                t = document.querySelector(".top-form.form-email"),
                o = document.querySelector(".top-form.form-phone"),
                a = document.querySelector(".mess");
            r(e), r(a), c(t), n(o)
        })(), (() => {
            const e = document.querySelector(".popup"),
                t = e.querySelector(".form-name"),
                o = e.querySelector(".form-phone"),
                a = e.querySelector(".form-email");
            r(t), c(a), n(o)
        })()
    })(), (() => {
        const e = document.querySelectorAll(".service-tab"),
            t = document.querySelectorAll(".service-header-tab");
        document.querySelector(".service-header").addEventListener("click", (o => {
            if (o.target.closest(".service-header-tab")) {
                const r = o.target.closest(".service-header-tab");
                t.forEach(((t, o) => {
                    t === r ? (t.classList.add("active"), e[o].classList.remove("d-none")) : (t.classList.remove("active"), e[o].classList.add("d-none"))
                }))
            }
        }))
    })(), (() => {
        const e = document.querySelector(".portfolio-content"),
            t = document.querySelectorAll(".portfolio-item"),
            o = document.querySelector(".portfolio-dots");
        let r, c = document.querySelectorAll(".dot"),
            n = 0;
        const a = (e, t, o) => {
                e[t].classList.remove(o)
            },
            l = (e, t, o) => {
                e[t].classList.add(o)
            },
            s = () => {
                a(t, n, "portfolio-item-active"), a(c, n, "dot-active"), n++, n >= t.length && (n = 0), l(t, n, "portfolio-item-active"), l(c, n, "dot-active")
            },
            i = (e = 1500) => {
                r = setInterval(s, e)
            };
        e.addEventListener("click", (e => {
            e.preventDefault(), e.target.matches(".dot, .portfolio-btn") && (a(t, n, "portfolio-item-active"), a(c, n, "dot-active"), e.target.matches("#arrow-right") ? n++ : e.target.matches("#arrow-left") ? n-- : e.target.classList.contains("dot") && c.forEach(((t, o) => {
                e.target === t && (n = o)
            })), n >= t.length && (n = 0), n < 0 && (n = t.length - 1), l(t, n, "portfolio-item-active"), l(c, n, "dot-active"))
        })), e.addEventListener("mouseenter", (e => {
            e.target.matches(".dot, .portfolio-btn") && clearInterval(r)
        }), !0), e.addEventListener("mouseleave", (e => {
            e.target.matches(".dot, .portfolio-btn") && i(2e3)
        }), !0), (() => {
            for (let e = 0; e < t.length; e++) {
                const t = document.createElement("li");
                t.className = 0 === e ? "dot dot-active" : "dot", o.append(t)
            }
            c = document.querySelectorAll(".dot")
        })(), i(2e3)
    })(), ((e = 100) => {
        const t = document.querySelector(".calc-block"),
            o = document.querySelector(".calc-type"),
            r = document.querySelector(".calc-square"),
            c = document.querySelector(".calc-count"),
            n = document.querySelector(".calc-day"),
            a = document.getElementById("total");
        t.addEventListener("input", (t => {
            t.target !== o && t.target !== r && t.target !== c && t.target !== n || (() => {
                const t = +o.options[o.selectedIndex].value,
                    l = r.value;
                let s = 0,
                    i = 1,
                    u = 1;
                c.value > 1 && (i += +c.value / 10), n.value && n.value < 5 ? u = 2 : n.value && n.value < 10 && (u = 1.5), s = o.value && r.value ? e * t * l * i * u : 0, a.textContent = s
            })()
        }))
    })(100), e({
        formId: "form1",
        someElem: [{
            type: "block",
            id: "total"
        }]
    }), e({
        formId: "form2",
        someElem: [{
            type: "input",
            id: "form2-message"
        }]
    }), e({
        formId: "form3",
        someElem: [{
            type: "block",
            id: "total"
        }]
    })
})();