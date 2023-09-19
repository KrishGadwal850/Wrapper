
gsap.from(".hero h1", {
    transform: "translate(0%,0%)",
})
gsap.to(".hero h1", {
    transform: "translate(-70%,0%)",
    fontWeight: 100,
    scrollTrigger: {
        trigger: ".hero",
        scroller: "body",
        end: "top -60%",
        pin: true,
        scrub: 2,
        // markers:true,
    }
})

// Device Anim
gsap.from('.deviceAnim > .phone > h1 , .deviceAnim > .laptop > h1', {
    fontSize: "1rem",
    opacity: 0,
    scrollTrigger: {
        trigger: '.deviceAnim > .phone > h1 , .deviceAnim > .laptop > h1',
        scroller: 'body',
        scrub: 2,
        // markers:true,
        start: 'top 80%',
        end: 'top 40%',
    }
})

document.querySelectorAll('#elem').forEach((ele) => {
    let rotate = 0;
    let diffRot = 0;
    ele.addEventListener('mousemove', (det) => {
        let diff = det.clientY - ele.getBoundingClientRect().top - 50;
        diffRot = det.clientX - rotate;
        rotate = det.clientX;
        gsap.to(ele.querySelector('img'), {
            opacity: 1,
            ease: Power1,
            display: 'inline',
            top: diff,
            left: det.clientX - 50,
            rotate: gsap.utils.clamp(-20, 20, diffRot),
        })
    })
    ele.addEventListener('mouseleave', () => {
        gsap.to(ele.querySelector('img'), {
            opacity: 0,
            display: 'none',
            ease: Power1,
        })
    })
})

// Device
gsap.to('.devName', {
    transform: "translate(-200%,0%)",
    duration: 6,
    ease: Power2,
    yoyo: true,
    repeat: -1,
})

gsap.from('.pg2Head > h1', {
    fontSize: '0rem',
    width: '0',
    display: 'none',
    scrollTrigger: {
        trigger: '.pg2Head > h1',
        scroller: 'body',
        // markers:true,
        scrub: 2,
        start: "top 85%",
        end: "top 75%",
    }
})

// Other Functions
let mouse = document.querySelector('.mouse');
let move = () => {
    window.document.addEventListener('mousemove', (ele) => {
        mouse.style.display = 'inline';
        let diff = ele.clientY - document.body.getBoundingClientRect().top;
        mouse.style.transform = `translate(${ele.clientX}px,${diff}px)`;
    })
}
document.body.addEventListener('mouseleave', () => {
    mouse.style.display = 'none';
})
move();

let ele = document.querySelector('.skinContainer1');
let imgName = ["Magma", "Magatronics", "Cyber Hud", "Cyber Mind", "Black Smoke", "Chaos", "DJ Panda", "Space Boy"];
for (let i = 0; i < 8; i++) {
    let div1 = document.createElement('div');
    div1.className = 'skContainer';

    let div2 = document.createElement('div');
    div2.className = 'contImg';
    div2.innerHTML = `<img src="./images/gallery/gp${i + 1}.jpg" alt="">`;

    let div3 = document.createElement('div');
    div3.className = 'contvalue';
    div3.innerHTML = `<h1>${imgName[i]}</h1><h1><i class="fa-solid fa-indian-rupee-sign"></i>599</h1>`;

    div1.appendChild(div2);
    div1.appendChild(div3);
    ele.append(div1);
    console.log("ho gaya");
}

let ele2 = document.querySelector('.skinContainer2');
let lapImg = ["Magma", "Magatronics", "Cyber Hud", "Cyber Mind", "Black Smoke", "Chaos", "DJ Panda", "Space Boy"];
for (let i = 0; i < 7; i++) {
    let div1 = document.createElement('div');
    div1.className = 'skContainer';

    let div2 = document.createElement('div');
    div2.className = 'contImg';
    div2.innerHTML = `<img src="./images/gallery/gl${i + 1}.jpg" alt="">`;

    let div3 = document.createElement('div');
    div3.className = 'contvalue';
    div3.innerHTML = `<h1>${lapImg[i]}</h1><h1><i class="fa-solid fa-indian-rupee-sign"></i>1199</h1>`;

    div1.appendChild(div2);
    div1.appendChild(div3);
    ele2.append(div1);
    console.log("ho gaya");
}

gsap.from('.skContainer',{
    opacity:0,
    scrollTrigger:{
        trigger:'.skContainer',
        scroller:"body",
        // markers:true,
        scrub:2,
    }
})