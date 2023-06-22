import data from '../../data/data/data.json'
// import css from '../Statistics/Statistics.module.css'

export const Statistics = (
) => {
    return (
        <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li className="item">
      <span className="label">.docx</span>
      <span className="percentage">{data.percentage}</span>
    </li>
    <li className="item">
      <span className="label">.mp3</span>
      <span className="percentage">{data.percentage}</span>
    </li>
    <li className="item">
      <span className="label">.pdf</span>
      <span className="percentage">{data.percentage}</span>
    </li>
    <li className="item">
      <span className="label">.mp4</span>
      <span className="percentage">{data.percentage}</span>
    </li>
  </ul>
</section>
    )
}