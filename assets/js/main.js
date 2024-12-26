gsap.registerPlugin(ScrollTrigger);

const triangle = document.querySelector("#triangle");
const shine1 = document.querySelector("#shine1");
const shine2 = document.querySelector("#shine2");
const horizonLine1 = document.querySelector(".typo-horizontal-line1");
const horizonLine2 = document.querySelector(".typo-horizontal-line2");
const flower1 = document.querySelector("#flower1");
const flower2 = document.querySelector("#flower2");


function smoothScrolling() {
    const lenis = new Lenis({
        duration: 1.5,
    });
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 400);
    });
    gsap.ticker.lagSmoothing(0);
}

function moveGreetings() {
    gsap.from(".intro__section__hello-text > span", {
        duration: 0.75,
        x: 1200,
        stagger: 0.1,
        delay: 0.15,
        ease: "power4.out",
    });
    gsap.from(".intro__section__hello-text > span", {
        duration: 2,
        letterSpacing: "3rem",
        delay: 0.3,
        stagger: 0.1,
        ease: "power1.out",
    });
    gsap.from(".intro__section__hello-text > span", {
        duration: 1,
        yPercent: 150,
        opacity: 0,
        stagger: 0.1,
        ease: "power1.out",
    });
    const opening = gsap.to(".intro__section__hello-text > span", { 
        scrollTrigger:{
            trigger: ".intro__section",
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
        },
        backgroundPosition: "56% 44px", 
    });

    let isActive = false;
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 1580 && isActive === false) {
            const greetingstl = gsap.timeline();
            greetingstl.to("#exclamation", { scale: "1.15", y: -100, duration: 0.5, ease: "power1.out" });
            greetingstl.to("#exclamation", { scale: "0.1", y: 200, opacity: 0, duration: 0.3, ease: "circ.out" });
            setTimeout(() => {
                document.querySelector("body").classList.add("active");
                document.querySelectorAll(".greetings-words").forEach((ele) => {
                    ele.classList.add("active");
                });
                document.querySelector(".intro__section__iamheedo-text").classList.remove("active");
                document.querySelector(".bgr").classList.remove("active");
                document.querySelector(".earth").classList.remove("active");
                document.querySelector(".moon").classList.remove("active");
                gsap.from(".intro__section__iamheedo-text > span", {
                    duration: 0.75,
                    x: 1200,
                    stagger: 0.1,
                    ease: "power4.out",
                });
                gsap.from(".intro__section__iamheedo-text > span", {
                    duration: 1,
                    y: -500,
                    opacity: 0,
                    stagger: 0.1,
                    ease: "power3.out",
                });
                gsap.from(".intro__section__iamheedo-text > span", {
                    duration: 2,
                    letterSpacing: "2rem",
                    delay: 0.3,
                    stagger: 0.1,
                    ease: "power1.out",
                });
            }, 620);
            isActive = true;
        }
    });
}
function movesection2() {
    gsap.to(".earth", {
        scrollTrigger: {
            trigger: ".section2",
            start: "top bottom",
            end: "100%",
            scrub: true,
        },
        x: "-100",
        y: 600,
        rotate: 30,
    });
    gsap.to(".moon", {
        scrollTrigger: {
            trigger: ".section2",
            start: "top bottom",
            end: "100%",
            scrub: true,
        },
        x: "50",
        y: -500,
        rotate: 180,
        scale: 0.9,
    });
    const middletexteng = new SplitType(".sec2eng", {
        type: "chars",
    });
    gsap.from(".sec2eng", {
        scrollTrigger: {
            trigger: ".sec2eng",
            start: "top bottom",
            end: "top center",
            scrub: true,
        },
        y: 50,
        opacity: 0,
        ease: "power2.out",
    });
    gsap.to(middletexteng.chars, {
        scrollTrigger: {
            trigger: ".sec2eng",
            start: "top 30%",
            end: "top top",
            scrub: true,
        },
        x: -20,
        scale: 3,
        autoAlpha: 0,
        stagger: 0.1,
        ease: "power2.out",
    });

    const middletextkor = new SplitType(".sec2kor", {
        type: "chars",
    });
    gsap.from(middletextkor.chars, {
        scrollTrigger: {
            trigger: ".sec2kor",
            start: "top bottom",
            end: "top center",
            scrub: true,
        },
        y: 10,
        autoAlpha: 0,
        stagger: 0.1,
        ease: "power2.out",
    });
    gsap.to(middletextkor.chars, {
        scrollTrigger: {
            trigger: ".sec2eng",
            start: "top 30%",
            end: "top top",
            scrub: true,
        },
        letterSpacing: "10px",
        stagger: 0.1,
        ease: "power2.out",
    });
}
function skillsfnc() {
    const skills = document.querySelectorAll(".halfsection__grid-skills");

    for (let i = 0; i < skills.length; i++) {
        skills[i].addEventListener("mouseenter", () => {
            skills.forEach((ele) => {
                ele.classList.add("noactive");
                document.querySelectorAll(".halfsection__grid-skills-inner").forEach((ele) => {
                    ele.style.transform = "none";
                });
            });
            skills[i].classList.remove("noactive");
            skills[i].classList.add("active");
        });
        skills[i].addEventListener("mouseleave", () => {
            skills.forEach((ele) => {
                ele.classList.remove("noactive");
            });
            skills[i].classList.remove("active");
        });
    }

    const skill = gsap.utils.toArray(".halfsection__grid-skills");

    skill.forEach((ele) => {
        gsap.from(ele, {
            scrollTrigger: {
                trigger: ele,
                start: "top bottom",
                end: "top 70%",
                scrub: true,
            },
            y: 50,
        });
    });

    skill.forEach((ele) => {
        gsap.to(ele, {
            scrollTrigger: {
                trigger: ele,
                start: "bottom 15%",
                end: "center top",
                scrub: true,
            },
            scale: "0.5",
        });
    });
}

