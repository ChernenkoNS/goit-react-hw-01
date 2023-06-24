import transactions from '../../data/transactions/transactions.json';
import css from '../TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = () => {
  return (
    <table className={css.zzz}>
      <thead>
        <tr className={css.title}>
          <th className={css.item}>Type</th>
          <th className={css.item}>Amount</th>
          <th className={css.item}>Currency</th>
        </tr>
      </thead>

      {transactions.map(item => {
        return (
          <tbody className={css.tableItem}>
            <tr key={item.id} className={css.title}>
              <td className={css.item}>{item.type}</td>
              <td className={css.item}>{item.amount}</td>
              <td className={css.item}>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
