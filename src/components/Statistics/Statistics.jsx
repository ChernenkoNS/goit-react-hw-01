import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ stats, title }) => {
  return (
    <div className={css.arуa}>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}
        <ul className={css.statList}>
          {stats.map(stat => (
            <StatisticsItem key={stat.id} stat={stat} />
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};
