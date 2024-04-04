import Square from "./Square.ts";
import {ScoreList, valueNumber} from "./Types.ts";

export default class Player {
    public scoreList: ScoreList = {};
    public squares: Square[] = [];
    public isRobot = false;
    public element: HTMLElement | undefined;

    constructor(
        public name: string,
        public shape: 'O'|'X',
        public playerTurn?: boolean,
        public color?: string
    ) {
        this.build();
    }

    build() {
        this.element = document.createElement('i') as HTMLElement;
        this.element.id = this.name;
        if (this.color) {
            this.element.style.color = this.color;
        }
        this.element.className = (this.shape === 'X') ? 'fa-solid fa-xmark' : 'fa-regular fa-circle';
    }

    reset() {
        this.scoreList = [];
        this.squares = [];
        this.playerTurn = false;
    }

    public check(square: Square) {
        this.squares.push(square);
        this.calculateScore();
    }

    public calculateScore() {
        const values = this.squares.map(square => square.value);
        if (values.length >= 3) {
            this.scoreList = this.generateCombinationsList(values);
        }
    }

    public generateCombinationsList(values: valueNumber[]) {
        const scoreList: ScoreList = {};
        for (let i = 0; i < values.length; i++) {
            for (let j = i + 1; j < values.length; j++) {
                for (let k = j + 1; k < values.length; k++) {
                    let list = [values[i], values[j], values[k]];
                    let sum = list.reduce((acc, value) => acc + value, 0);
                    scoreList[sum] = list;
                }
            }
        }
        return scoreList;
    }

    public getSquareValues() {
        return this.squares.map(square => square.value);
    }
}