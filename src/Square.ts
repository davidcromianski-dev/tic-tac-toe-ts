import Player from "./Player.ts";
import Game from "./Game.ts";
import {valueNumber} from "./Types.ts";

export default class Square extends HTMLElement {

    public occupant: Player | null = null;
    public occupied = false;

    constructor(
        public value: valueNumber,
        public color = ''
    ) {
        super();
        this.build();
    }

    build() {
        this.classList.add('square');
        this.reset();
    }

    check() {
        const player = Game.getCurrentPlayer() as Player;
        this.occupied = true;
        this.occupant = player;
        if (player.element) {
            this.appendChild(player.element);
        }
        this.removeEventListener('click', this.check);
        player.check(this);
        return this;
    }

    reset() {
        this.occupied = false;
        this.occupant = null;
        this.innerHTML = '';
        this.addEventListener('click', () =>  this.check);
    }
}