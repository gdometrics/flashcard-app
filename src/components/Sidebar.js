import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addDeck, hideAddDeck } from '../actions';

const mapState2Props = ({ decks, addingDeck }) => ({
    decks,
    addingDeck
});

const mapDispatch2Props = dispatch => ({
  addDeck: name => dispatch(addDeck(name)),
  hideAddDeck: () => dispatch(hideAddDeck())
});

const Sidebar = React.createClass({
  componentDidUpdate() {
    var element = ReactDOM.findDOMNode(this.refs.add);
    if (element)
      element.focus();
  },
  render() {
    let props = this.props;
    return (
      <div className="sidebar">
        <h2>All Decks</h2>
        <ul>
          {props.decks.map((deck, i) =>
            <li key={i}>
              <Link to={`/deck/${deck.id}`}>{deck.name}</Link>
            </li>
          )}
        </ul>
        {props.addingDeck && <input ref='add' placeholder="My Deck" onKeyUp={this.createDeck}/>}
      </div>
    );
  },
  createDeck(event) {
    if (event.which === 27) {
      this.props.hideAddDeck();
      return;
    }
    if (event.which !== 13)
      return;
    let name = ReactDOM.findDOMNode(this.refs.add).value;
    this.props.addDeck(name);
    this.props.hideAddDeck();
  }
});

export default connect(mapState2Props, mapDispatch2Props)(Sidebar);
