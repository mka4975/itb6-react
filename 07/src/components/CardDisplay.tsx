import * as React from "react";
import Card from "../domain/models/Card";
import styled from "styled-components";

interface Props {
  card: Card;
}

const CardContainer = styled.div`
  border-radius: 6px;
  border: black solid 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 100px;

  color: ${({ color }): string =>
    color === "heart" || color === "diamond" ? "#eb3423" : "#626569"};
`;

function CardDisplay({ card: { color, type } }: Props): JSX.Element {
  let image = "&hearts;";

  switch (color) {
    case "heart":
      image = "&hearts;";
      break;
    case "club":
      image = "&clubs;";
      break;
    case "spade":
      image = "&spades;";
      break;
    case "diamond":
      image = "&diams;";
      break;
  }

  return (
    <CardContainer>
      <Text color={color} dangerouslySetInnerHTML={{ __html: image }} />
      <Text>{type}</Text>
    </CardContainer>
  );
}

export default CardDisplay;
