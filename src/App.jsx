import { useState, useEffect } from 'react';
import CardGame from './CardGame.jsx';
import './App.css';

//TODO: change to base API URL
const DECK_OF_CARDS_API = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

// App (effect: API call for deck) -> CardGame(deckId, state is cards picked) -> Card


/** App to render overall Cards app.
 *
 * Props: None
 * State: FIXME:
 *
 * App -> CardGame -> Card
*/

function App() {
  const [deck, setDeck] = useState({ id: null, isLoading: true });

  // useEffect to fetch from API and use response to update state
  // call the async fetch inside (without awaiting)
  useEffect(function fetchDeckWhenMounted() {
    async function fetchDeck() {
      const response = await fetch(DECK_OF_CARDS_API);
      const deckResult = await response.json();
      setDeck({
        id: deckResult.deck_id,
        idLoading: false
      });
    }
    fetchDeck();
  }, [ ]);

  if (deck.isLoading) return <i>Loading...</i>;


  return (
    <div className="App">
      <CardGame deckId={deck.id} />
    </div>
  );
};

export default App;
