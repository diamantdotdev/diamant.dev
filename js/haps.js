const haps = document.querySelector('#Haps')
const suspens = document.querySelector('#suspens')
const selected = document.querySelector('#selected')
const ct = document.querySelector('.container')
const topt = document.querySelector('.subtitle')
const bottomt = document.querySelector('.social')
const partt = document.querySelector('#particles-js')

const hapsCount = 34
let sus = 1

const setHaps = () => {
  const alea = Math.floor(Math.random() * hapsCount)
  haps.setAttribute('src', `./img/Haps/${alea}.png`)
}

haps.addEventListener('mouseover', () => {
  suspens.currentTime = 0
  suspens.play()
  window.hapsi = setInterval(() => {
    if (suspens.currentTime > 1.3) {
      setHaps()
      haps.style.transition = `all 0.01s linear`
      sus += 0.002
      if (sus <= 4) {
        haps.style.transform = `scale(${sus}, ${sus})`
      }
      if (suspens.currentTime > 20.2) {
        name.classList.add('suspens')
        topt.classList.add('suspens')
      }

      if (suspens.currentTime > 58.5) {
        ct.classList.add('suspens')
      }

      if (suspens.currentTime > 61.3) {
        bottomt.classList.add('suspens')
        partt.classList.add('suspens')
      }

      if (suspens.currentTime > 119) {
        window.location.replace('https://youtu.be/dQw4w9WgXcQ')
        clearInterval(window.hapsi)
      }
    }
  }, 100)
})

haps.addEventListener('mouseleave', () => {
  suspens.pause()
  selected.currentTime = 0
  if (suspens.currentTime > 1.3) {
    selected.play()
  }
  clearInterval(window.hapsi)
  haps.style.transition = `all 3s ease-in-out`
  sus = 1
  haps.style.transform = `scale(${sus}, ${sus})`
  name.classList.remove('suspens')
  ct.classList.remove('suspens')
  topt.classList.remove('suspens')
  bottomt.classList.remove('suspens')
  partt.classList.remove('suspens')
})

setHaps()
