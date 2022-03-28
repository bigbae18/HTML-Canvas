const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// Rectángulos - Cuadrados
/**
 * fillStyle - Cambia el estilo antes de pintarlo.
 * fillRect(x, y, height, width);
 */

c.fillStyle = "#0AFF0F";
c.fillRect(50, 100, 64, 64);
c.fillStyle = "#FFF"
c.fillRect(200, 100, 64, 64);
c.fillStyle = "#00F"
c.fillRect(130, 200, 64, 64);

// Líneas

/**
 * beginBath(); - Selecciona el inicio del Canva.
 * moveTo(x, y); - Desde la esquina arriba izq, elige un punto.
 * lineTo(x, y); - Linea hasta donde
 * strokeStyle - Cambia el estilo de lo que se dibuja.
 * stroke(); - Dibuja la/s linea/s.
 */

// Triángulo
c.beginPath();
c.moveTo(400, 400);
c.lineTo(450, 300);
c.lineTo(500, 400);
c.lineTo(400, 400);
c.strokeStyle = "#FFF"
c.stroke();

// Cuadrado

c.beginPath();
c.moveTo(400, 100);
c.lineTo(400, 200);
c.lineTo(500, 200);
c.lineTo(500, 100);
c.lineTo(400, 100);
c.stroke();

// Círculos

/**
 * arc(x: Int, y: Int, radius: Int, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false)); - Crea un círculo del tamaño que le digas
 */

for (let i = 0; i < 20; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r = Math.random() * 20;
    let colorNumber = Math.floor(Math.random() * 4);
    let color;
    switch(colorNumber) {
        case 1:
            color = "#00F";
            break;
        case 2:
            color = "#000";
            break;
        case 3:
            color = "#FFF";
            break;
        case 0:
            color = "#0FF";
            break;
        case 4:
            color = "#0F0";
            break;
    }
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2, false);
    c.strokeStyle = color;
    c.stroke();
}
