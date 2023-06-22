import friends from '../../data/friends/friends.json';
// import css from '../FriendList/FriendList.module.css'

export const FriendList = () => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id} class="item">
          <span class="status"></span>
          <img
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
