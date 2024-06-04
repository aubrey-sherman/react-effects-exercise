import { useState } from 'react';
import CardGame from './CardGame.jsx';
import './App.css';


// App (effect: API call for deck) -> CardGame(deckId, state is cards picked) -> Card


/** App to render overall Cards app.
 *
 *
 *  App -> CardGame -> Card
*/

function App() {
  const [deck, setDeck] = useState({ id: null, isLoading: true });

  //useEffect(function fetchDeck);

  if (deck.isLoading) return <i>Loading...</i>;


  return (
    <div className="App">
      <CardGame deckId={deck.id} />
    </div>
  );
};

export default App;
