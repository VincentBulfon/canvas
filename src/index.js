import {animation} from "./animation.js" //on choisi l'élément que l'on importe et d'où on l'importe.
animation.init();

/*
window.addEventListener('resize', (e) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
window.addEventListener('mousemove', (e) => {
    if (e.clientX > balls.x - 25 && e.clientX < balls.x + 25 && e.clientY > balls.y - 25 && e.clientY < balls.y + 25) {
        if (balls.radius < balls.maxRadius) {
            balls.radius++;
            balls.isGrowing = true
        }
    } else {
        balls.isGrowing = false;
    }
});
*/



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
    }*/ //première création de balls