function section3fnc() {
    const typolines = gsap.utils.toArray(".section3__typo_line");

    typolines.forEach((ele) => {
        gsap.from(ele, {
            scrollTrigger: {
                trigger: ele,
                start: "top 95%",
                end: "bottom 70%",
                scrub: true,
            },
            opacity: 0,
            y: 50,
            rotateY: "7deg",
            rotateX: "2deg",
        });
    });
    gsap.from(".section3__typo_line > .typo-vertical-line", {
        scrollTrigger: {
            trigger: ".typo_line3",
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
        },
        height: 10,
    });
    const attitudeChars = new SplitType("#attitude", { type: "chars" });
    gsap.to(attitudeChars.chars, {
        scrollTrigger: {
            trigger: ".typo_line4",
            start: "top 47%",
            end: "top 6.5%",
            scrub: true,
        },
        y: 170,
        stagger: 0.1,
    });
    const revAttitudeChars = new SplitType("#reverseAttitude", { type: "chars" });
    gsap.from(revAttitudeChars.chars, {
        scrollTrigger: {
            trigger: ".typo_line5",
            start: "top 59%",
            end: "top 20%",
            scrub: true,
        },
        y: -170,
        opacity: 0,
        rotateY: "0deg",
        rotateX: "0deg",
        stagger: 0.1,
        ease: "power3.out",
    });
    gsap.to(".typo_line5", {
        scrollTrigger: {
            trigger: ".typo_line5",
            start: "top 26%",
            end: "center center",
            scrub: true,
        },
        width: "45%",
        y: 420,
        ease: "power4.out",
    });

    gsap.to("#reverseAttitude", {
        scrollTrigger: {
            trigger: ".typo_line5",
            start: "center center",
            end: "200%",
            scrub: true,
        },
        y: 300,
        autoAlpha: 0,
    });
}

function lookWordModule(ele, trigger, firstword, letterele) {
    gsap.from(ele, {
        scrollTrigger: {
            trigger: trigger,
            start: "bottom 90%",
            end: "top 70%",
            scrub: true,
        },
        opacity: 0,
        y: 50,
    });
    gsap.from(firstword, {
        scrollTrigger: {
            trigger: trigger,
            start: "bottom bottom",
            end: "top 70%",
            scrub: true,
        },
        letterSpacing: "1.2rem",
        opacity: 0,
        y: 20,
    });
    gsap.from(letterele, {
        scrollTrigger: {
            trigger: trigger,
            start: "top 70%",
            end: "top center",
            scrub: true,
        },
        display: "none",
        opacity: 0,
        x: -20,
        scale: 1.4,
        stagger: 0.1,
    });
}

