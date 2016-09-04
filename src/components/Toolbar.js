import React from 'react';
import { showAddDeck, filterCards } from '../actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const mapDispatch2Props = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck()),
    onFilter: query => dispatch(filterCards(query))
});

const Toolbar = ({ deckId, showAddDeck, onFilter }) => {
  let deckTools = deckId ? (
    <div>
      <Link className='btn' to={`/deck/${deckId}/new`}>✚ New Card</Link>
      <Link className='btn' to={`/deck/${deckId}/study`}>Study Deck</Link>
      <input
        onChange={event => onFilter(event.target.value)}
        className='search'
        type='search'
        placeholder='Search Deck...'
      />
    </div>
  ) : null;

  return (
    <div className='toolbar'>
      <div>
        <button onClick={showAddDeck}>✚ New Deck</button>
      </div>
      {deckTools}
    </div>
  );
};

export default connect(null, mapDispatch2Props)(Toolbar);
