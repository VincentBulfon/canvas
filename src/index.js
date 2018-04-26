/*let color = '';
    let x = 50;
    for(let i = 0; i<5; i++)
    {
        color = `rgb( ${150+i*25},50 ,50)`;
        c.fillStyle = color;
        c.beginPath();
        c.arc(x, 100, 25, 0, Math.PI*2, false);
        c.fill();
        x = x+50;
    }*/
let ball = {};
window.addEventListener('resize', (e) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
window.addEventListener('mousemove', (e) => {
    if (e.clientX > ball.x - 25 && e.clientX < ball.x + 25 && e.clientY > ball.y - 25 && e.clientY < ball.y + 25) {
        console.log('on y est!')
    }
});
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

if (canvas.getContext) {
    const c = canvas.getContext("2d");
    ball = {
        color: {'r': 240, 'g': 20, 'b': 20},
        x: canvas.width / 2,
        y: canvas.height / 2,
        dx: Math.random(),
        dy: Math.random()
    };
    init(c, ball)

} else {
    alert('il faut mettre à jour votre naviagateur')
}

function update(c, ball) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    //c.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
    c.beginPath();
    c.arc(ball.x, ball.y, 25, 0, Math.PI * 2, false);
    c.fill();
    if (ball.x + 25 >= canvas.width || ball.x - 25 < 0) {
        ball.dx = -ball.dx;
    }
    if (ball.y + 25 >= canvas.height || ball.y - 25 < 0) {
        ball.dy = -ball.dy;
    }
    ball.x = ball.x + ball.dx * 5;
    ball.y = ball.y + ball.dy * 5;
    window.requestAnimationFrame(function () {
        update(c, ball)
    }) //rapelle la fonction update pour qu'elle s'exécute a chaque repaint
}

function init(c, ball) {
    update(c, ball)
}