function showSection5() {
    const section4Width = document.querySelector(".section4").offsetWidth;
    const setting = {
        trigger: ".section4",
        start: "bottom bottom",
        end: "100%",
        scrub: true,
    }
    const show = gsap.timeline({
        scrollTrigger:setting
    })
    show.to('.collaborative', {
        x: section4Width / 1.7,
        ease: "power1.out",
    })
    gsap.to(".collaborative-wrap > p", {
        scrollTrigger: {
            trigger: ".section4",
            start: "bottom bottom",
            end: "100%",
            scrub: true,
        },
        x: -(section4Width / 1.4),
        ease: "power1.out",
    });
    gsap.to("#bgrvideo", {
        scrollTrigger: {
            trigger: ".section4",
            start: "bottom bottom",
            end: "100%",
            scrub: true,
        },
        opacity:0,
        ease: "power1.out",
    });
}
function section4fnc() {
    const passtionateword = new SplitType("#passionateword", { type: "chars" });
    const flexibleword = new SplitType("#flexibleword", { type: "chars" });
    const creativeword = new SplitType("#creativeword", { type: "chars" });
    const collaborativeword = new SplitType("#collaborativeword", { type: "chars" });

    lookWordModule(".passionate > strong", ".passionate", ".passionate-wrap > p", passtionateword.chars);
    lookWordModule(".flexible > strong", ".flexible", ".flexible-wrap > p", flexibleword.chars);
    lookWordModule(".creative > strong", ".creative", ".creative-wrap > p", creativeword.chars);
    lookWordModule(".collaborative > strong", ".collaborative", ".collaborative-wrap > p", collaborativeword.chars);

    //section5 등장연출
    showSection5();
}

//요소 회전
function rotateElement(ele, deg, time) {
    let currnetrotate = 0;
    setInterval(() => {
        currnetrotate += deg;
        ele.style.transform = `rotate(${currnetrotate}deg)`;
    }, time);
}

//요소 가로길이 늘림
function expandwidth(ele, amount, time) {
    let isExpanded = false;
    let originWidth = parseInt(getComputedStyle(ele).width, 10);
    setInterval(() => {
        if (!isExpanded) {
            ele.style.width = `${originWidth + amount}px`;
        } else {
            ele.style.width = `${originWidth}px`;
        }
        isExpanded = !isExpanded;
    }, time);
}


gsap.to('.section5__works__img', {
    scrollTrigger:{
        trigger:"#esteelauder",
        start:"top bottom",
        end:"bottom bottom",
        scrub:true,
        markers:true,
    },
    width:"80%"
})

function functionCursor() {
    const coordinates = {
        x: 0,
        y: 0,
    };

    const cursors = document.querySelectorAll(".cursor");
    cursors.forEach((cursor) => {
        (cursor.x = 0), (cursor.y = 0);
    });

    let isInsideearth = false;
    window.addEventListener("mousemove", (e) => {
        coordinates.x = e.clientX;
        coordinates.y = e.clientY;
    });
    function animateCursor() {
        let x = coordinates.x;
        let y = coordinates.y;

        cursors.forEach((cursor, index) => {
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
            cursor.style.scale = (cursors.length - index) / 30;
            cursor.style.zIndex = cursors.length * 100 - index;

            if ((isInsideearth = true)) {
                cursor.style.backgroundColor = "orange";
            } else {
                cursor.style.backgroundColor = "black";
            }
            cursor.x = x;
            cursor.y = y;

            const nextCursor = cursors[index + 1] || cursors[0];
            x += (nextCursor.x - x) * 0.2;
            y += (nextCursor.y - y) * 0.2;
        });
        requestAnimationFrame(animateCursor);
    }

    document.querySelector(".earth").addEventListener("mouseenter", () => {
        isInsideearth = true;
        console.log(isInsideearth);
    });
    document.querySelector(".earth").addEventListener("mouseleave", () => {
        isInsideearth = false;
        console.log(isInsideearth);
    });
    animateCursor();
}

function animateInit() {
    moveGreetings();
    movesection2();
    section3fnc();
    section4fnc();
    skillsfnc();
}

function functions() {
    smoothScrolling();
    rotateElement(triangle, 90, 4600);
    rotateElement(shine1, 90, 2200);
    rotateElement(shine2, -90, 3100);
    rotateElement(flower1, 90, 300);
    rotateElement(flower2, -90, 1200);
    expandwidth(horizonLine1, 300, 3300);
    expandwidth(horizonLine2, 450, 2100);
    // functionCursor();
}
animateInit();
functions();
