import React from "react";
import PlayingCard from "./PlayingCard";
import {v1 as uuid} from "uuid";
import "./PlayingCardList.css";
import { useAxios } from './hooks'

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, getData] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");
  const addCard = async () => {
    await getData()
  };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
