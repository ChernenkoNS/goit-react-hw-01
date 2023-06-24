import PropTypes  from 'prop-types'
import css from '../TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
  return (
    <table className={css.transactionsTable}>
      <thead>
        <tr className={css.title}>
          <th className={css.item}>Type</th>
          <th className={css.item}>Amount</th>
          <th className={css.item}>Currency</th>
        </tr>
      </thead>

      {items.map(item => {
        return (
          <tbody key={item.id} className={css.tableItem}>
            <tr className={css.title}>
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

TransactionHistory.propTypes ={
  items: PropTypes.array.isRequired
}