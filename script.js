function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locomotive()

var cur = document.querySelector(".cursor")
var main = document.querySelector(".main")
var video = document.querySelector(".page1 video")
document.addEventListener("mousemove", function(dets){
  cur.style.left = dets.x+ 20 +"px"
  cur.style.top = dets.y+ 20 + "px"
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h2",
        scroller: ".main",
        // markers:true,
        start: "top 30%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h2",{
    x: -100,
    duration: 1,
},"chacha")
tl.to(".page1 h3",{
    x: 100,
    duration: 1,
},"chacha")
tl.to(".page1 video",{
    width: "90%"
},"chacha")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h2",
        scroller: ".main",
        // markers:true,
        start: "top -120%",
        end: "top 130",
        scrub: 3
    }
})
tl2.to(".main",{
    background: "#fff",
    
})
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h2",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300",
        scrub: 3
    }
})
tl3.to(".main",{
    background: "#000"
})

  var chacha = document.querySelectorAll(".chacha")
  chacha.forEach(function(elem,){
  elem.addEventListener("mouseenter", function(){
   var pic = elem.getAttribute("data-image")
   cur.style.width = "300px"
   cur.style.height = "250px"
   cur.style.borderRadius = "0"
   cur.style.backgroundImage = `url(${pic})`
  })
  elem.addEventListener("mouseleave", function(){
    
    cur.style.width = "10px"
    cur.style.height = "10px"
    cur.style.borderRadius = "50%"
    cur.style.backgroundImage = `url(none)`
  })
  })

  var h1 = document.querySelectorAll("#nav h1")
  var pappu = document.querySelector("#pappu")
  h1.forEach(function(e){
     e.addEventListener("mouseenter",function(){
      pappu.style.display = "block"
      pappu.style.opacity = "1"
     })    
     e.addEventListener("mouseleave",function(){
        pappu.style.display = "none"
        pappu.style.opacity = "0"
  })
})