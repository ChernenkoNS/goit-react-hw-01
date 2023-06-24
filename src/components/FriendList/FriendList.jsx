import { FriendListItem } from './FriendsListItem';

export const FriendList = ({friends}) => {

  return (
    <ul >
      {friends.map(friend => (
        <FriendListItem
        friend={friend}/>
      ))}
    </ul>
  );
};
