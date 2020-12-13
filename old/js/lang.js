const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const userLang = urlParams.get('lang') || navigator.language.slice(0, 2)
const pinfo = document.createElement('p')

const stringlang = {
  fr: {
    name: 'Diamant Lelouette.',
    legal: '(Nom légal: Jordan Lelouette)',
    function: 'Développeur au grand coeur.',
    social: ['Github.', 'LinkedIn.', 'Youtube.', 'Itch.io', 'Mail.'],
    imageInfo: "Cliquez sur l'image pour la changer.",
  },
  en: {
    name: 'Diamant Lelouette.',
    legal: '(Call me Dia, Diams or Diamond ~ Legal name: Jordan Lelouette)',
    function: 'Dev with a big ♥ !',
    social: ['Github.', 'LinkedIn.', 'Youtube.', 'Itch.io', 'Mail.'],
    imageInfo: 'Click on the image to change it.',
  },
  espo: {
    name: 'Diamanto Lelouetto.',
    legal: '(Nomo légalo: Jordano Lelouetto)',
    function: 'Développeuro o grando coeuro !',
    social: ['Githubo.', 'LinkedIno.', 'Youtubo.', 'Itcho.io', 'Mailo.'],
    imageInfo: 'Cliquéo suro lo imageo pouro lo changéo.',
  },
  translator: {
    name: "Animaux britannique limbes the'u'et.",
    legal: "(Emplacements Jordanie Tachpanhes ouvrir lelea'u'et).",
    function: 'Des changements majeurs dans le cœur.',
    social: [
      'Certaines des riches difficultés sociales.',
      'Chacune des jambes.',
      'nous acceptons.',
      'Oh, dans un court laps de temps et rapidement.',
      'Sujet principal.',
    ],
    imageInfo: 'Double-cliquez ensuite si vous voulez changer le gouvernement.',
  },
}

const name = document.querySelector('.title')
const legal = document.querySelector('.legal')
const functions = document.querySelector('.subt')
const social = document.querySelectorAll('.social_name')

switch (userLang) {
  case 'fr':
    transl(stringlang.fr)
    break

  case 'translator':
    transl(stringlang.translator)
    break

  case 'espo':
    transl(stringlang.espo)
    break

  default:
    transl(stringlang.en)
    break
}

function transl(e) {
  name.innerText = e.name
  legal.innerText = e.legal
  functions.innerText = e.function
  let il = 0
  social.forEach((el) => {
    el.innerText = e.social[il]
    il++
  })
  pinfo.innerHTML = e.imageInfo
}
