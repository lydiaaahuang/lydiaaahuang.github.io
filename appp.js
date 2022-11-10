//JS for navigation bar
function init() {  
    //define variable to a set value
    const hamburger = document.querySelector(".menu"); 
    const hamburgerLines = document.querySelectorAll(".menu line");
    const navOpen = document.querySelector(".nav-open");
    const episodes = document.querySelector(".episodes");
    const fbhead = document.querySelector(".fbhead");
  
    const tl = new TimelineMax({ paused: true, reversed: true }); //create a timeline
  
    tl.to(navOpen, 0.5, { y: 0 }) //when the timeline happens
      .fromTo(episodes, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.1") //text fades in and out
      .fromTo(fbhead, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.5") //text fades in and out
      .fromTo(
        hamburgerLines, //the image stays white before and after drop down
        0.2,
        { stroke: "white" }, 
        { stroke: "white" },
        "-=1"
      );
  
    hamburger.addEventListener("click", () => { //when you click on the image it will open the nav bar and close when clicked again.
      tl.reversed() ? tl.play() : tl.reverse();
    });
  }
  
  function throttle(func, limit) {  //the navigation bar drops
    let inThrottle; 
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };


}
  
init();
  