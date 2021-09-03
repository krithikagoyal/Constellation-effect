const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

window.addEventListener('resize', function (e) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
})

canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
})

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.speed = Math.random();
        this.color = ;
    }
    update() {
        this.x += this.speed;
        this.y += this.speed;
    }
    draw() {
        ctx.beginPath();

        ctx.arc(this.x, this.y, 0, Math.PI * 2);
        ctx.fillStyle;
    }
}

function handleParticles() {
    
}

function animate() {

}