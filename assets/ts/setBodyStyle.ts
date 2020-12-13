const actualDate = new Date()
const hours = actualDate.getHours()

const getLight = () => {
  if (hours < 18 && hours >= 8) {
    return 'day'
  } else {
    return 'night'
  }
}

document.body.className = `${getLight()} ${
  Math.round(Math.random() * 100) == 69 ? 'shiny' : ''
}`
document.querySelectorAll('body *').forEach((e) => {
  e.className += ` ${getLight()}`
})
