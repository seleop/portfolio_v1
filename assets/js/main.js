gsap.registerPlugin(ScrollTrigger);


const triangle = document.querySelector("#triangle");
const shine1 = document.querySelector("#shine1");
const shine2 = document.querySelector("#shine2");
const horizonLine1 = document.querySelector('.typo-horizontal-line1');
const horizonLine2 = document.querySelector('.typo-horizontal-line2');
const flower1 = document.querySelector('#flower1');
const flower2 = document.querySelector('#flower2');

function reverseVideo(){
    const bgrvideo = document.querySelector('#bgrvideo');
    bgrvideo.addEventListener('timeupdate', () => {
        bgrvideo.playbackRate=0.2
    })
}

function smoothScrolling(){
    const lenis = new Lenis({
        duration : 2
    });
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 300);
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
    let greetingtl = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro__section",
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
            pinSpacing:true,
        },
    })
    greetingtl
        .to(".intro__section__hello-text > span", {backgroundPosition: "56% 44px", ease:"sine.out"})




    let isActive = false;
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 1700 && isActive === false) {
            const greetingstl = gsap.timeline();
            greetingstl.to("#marks", { scale: "1.15", y: -100, duration: 0.5, ease: "power1.out" });
            greetingstl.to("#marks", { scale: "0.6", y: 400, duration: 0.3, ease: "circ.out" });
            setTimeout(() => {
                document.querySelector("body").classList.add("active");
                document.querySelectorAll(".intro__section__hello-text > span").forEach((ele) => {
                    ele.classList.add('active')
                })
                document.querySelector(".intro__section__iamheedo-text").classList.remove('active');
                document.querySelector(".bgr").classList.remove('active');
                document.querySelector('.earth').classList.remove('active');
                document.querySelector('.moon').classList.remove('active');
                gsap.from(".intro__section__iamheedo-text > span", {
                    duration: 0.75,
                    x: 1200,
                    stagger: 0.1,
                    ease: "power4.out",
                })
                gsap.from(".intro__section__iamheedo-text > span", {
                    duration:1,
                    y:-500,
                    opacity:0,
                    stagger:0.1,
                    ease:"power3.out"
                })
                gsap.from(".intro__section__iamheedo-text > span", {
                    duration: 2,
                    letterSpacing: "3rem",
                    delay: 0.3,
                    stagger: 0.1,
                    ease: "power1.out",
                })
            }, 620);
            isActive = true;
        }   
    });
}
function movesection2(){
    gsap.to(".earth", {
        scrollTrigger:{
            trigger:".section2",
            start:"top bottom",
            end:"100%",
            scrub:true,
        },
        x:"-100",
        y:600,
        rotate:30
    })
    gsap.to(".moon", {
        scrollTrigger:{
            trigger:".section2",
            start:"top bottom",
            end:"100%",
            scrub:true,
        },
        x:"50",
        y:-500,
        rotate:180,
        scale:0.9
    })
    const middletexteng = new SplitType(".sec2eng", {
        type : "chars"
    })
    gsap.from(".sec2eng", {
        scrollTrigger:{
            trigger:".sec2eng",
            start:"top bottom",
            end:"top center",
            scrub:true,
        },
        y:50,
        opacity:0,
        ease:"power2.out"
    })
    gsap.to(middletexteng.chars, {
        scrollTrigger:{
            trigger:".sec2eng",
            start:"top 30%",
            end:"top top",
            scrub:true,
        },
        x:-20,
        scale:3,
        autoAlpha:0,
        stagger:0.1,
        ease:"power2.out"
    })

    const middletextkor = new SplitType(".sec2kor", {
        type : "chars"
    })
    gsap.from(middletextkor.chars, {
        scrollTrigger:{
            trigger:".sec2kor",
            start:"top bottom",
            end:"top center",
            scrub:true,
        },
        y:10,
        autoAlpha:0,
        stagger:0.1,
        ease:"power2.out"
    })
    gsap.to(middletextkor.chars, {
        scrollTrigger:{
            trigger:".sec2eng",
            start:"top 30%",
            end:"top top",
            scrub:true,
        },
        letterSpacing:"10px",
        stagger:0.1,
        ease:"power2.out"
    })
}
function section3fnc(){
    const typolines = gsap.utils.toArray('.section3__typo_line');

    typolines.forEach((ele) => {
        gsap.from(ele, {
            scrollTrigger:{
                trigger:ele,
                start:"top 90%",
                end :"bottom 60%",
                scrub:true,
            },
            opacity : 0,
            y : 100
        })
    })
    typolines.forEach((ele) => {
        gsap.from(ele, {
            scrollTrigger:{
                trigger:ele,
                start:"top 70%",
                end :"top 40%",
                scrub:true,
            },
            rotateY:"2deg",
            rotateX :"1deg"
        })
    })
}
function section4fnc(){
    gsap.from('.passionate > strong', {
        scrollTrigger:{
            trigger:".passionate",
            start:"bottom 90%",
            end:"top 70%",
            scrub:true,
        },
        opacity:0,
        y:50,
    })
    gsap.from('.passionate-wrap > p', {
        scrollTrigger:{
            trigger:".passionate",
            start:"bottom bottom",
            end:"top 70%",
            scrub:true,
        },
        letterSpacing:"2rem",
        opacity:0,
        y:20,
    })
    const passtionateword = new SplitType("#passionateword", {type : "chars"})
    gsap.from(passtionateword.chars, {
        scrollTrigger:{
            trigger:".passionate",
            start:"top 70%",
            end:"top center",
            scrub:true,
        },
        display:"none",
        opacity:0,
        x:-20,
        scale:1.4,
        stagger:0.1,
    })
}
function rotateElement(ele, deg, time){
    let currnetrotate = 0;
    setInterval(() => {
        currnetrotate += deg;
        ele.style.transform = `rotate(${currnetrotate}deg)`
    }, time);
}
function expandwidth(ele, amount, time){
    let isExpanded = false
    let originWidth = parseInt(getComputedStyle(ele).width, 10)
    setInterval(() => {
        if(!isExpanded) {
            ele.style.width = `${originWidth + amount}px`;
        } else{
            ele.style.width = `${originWidth}px`
        }   
        isExpanded = !isExpanded
    }, time);
}


const cursor = document.querySelector("#cursor");
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x:e.clientX,
        y:e.clientY,
        duration:0.1,
    })
})

function animateInit() {
    moveGreetings();
    movesection2();
    section3fnc();
    section4fnc();
}

function functions(){
    reverseVideo();
    smoothScrolling();
    rotateElement(triangle, 90, 4600)
    rotateElement(shine1, 90, 2200)
    rotateElement(shine2, -90, 3100)
    rotateElement(flower1, 90, 300)
    rotateElement(flower2, -90, 1200)
    expandwidth(horizonLine1, 300, 3300)
    expandwidth(horizonLine2, 450, 2100)
}
animateInit();
functions()