const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatDate(isoDate) {
  const [year, month, day] = isoDate.split('-')
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`
}