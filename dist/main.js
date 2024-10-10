(() => {
    "use strict";
    (() => {
        const e = document.getElementById("timer-hours"),
            t = document.getElementById("timer-minutes"),
            n = document.getElementById("timer-seconds"),
            r = document.getElementById("timer-days");
        let c;
        const l = () => {
            let l = (() => {
                let e = (new Date("26 september 2024 12:45:00").getTime() - (new Date).getTime()) / 1e3;
                e < 0 && (e = 0);
                let t = Math.floor(e / 60 / 60 / 24),
                    n = Math.floor(e / 60 / 60 % 24),
                    r = Math.floor(e / 60 % 60),
                    c = Math.floor(e % 60);
                return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, r = r < 10 ? "0" + r : r, c = c < 10 ? "0" + c : c, {
                    timeRemaining: e,
                    days: t,
                    hours: n,
                    minutes: r,
                    seconds: c
                }
            })();
            r.textContent = l.days, e.textContent = l.hours, t.textContent = l.minutes, n.textContent = l.seconds, 0 === l.timeRemaining && clearInterval(c)
        };
        l(), c = setInterval(l, 1e3)
    })(), (() => {
        const e = document.querySelector(".menu"),
            t = document.querySelector("menu"),
            n = t.querySelector(".close-btn "),
            r = t.querySelectorAll("ul>li>a"),
            c = () => {
                t.classList.toggle("active-menu")
            };
        e.addEventListener("click", c), n.addEventListener("click", c), r.forEach((e => e.addEventListener("click", c)))
    })(), (() => {
        const e = document.querySelector(".popup"),
            t = document.querySelectorAll(".popup-btn"),
            n = e.querySelector(".popup-close"),
            r = e.querySelector(".popup-content");
        let c, l = 0;
        const a = () => {
            window.innerWidth < 768 || (l <= 1 ? (c = requestAnimationFrame(a), l += .05, r.style.opacity = l) : (cancelAnimationFrame(c), l = 0))
        };
        t.forEach((t => {
            t.addEventListener("click", (() => {
                e.style.display = "block", a()
            }))
        })), n.addEventListener("click", (() => {
            e.style.display = "none"
        }))
    })(), (() => {
        const e = document.querySelector(".calc-item.calc-square"),
            t = document.querySelector(".calc-item.calc-count"),
            n = document.querySelector(".calc-item.calc-day"),
            r = /\D+/;
        e.addEventListener("input", (e => {
            e.target.value = e.target.value.replace(r, "")
        })), t.addEventListener("input", (e => {
            e.target.value = e.target.value.replace(r, "")
        })), n.addEventListener("input", (e => {
            e.target.value = e.target.value.replace(r, "")
        }))
    })(), (() => {
        const e = /[^а-я -]+/gi,
            t = /[^a-z@0-9-_.!~*']+/gi,
            n = /[^0-9()-]/,
            r = document.querySelectorAll(".form-name"),
            c = document.querySelectorAll(".form-email"),
            l = document.querySelectorAll(".form-phone");
        r.forEach((t => {
            t.addEventListener("input", (t => {
                t.target.value = t.target.value.replace(e, "")
            }))
        })), c.forEach((e => {
            e.addEventListener("input", (e => {
                e.target.value = e.target.value.replace(t, "")
            }))
        })), l.forEach((e => {
            e.addEventListener("input", (e => {
                e.target.value = e.target.value.replace(n, "")
            }))
        }))
    })()
})();