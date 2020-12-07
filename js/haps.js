const haps = document.querySelector('#Haps')
const suspens = document.querySelector('#suspens')
const selected = document.querySelector('#selected')
const ct = document.querySelector('.container')
const topt = document.querySelector('.subtitle')
const bottomt = document.querySelector('.social')
const partt = document.querySelector('#particles-js')

const pinfo = document.createElement('p')
pinfo.innerHTML = 'Click on the image to change it'

const hapsCount = 34
let sus = 1

const setHaps = () => {
  const alea = Math.floor(Math.random() * hapsCount)
  haps.setAttribute('src', `./img/Haps/${alea}.png`)
}

const songPlay = () => {
  suspens.currentTime = 1
  selected.pause()
  suspens.play()
  window.hapsi = setInterval(() => {
    if (suspens.currentTime > 1.3) {
      pinfo.remove()
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
        haps.style.cursor = 'none'
      }

      if (suspens.currentTime > 119) {
        window.location.replace('https://youtu.be/dQw4w9WgXcQ')
        haps.style.transition = `all 1s linear`
        haps.style.transform = `scale(100, 100)`
        clearInterval(window.hapsi)
      }
    } else if (suspens.currentTime == 1) {
      haps.style.cursor = 'pointer'
      topt.before(pinfo)
      clearInterval(window.hapsi)
    }
  }, 100)
}

haps.addEventListener('mouseover', songPlay)

haps.addEventListener('mousedown', () => {
  if (suspens.currentTime == 1) {
    songPlay()
    haps.style.cursor = 'default'
  }
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
  haps.style.cursor = 'default'
})

setHaps()
