//JS for section one homepage
//define variable to a set value
const hero = document.querySelector('.hero'); 
const slider = document.querySelector('.slider'); 
const hamburger = document.querySelector('.menu'); 

const tl = new TimelineMax(); //create a timeline

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut}) //opens up image
.fromTo(hero, 1.2, {width: "100%"}, {width:"80%", ease: Power2.easeInOut}) //zooms out of image
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2") //colour swipe




