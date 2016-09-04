import { updateCard, deleteCard } from '../actions';
import { connect } from 'react-redux';
import CardModal from './CardModal';

const mapState2Props = ({ cards }, { params: { cardId }}) => ({
  card: cards.filter(card => card.id === parseInt(cardId, 10))[0]
});

const mapDispatch2Props = dispatch => ({
  onSave: card => dispatch(updateCard(card)),
  onDelete: cardId => dispatch(deleteCard(cardId))
});

export default connect(mapState2Props, mapDispatch2Props)(CardModal);
