import css from '../Statistics/Statistics.module.css'

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  console.log(getRandomHexColor())

export const StatisticsItem = ({stat}) => {
const {id, label, percentage} = stat
console.log()
return (
<li key={id} className={css.item} style={{backgroundColor:getRandomHexColor()}}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}</span>
</li>
)
}