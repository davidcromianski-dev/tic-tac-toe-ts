import Board from "./Board.ts";
import Player from "./Player.ts";
import Notifier from "./Notifier.ts";

export default class Game {

    constructor(public board: Board, public players: Player[], public notifier: Notifier) {
    }

    render() {
        return '';
    }
}