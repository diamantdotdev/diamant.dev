const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const userLang = urlParams.get('lang') || navigator.language.slice(0, 2)
const pinfo = document.createElement('p')
const gtitle = document.querySelector('.gtitle')
const waitText = document.querySelector('.waiting-text')

const stringlang = {
  fr: {
    name: 'DiamantDev.',
    function: 'Développeur au grand coeur.',
    imageInfo: "Cliquez sur l'image pour la changer.",
    gtitle: 'Mes projets github:',
    waitText: 'Chargement...',
  },
  en: {
    name: 'DiamantDev.',
    function: 'Dev with a big ♥ !',
    imageInfo: 'Click on the image to change it.',
    gtitle: 'My github projects:',
    waitText: 'Loading...',
  },
  espo: {
    name: 'DiamantoDevo.',
    function: 'Développeuro o grando coeuro.',
    imageInfo: 'Cliquéo suro lo imageo pouro lo changéo.',
    gtitle: 'Meos projetos githubo:',
    waitText: 'Chargemento...',
  },
  translator: {
    name: "Animaux britannique limbes the'u'et.",
    function: 'Des changements majeurs dans le cœur.',
    imageInfo: 'Double-cliquez ensuite si vous voulez changer le gouvernement.',
    gtitle: 'Mélanger la douleur projet:',
    waitText: 'Unificatrice ...',
  },
}

const theName = document.querySelector('.name')
const subtitle = document.querySelector('.subtitle')

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
  theName.innerHTML = e.name
  subtitle.innerHTML = e.function
  pinfo.innerHTML = e.imageInfo
  gtitle.innerHTML = e.gtitle
  waitText.innerHTML = e.waitText
}
