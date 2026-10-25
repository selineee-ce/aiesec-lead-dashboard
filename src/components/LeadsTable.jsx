import { STATUSES } from '../data/statusConfig'
import { formatDate } from '../utils/formatDate'

function LeadsTable({ leads, totalInRange, searchQuery, onSearchChange }) {
  return (
    <section className="panel" aria-labelledby="leads-heading">
      <div className="panel__header">
        <h2 id="leads-heading">Lead records</h2>

        <div className="search-field">
          <label htmlFor="lead-search">Search name or ID</label>
          <input
            id="lead-search"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="e.g. Alya or L-1001"
          />
        </div>
      </div>

      <p className="panel__meta" aria-live="polite">
        Showing {leads.length} of {totalInRange} leads
      </p>

      {leads.length === 0 ? (
        <div className="empty-state">
          <p className="empty-state__title">No leads found</p>
          <p>Try a different date range or search term.</p>
        </div>
      ) : (
        <div className="table-wrapper" tabIndex={0} role="region" aria-label="Lead records table">
          <table className="leads-table">
            <thead>
              <tr>
                <th scope="col">Lead ID</th>
                <th scope="col">Applicant Name</th>
                <th scope="col">Application Date</th>
                <th scope="col">Program</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => {
                const status = STATUSES.find((s) => s.key === lead.status)

                return (
                  <tr key={lead.id}>
                    <td>{lead.id}</td>
                    <td>{lead.name}</td>
                    <td>{formatDate(lead.applicationDate)}</td>
                    <td>{lead.program}</td>
                    <td>
                      <span className="status-badge">
                        <span
                          className="status-badge__dot"
                          style={{ backgroundColor: status ? status.color : '#64748B' }}
                          aria-hidden="true"
                        />
                        {status ? status.label : lead.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default LeadsTable