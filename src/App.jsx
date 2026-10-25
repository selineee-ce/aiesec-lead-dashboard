import { useState } from 'react'
import './App.css'
import { MOCK_LEADS } from './data/mockLeads'
import Sidebar from './components/Sidebar'
import { filterLeadsByDate, searchLeads, calculateMetrics } from './utils/leadMetrics'
import Header from './components/Header'
import DateFilter from './components/DateFilter'
import KpiCard from './components/KpiCard'
import StatusBreakdown from './components/StatusBreakdown'
import LeadsTable from './components/LeadsTable'

function App() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const dateFilteredLeads = filterLeadsByDate(MOCK_LEADS, startDate, endDate)
  const metrics = calculateMetrics(dateFilteredLeads)
  const visibleLeads = searchLeads(dateFilteredLeads, searchQuery)

  function handleReset() {
    setStartDate('')
    setEndDate('')
  }

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Header>
          <DateFilter
            startDate={startDate}
            endDate={endDate}
            onStartChange={setStartDate}
            onEndChange={setEndDate}
            onReset={handleReset}
          />
        </Header>

        <section className="kpi-grid" aria-label="Key metrics">
          <KpiCard
            label="Total Leads"
            value={metrics.total.toLocaleString('en-US')}
            note="Applications in selected range"
          />
          <KpiCard
            label="Converted Leads"
            value={metrics.converted.toLocaleString('en-US')}
            note="Status: Realized"
          />
          <KpiCard
            label="Conversion rate"
            value={`${metrics.conversionRate.toFixed(1)}%`}
            note="Converted / Total leads"
          />
          <KpiCard
            label="Pending Leads"
            value={metrics.pending.toLocaleString('en-US')}
            note="Applied, Accepted, Approved"
          />
        </section>

        <StatusBreakdown counts={metrics.counts} total={metrics.total} />

        <LeadsTable
          leads={visibleLeads}
          totalInRange={dateFilteredLeads.length}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

      </main>
    </div>
  )
}

export default App