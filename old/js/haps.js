const haps = document.querySelector('#Haps')
const suspens = document.querySelector('#suspens')
const selected = document.querySelector('#selected')
const ct = document.querySelector('.container')
const topt = document.querySelector('.subtitle')
const bottomt = document.querySelector('.social')
const partt = document.querySelector('#particles-js')

const hapsCount = 34
let sus = 1
let ancienAlea = -1

const setHaps = () => {
  const aleaGen = Math.floor(Math.random() * hapsCount)
  const aleaGen2 =
    aleaGen != ancienAlea
      ? aleaGen
      : aleaGen + (Math.floor(Math.random() - 0.5) == 0)
      ? -1
      : 1
  const alea = () => {
    switch (aleaGen2) {
      case -1:
        return 1

      case hapsCount + 1:
        return hapsCount - 1

      default:
        return aleaGen2
    }
  }
  ancienAlea = alea()
  haps.setAttribute('src', `./img/Haps/${alea()}.png`)
}

const songPlay = () => {
  suspens.currentTime = 1
  selected.pause()
  suspens.play()
  clearInterval(window.hapsi)
  window.hapsi = setInterval(() => {
    if (suspens.currentTime > 1.3) {
      pinfo.remove()
      setHaps()
      haps.style.transition = `all 0.25s linear`
      sus += 0.005
      haps.style.transform = `scale(${sus}, ${sus})`
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
        haps.style.transform = `translate(0, 50px) scale(${sus}, ${sus})`
      }

      if (suspens.currentTime > 80.8) {
        haps.style.transform = `translate(0, 50px) scale(${sus}, ${sus}) rotate(${
          (suspens.currentTime - 80.8) * (360 / 38)
        }deg)`
      }

      if (suspens.currentTime > 119) {
        haps.style.transition = `all 1s linear`
        haps.style.transform = `scale(0, 0)`
        setTimeout(() => {
          window.location.replace('https://youtu.be/dQw4w9WgXcQ')
        }, 1000)
        clearInterval(window.hapsi)
      }
    } else if (suspens.currentTime == 1) {
      haps.style.cursor = 'pointer'
      topt.before(pinfo)
      clearInterval(window.hapsi)
    }
  }, 250)
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
