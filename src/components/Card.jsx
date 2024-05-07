import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div>
      <p>Hello, {props.user.name}</p>
      <img src={props.user.avatar} alt={props.user.name} />
    </div>
  )
}

Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    active: PropTypes.bool,
  }),
}

export default Card;