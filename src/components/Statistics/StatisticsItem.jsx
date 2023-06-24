import PropTypes  from 'prop-types'
import css from '../Statistics/Statistics.module.css'

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

export const StatisticsItem = ({stat}) => {
const {id, label, percentage} = stat
return (
<li key={id} className={css.item} style={{backgroundColor:getRandomHexColor()}}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}</span>
</li>
)
}

StatisticsItem.propTypes = {
  stat: PropTypes.object.isRequired
}