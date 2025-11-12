const cards = document.querySelectorAll(".card");
const button = document.querySelector("button");

cards.forEach((card) => {
    notHoverScale(card);
    hoverScale(card);
    
});

notHoverScale(button);
hoverScale(button);

function hoverScale(element){
    element.addEventListener("mouseenter", () => {
        gsap.to(element, {
            scale: 1.05,
            duration: .3
        });

        if(element.tagName == "BUTTON"){{
        gsap.to(element, {
            backgroundImage: "linear-gradient(#ff9d05, #ffcb05, #ffd96d)",
            duration: 0.4
        })
    }}
    });

}

function notHoverScale(element){
    element.addEventListener("mouseleave", () => {
        gsap.to(element, {
            scale: 1,
            duration: .3
        });

        if (element.tagName === "BUTTON") {
      gsap.to(element, {
        backgroundImage: "linear-gradient(#ffd96d, #ffcb05, #ff9d05)",
        duration: 0.4
    })}
    });

    
}

const tl = gsap.timeline(defaults={
    duration: .5
});

tl.from(".titulo", {
    y:30,
    opacity:0,
})

.from(".subtitulo", {
    y:30,
    opacity:0,
}, "-=.2")

.from("p", {
    opacity:0,
    duration:1
})

.from(".banner", {
    height: 0
}, "-=.5")

.from(".produto", {
    height: 0,
    padding:0,
    duration: .7
})

.from(".icon", {
    opacity:0,
})

.from("button", {
    opacity:0,
}, "-=.1")

.from(".cards", {
    width:0,
    padding:0
}, "-=.1")

.from(".card", {
    opacity:0,
    y:12,
    stagger: .2
})


