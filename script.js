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
    padding:0
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


