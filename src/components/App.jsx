import { Container } from "./Container/Container";
import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


import data from '../data/data/data.json'
import friends from '../data/friends/friends.json'
import transactions from '../data/transactions/transactions.json'
import user from '../data/users/user.json'





export const App = () => {
  return (
    <Container >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
      title="Upload stats" 
      stats={data}
      /> 
      <FriendList
      friends={friends}
      />
      <TransactionHistory
      items={transactions}
      />
    </Container>
  );
};
