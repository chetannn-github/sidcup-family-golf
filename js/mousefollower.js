let mousefollower = document.querySelectorAll("#mouse-follower");


// document.addEventListener("mousemove" , (e)=>{
//     console.log(e);
//     gsap.to(mousefollower,{
//         x: e.pageX, // Use clientX to get the mouse position relative to the viewport
//         y: e.pageY, // Add y coordinate to follow the mouse vertically as well
//         duration: 0.7, // You can adjust the duration for smoother movement
//         // ease: "power2.out" 
//     })
// })
 let mouseX = 0;
        let mouseY = 0;

document.addEventListener("mousemove", (e) => {
    // mouseX = e.pageX;
    // mouseY = e.pageY; 
//     mousefollower.style.left="0 px";
// mousefollower.style.top="0 px";
    mouseX = e.clientX + window.scrollX;
                mouseY = e.clientY + window.scrollY;
    updateMouseFollower();
});

document.addEventListener("scroll", (e) => {
    
    // mousefollower.style.left=mouseX +"px";
// mousefollower.style.top=mouseY+"px";
// console.log(mousefollower.style.left);
   
});

function updateMouseFollower() {
    gsap.to(mousefollower, {
        x: mouseX,
        y: mouseY,
        ease: "power1.out",
        duration: 0.7
    })};