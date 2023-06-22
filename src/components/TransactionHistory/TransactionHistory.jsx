import transactions from '../../data/transactions/transactions.json';
import css from '../TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = () => {
  return (
    <table className={css.zzz}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map(item => {
        return (
          <tbody>
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
