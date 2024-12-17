gsap.registerPlugin(ScrollTrigger);

function moveGreetings() {
    // const helloText = new SplitType("#greetings", {
    //     type : "chars"
    // })

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
            end: "+=600%",
            scrub: true,
            pin: true,
            markers: true,
        },
    })
    greetingtl
        .to(".intro__section__hello-text > span", {backgroundPosition: "56% 44px", ease:"sine.out"})




    let isActive = false;
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 4600 && isActive === false) {
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

function animateInit() {
    moveGreetings();
}

animateInit();
