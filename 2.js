

var tl = gsap.timeline()




gsap.from("#img1",{
    y:70,
    opacity:0,
    delay:0.5,
    duration:1,
})


gsap.from("#img2",{
    x:70,
    opacity:0,
    delay:0.5,
    duration:1,
})


gsap.from("#img3",{
    y:-70,
    opacity:0,
    delay:0.5,
    duration:1,
})


tl.from("#main #text h1",{
    opacity:0,
    delay:1.6,
    duration:0.8,
     ease:"power4.out",
})


tl.from("#main h3",{
    x:-70,
    opacity:0,
    duration:0.8,
     ease:"power4.out",
})



tl.from("#main #b2",{
    x:-50,
    opacity:0,
    duration:0.8,
     ease:"power4.out",
})



//this is gsap code for main # 02




gsap.from("#toptext h5",{
    y:50,
    opacity:0,
    duration:0.8,
     scrollTrigger:{
        trigger:"#toptext h5",
        scroller:"body",
        start:"top 80%",
        
    }

})


gsap.from("#centertext h1",{
    x:80,
    opacity:0,
    duration:0.8,
     scrollTrigger:{
        trigger:"#centertext h1",
        scroller:"body",
        start:"top 70%",
        
    }

})



gsap.from("#bottomtext",{
    x:-90,
    opacity:0,
    duration:1,
     scrollTrigger:{
        trigger:"#bottomtext",
        scroller:"body",
        start:"top 90%",
        
    }

})





// this is gsap code of div main # 03



gsap.from("#main3 #mimg1",{
    x:-90,
    opacity:0,
    duration:1,
     scrollTrigger:{
        trigger:"#main3 #mimg1",
        scroller:"body",
        start:"top 40%",
        
    }

})


gsap.from("#main3 #mimg2",{
    x:-90,
    opacity:0,
    duration:1,
     scrollTrigger:{
        trigger:"#main3 #mimg1",
        scroller:"body",
        start:"top 40%",
        
    }

})




gsap.from("#main3 #mimg3",{
    y:90,
    opacity:0,
    duration:1,
     scrollTrigger:{
        trigger:"#main3 #mimg1",
        scroller:"body",
        start:"top 40%",
        
    }

})







gsap.from("#main3 #mimg4",{
    y:90,
    opacity:0,
    duration:1.5,
     scrollTrigger:{
        trigger:"#main3 #mimg1",
        scroller:"body",
        start:"top 40%",
        
    }

})



gsap.from("#main3part2 h1",{
    y:60,
    opacity:0,
    duration:0.6,
     scrollTrigger:{
        trigger:"#main3part2 h1",
        scroller:"body",
        start:"top 70%",
        
    }

})





gsap.from("#main3part2 p",{
    y:60,
    opacity:0,
    duration:0.6,
     scrollTrigger:{
        trigger:"#main3part2 p",
        scroller:"body",
        start:"top 75%",
        
    }

})




gsap.from("#main3 #myid",{
    x:-70,
    opacity:0,
    duration:0.6,
     scrollTrigger:{
        trigger:"#main3 #myid",
        scroller:"body",
        start:"top 90%",
        
    }

})