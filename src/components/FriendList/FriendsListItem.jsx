import PropTypes  from 'prop-types'
import css from '../FriendList/FriendList.module.css';

export const FriendListItem = ({ friend }) => {
    const {id, isOnline, name, avatar} = friend
  return (
    <li key={id} className = {css.item}>
      <span className={isOnline ? css.red : css.green}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend:PropTypes.object.isRequired,

}
