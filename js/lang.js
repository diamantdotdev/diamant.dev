const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const userLang = urlParams.get('lang') || navigator.language

const stringlang = {
  fr: {
    name: 'Diamant Lelouette.',
    legal: '(Nom légal: Jordan Lelouette)',
    function: 'Développeur au grand coeur.',
    social: ['Github.', 'LinkedIn.', 'Youtube.', 'Itch.io', 'Mail.'],
  },
  en: {
    name: 'Diamant Lelouette.',
    legal: '(Call me Dia, Diams or Diamond ~ Legal name: Jordan Lelouette)',
    function: 'Dev with a big ♥ !',
    social: ['Github.', 'LinkedIn.', 'Youtube.', 'Itch.io', 'Mail.'],
  },
  espo: {
    name: 'Diamanto Lelouetto.',
    legal: '(Nomo légalo: Jordano Lelouetto)',
    function: 'Développeuro o grando coeuro !',
    social: ['Githubo.', 'LinkedIno.', 'Youtubo.', 'Itcho.io', 'Mailo.'],
  },
  translator: {
    name: "Animaux britannique limbes the'u'et.",
    legal: "(Emplacements Jordanie Tachpanhes ouvrir lelea'u'et).",
    function: 'Des changements majeurs dans le cœur.',
    social: [
      'Certaines des riches difficultés sociales.',
      'Chacune des jambes.',
      'Riches.',
      'Oh, dans un court laps de temps et rapidement.',
      'Sujet principal.',
    ],
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
}
