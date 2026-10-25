import { STATUSES } from '../data/statusConfig'
import { calculatePercentage } from '../utils/leadMetrics'

function StatusBreakdown({ counts, total }) {
  return (
    <section className="panel" aria-labelledby="status-heading">
      <h2 id="status-heading">Leads by status</h2>

      <ul className="status-list">
        {STATUSES.map((status) => {
          const count = counts[status.key]
          const percent = calculatePercentage(count, total)

          return (
            <li key={status.key} className="status-row">
              <span className="status-row__label">{status.label}</span>
              <span className="status-row__bar" aria-hidden="true">
                <span
                  className="status-row__fill"
                  style={{ width: `${percent}%`, backgroundColor: status.color }}
                />
              </span>
              <span className="status-row__count">
                {count} ({percent.toFixed(0)}%)
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default StatusBreakdown