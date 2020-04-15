import * as React from "react";
import Button from "./Button";
import Game from "../domain/Game";
import Estimation from "../domain/models/Estimation";
import CardDisplay from "./CardDisplay";
import { observer } from "mobx-react";
import { autorun } from "mobx";

const game = new Game();

autorun(() => {
  console.info(
    game.cards
      ? `There are ${game.cards.length} cards left and you have ${game.successCount} points`
      : "Start the game"
  );
});

const GameUI = observer(
  (): JSX.Element => (
    <div>
      {!game.cards ? (
        <Button onClick={(): void => game.start()}>Start</Button>
      ) : (
        <>
          {!!game.current && <CardDisplay card={game.current} />}
          <Button
            onClick={(): void => game.check(Estimation.HIGHER)}
            disabled={!game.current}
          >
            Higher
          </Button>
          <Button
            onClick={(): void => game.check(Estimation.LOWER)}
            disabled={!game.current}
          >
            Lower
          </Button>
          <p>Correct evaluated cards: {game.successCount}</p>
        </>
      )}
    </div>
  )
);

export default GameUI;
