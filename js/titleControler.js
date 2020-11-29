const page = document.querySelector('body');
const title = document.querySelector('.title');
const container = document.querySelector('.container');

let [X, Y, S, R] = [0, 0, 1, 0];

page.addEventListener('keydown', (e) => {
  if (36 > e.keyCode < 41) {
    switch (e.keyCode) {
      case 37: //Left
        X--;
        break;
      case 39: //Right
        X++;
        break;
      case 38: //Up
        Y--;
        break;
      case 40: //Down
        Y++;
        break;
      case 107: //+
        S += 0.1;
        break;
      case 109: //-
        S -= 0.1;
        break;
      case 65: //A
        R--;
        break;
      case 69: //E
        R++;
        break;
    }
    title.style.transform = `translate(${X * 10}px, ${Y * 10
      }px) scale(${S}) rotate(${R * 10}deg)`;
  }
});
