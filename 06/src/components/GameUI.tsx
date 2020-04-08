import React, { FunctionComponent, useState } from "react";
import Button from "./Button";
import Game from "../domain/Game";
import Estimation from "../domain/models/Estimation";
import CardDisplay from "./CardDisplay";

function GameUI(): FunctionComponent {
  const [game, setGame] = useState();
  const [card, setCard] = useState();
  const [successCount, setSuccessCount] = useState(0);

  const start = (): void => {
    const newGame = new Game();
    setGame(newGame);
    setCard(newGame.current);
  };

  const estimatedHigher = (): void => {
    game.check(Estimation.HIGHER);
    setCard(game.current);
    setSuccessCount(game.successCount);
  };

  const estimatedLower = (): void => {
    game.check(Estimation.LOWER);
    setCard(game.current);
    setSuccessCount(game.successCount);
  };

  return (
    <div>
      {!game ? (
        <Button onClick={start}>Start</Button>
      ) : (
        <>
          {!!card && <CardDisplay card={card} />}
          <Button onClick={estimatedHigher} disabled={!card}>
            Higher
          </Button>
          <Button onClick={estimatedLower} disabled={!card}>
            Lower
          </Button>
          <p>Correct evaluated cards: {successCount}</p>
        </>
      )}
    </div>
  );
}

export default GameUI;
