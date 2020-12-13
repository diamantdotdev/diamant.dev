const page = document.querySelector('body')
const title = document.querySelector('.title')
const container = document.querySelector('.container')

let [X, Y, S, R] = [0, 0, 1, 0]

page.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft': //Left
      X--
      break
    case 'ArrowRight': //Right
      X++
      break
    case 'ArrowUp': //Up
      Y--
      break
    case 'ArrowDown': //Down
      Y++
      break
    case '+': //+
      S += 0.1
      break
    case '-': //-
      S -= 0.1
      break
    case 'a': //A
      R--
      break
    case 'e': //E
      R++
      break
  }
  title.style.transform = `translate(${X * 10}px, ${
    Y * 10
  }px) scale(${S}) rotate(${R * 10}deg)`
})
