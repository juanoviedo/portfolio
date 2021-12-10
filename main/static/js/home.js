
// gsap animations
var animation = gsap.timeline();
animation
    .from('.lineasdenegocio', { opacity: 0, duration: 1, ease: "back.out(1.7)", x: -100 }, "+=0.4")
    .from('.btn-whatsapp', { duration: 2.4, ease: "bounce.out", y: -900})

// flex container
let container = document.getElementById("flexcontainer");
let childNum = container.childElementCount;

let elements = container.children;
let width = elements.item(0).clientWidth;

for (let i = 4; i < childNum; i++){
    elements.item(i).style.maxWidth = width + 'px';
}

addEventListener("resize", ()=>{

    elements = container.children;
    width = elements.item(0).clientWidth;

    for (let i = 4; i < childNum; i++){
        elements.item(i).style.maxWidth = width + 'px';
    }

})
