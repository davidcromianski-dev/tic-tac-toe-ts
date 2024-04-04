import Player from "./Player.ts";
import Square from "./Square.ts";
import {valueNumber} from "./Types.ts";

export default class Robot extends Player {
    isRobot = true;

    async play() {
        Game.board.lock();
        if (this.squares.length === 0) {
            await this.randomPlay();
        } else {
            await this.calculatedPlay();
        }
        Game.board.unlock();
    }

    async randomPlay() {
        const emptySquares = Game.squares.filter((square: Square) => !square.occupied) as Square[];
        const randomNumber = Math.floor(Math.random() * emptySquares.length);
        const square = emptySquares[randomNumber];
        square.dispatchEvent(new Event('click'));
    }

    async calculatedPlay() {
        const robotWinningSquares = this.searchForWinningSquares(this.getSquareValues());
        if (robotWinningSquares.length > 0) {
            robotWinningSquares[0].dispatchEvent(new Event('click'));
            return robotWinningSquares[0];
        }

        const opponent = Game.getOpponent(this) as Player;
        const opponentWinningSquares = this.searchForWinningSquares(opponent.getSquareValues());
        if (opponentWinningSquares.length > 0) {
            opponentWinningSquares[0].dispatchEvent(new Event('click'));
            return opponentWinningSquares[0];
        }

        const squareValues = this.getSquareValues();
        for (let i = 0; i < squareValues.length; i++) {

        }
    }

    public findBestPlay(values: valueNumber[]) {


    }

    public searchForWinningSquares(squareValues: valueNumber[]) {
        const winningSquares = [];
        const emptySquares = Game.getEmptySquares();
        for (const square of emptySquares) {
            let clonedValues = squareValues.slice();
            clonedValues.push(square.value);
            let scoreList = this.generateCombinationsList(clonedValues);
            for (const sum in scoreList) {
                if (Game.win(sum)) {
                    winningSquares.push(square);
                }
            }
        }
        return winningSquares;
    }
}