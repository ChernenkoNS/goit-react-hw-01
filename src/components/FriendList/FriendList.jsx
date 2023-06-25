import PropTypes  from 'prop-types'
import { FriendListItem } from './FriendsListItem';

export const FriendList = ({friends}) => {
  return (
    <ul >
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
}
