function DateFilter({ startDate, endDate, onStartChange, onEndChange, onReset }) {
  const isRangeInvalid = startDate !== '' && endDate !== '' && startDate > endDate

  return (
    <div className="date-filter">
      <div className="date-filter__field">
        <label htmlFor="start-date">Applications from</label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => onStartChange(e.target.value)}
        />
      </div>

      <div className="date-filter__field">
        <label htmlFor="end-date">Applications to</label>
        <input
          id="end-date"
          type="date"
          value={endDate}
          onChange={(e) => onEndChange(e.target.value)}
        />
      </div>

      <button type="button" className="btn-reset" onClick={onReset}>
        Reset
      </button>

      {isRangeInvalid && (
        <p className="date-filter__error" role="alert">
          The start date must be on or before the end date.
        </p>
      )}
    </div>
  )
}

export default DateFilter