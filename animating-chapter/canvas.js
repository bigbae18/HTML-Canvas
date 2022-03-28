class Circle {
    context;
    x;
    y;
    radius;
    dx;
    dy;

    constructor(x, y, radius, dx, dy, context) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.context = context;

        this.draw();
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        this.context.strokeStyle = "blue";
        this.context.stroke();
    }

    update() {
        
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');

const circleArray = [];

for (let i = 0; i < 100; i++) {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let radius = 30;
    let dy = (Math.random() - 0.5) * 2;
    let dx = (Math.random() - 0.5) * 2;
    let circle = new Circle(x, y, radius, dx, dy, context);
    circleArray.push(circle);
}

function animate() {
    
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();