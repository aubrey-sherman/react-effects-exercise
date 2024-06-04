import { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "./Card.jsx";

const BASE_URL = "https://deckofcardsapi.com/api/deck/"

/** CardGame
 *
 * Props: deckId
 * State: array of card image URLs
 *
 * App -> CardGame -> Card
 */

function CardGame({ deckId }) {
  const [cards, setCards] = useState([]);
  console.log("cards", cards.length);

  async function drawCard() {
    const response = await fetch(`${BASE_URL}/${deckId}/draw/?count=1`);
    const cardResult = await response.json();
    if(cardResult.remaining === 0 && cardResult.cards.length === 0) {
      alert("No cards left!");
      return;
    }
    const cardImg = cardResult.cards[0].image;
    setCards(cards => [...cards, cardImg]);
  }

  return (
    <div>
      <button onClick={drawCard} disabled={cards.length >= 52}>Give me a card!</button>
      <div>
        {cards.map(cardImg => {
          return <Card img={cardImg} key={cardImg}/>
        })}
      </div>
    </div>
  );
}

export default CardGame;