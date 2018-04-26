export class Ball {
    //un classe est un élément regroupant d'autres élément le nom d'une classe s'écrit toujours avec un majuscule!!! Le mot export sert à dire attention c'est un module qui sera exporté pour être utilisé ailleur
    //this sert a définir que ce sont des propriétés d'un instance de l'objet ball issu de la classe même si c'est une fonction dans l'objet

    constructor(animation) {
        this.animation = animation;
        this.color = Ball.colors[Math.floor(Math.random() * Ball.colors.length)];
        this.radius = Math.random() * 5 + 5;
        this.x = Math.floor(Math.random() * this.animation.canvas.width);
        this.y = Math.floor(Math.random() * this.animation.canvas.width);
        this.dx = Math.random();
        this.dy = Math.random();
        this.minRadius = this.radius;
        this.isGrowing = false;
    }

    static get maxRadius() {
        return 15;
    }

    static get colors() {
        return ['#BADA55', '#C0FFEE', '#B00B5', '#D11D05']
    }

    draw() {
        this.animation.c.fillStyle = this.color;
        this.animation.c.beginPath();
        this.animation.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.animation.c.fill();
    }

    update() {
        if (this.x + this.radius >= this.animation.canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius >= this.animation.canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx * 5;
        this.y = this.y + this.dy * 5;
        /*if (this.radius > this.minRadius && this.isGrowing === false) {
            this.radius--
        }*/
        this.draw();
    }


}