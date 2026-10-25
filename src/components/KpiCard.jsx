function KpiCard({ label, value, note, highlight }) {
  return (
    <article className={`kpi-card ${highlight ? 'kpi-card--highlight' : ''}`}>
      <h3 className="kpi-card__label">{label}</h3>
      <p className="kpi-card__value">{value}</p>
      {note && <p className="kpi-card__note">{note}</p>}
    </article>
  )
}

export default KpiCard