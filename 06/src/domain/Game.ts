import Card from "./models/Card";
import { colors, types } from "../cards";
import Estimation from "./models/Estimation";

class Game {
  cards: Card[];
  current: Card;
  successCount: number;

  constructor() {
    this.generateCards();
    this.shuffleCards();
    this.successCount = 0;

    this.current = this.cards.pop();
  }

  generateCards(): void {
    this.cards = [];
    colors.forEach((color) => {
      types.forEach((type, index) => {
        this.cards.push({
          type: type,
          color: color,
          height: index,
        });
      });
    });
  }

  shuffleCards(): void {
    for (let i: number = this.cards.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      const temp: Card = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  check(estimation: Estimation): void {
    const newCard = this.cards.pop();
    if (newCard) {
      if (
        (estimation === Estimation.HIGHER &&
          newCard.height >= this.current.height) ||
        (estimation === Estimation.LOWER &&
          newCard.height <= this.current.height)
      ) {
        this.successCount++;
      }
      this.current = newCard;
    } else {
      this.current = null;
    }
  }
}

export default Game;
