import CardModal from './CardModal';
import { connect } from 'react-redux';
import { addCard } from '../actions';

const mapState2Props = (props, { params: { deckId } }) => ({
  card: { deckId }
});

const mapDispatch2Props = dispatch => ({
  onSave: card => dispatch(addCard(card))
});

export default connect(mapState2Props, mapDispatch2Props)(CardModal);
