import { STATUSES, CONVERTED_STATUS, PENDING_STATUSES } from '../data/statusConfig'

export function filterLeadsByDate(leads, startDate, endDate) {
  return leads.filter(function (lead) {
    if (startDate && lead.applicationDate < startDate) return false
    if (endDate && lead.applicationDate > endDate) return false
    return true
  })
}

export function countByStatus(leads) {
  const counts = {}

  for (const status of STATUSES) {
    counts[status.key] = 0
  }

  for (const lead of leads) {
    if (counts[lead.status] !== undefined) {
      counts[lead.status] += 1
    }
  }

  return counts
}

export function calculatePercentage(part, whole) {
  if (whole === 0) return 0
  return (part / whole) * 100
}

export function calculateConversionRate(convertedCount, totalCount) {
  return calculatePercentage(convertedCount, totalCount)
}

export function calculateMetrics(leads) {
  const total = leads.length
  const counts = countByStatus(leads)
  const converted = counts[CONVERTED_STATUS]

  let pending = 0
  for (const statusKey of PENDING_STATUSES) {
    pending += counts[statusKey]
  }

  return {
    total,
    converted,
    pending,
    conversionRate: calculateConversionRate(converted, total),
    counts,
  }
}

export function searchLeads(leads, query) {
  const text = query.trim().toLowerCase()
  if (text === '') return leads

  return leads.filter(function (lead) {
    return (
      lead.name.toLowerCase().includes(text) ||
      lead.id.toLowerCase().includes(text)
    )
  })
}