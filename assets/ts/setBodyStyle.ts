const actualDate = new Date()
const hours = actualDate.getHours()

if (hours <= 18 || hours >= 8) {
  document.body.className = 'day'
} else {
  document.body.className = 'night'
}
