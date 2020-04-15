import Card from "./models/Card";
import { colors, types } from "../cards";
import Estimation from "./models/Estimation";
import { observable, action } from "mobx";

class Game {
  @observable cards: Card[];
  @observable current: Card;
  @observable successCount: number;

  @action start(): void {
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

  @action check(estimation: Estimation): void {
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
