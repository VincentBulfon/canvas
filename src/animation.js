import {Ball} from "./Ball.js";

export const animation = {
    "balls": [],
    "canvas": document.querySelector('canvas'),
    "c": undefined,
    init() {
        if (this.canvas.getContext) {
            this.c = this.canvas.getContext("2d");
            for (let i = 0; i < 100; i++) {
                this.balls.push(new Ball(this));
                // on est obligé d'utiliser new pour créer une nouvelle instance de balle sinon cela mettrait 100 fois à jour la même balle.

            }
        } else {
            alert("Il faut mettre à jour votre navigateur");
        }
        this.animate()
    },
    animate() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.balls.forEach(ball => {
            ball.update();
        });
        window.requestAnimationFrame(() => {
            this.animate()
        }) //rapelle la fonction animate pour qu'elle s'exécute a chaque repaint 60 fois / seconde
    }
};