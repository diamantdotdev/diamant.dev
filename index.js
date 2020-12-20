const githubUsername = 'diamantdotdev';
const githubUrl = `https://api.github.com/users/${githubUsername}/repos`;
const waitingText = document.querySelector('.waiting-text');
const projectsDiv = document.querySelector('.github');
fetch(githubUrl)
    .then((response) => response.json())
    .then((data) => {
    waitingText.remove();
    const sortedRepos = data.sort();
    let repos = [];
    sortedRepos.forEach((repo) => {
        if (repo.name === githubUsername || repo.archived) {
            return;
        }
        const datetoreturn = new Date(repo.updated_at).getTime();
        const reporeturn = { ...repo, updateddate: datetoreturn };
        repos.push(reporeturn);
    });
    let countrepo = 1;
    repos.sort((a, b) => {
        return b.updateddate - a.updateddate;
    });
    repos.forEach((repo) => {
        if (countrepo > 5)
            return;
        countrepo++;
        projectsDiv.innerHTML += `
          <p class="project"><a href="${repo.html_url}" class="${getLight()}" target="_blank" rel="noopener noreferrer"
            >${repo.full_name}</a
          >
          </p>`;
    });
});
const actualDate = new Date();
const hours = actualDate.getHours();
const getLight = () => {
    if (hours < 18 && hours >= 8) {
        return 'day';
    }
    else {
        return 'night';
    }
};
document.body.className = `${getLight()} ${Math.round(Math.random() * 100) == 69 ? 'shiny' : ''}`;
document.querySelectorAll('body *').forEach((e) => {
    e.className += ` ${getLight()}`;
});
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userLang = urlParams.get('lang') || navigator.language.slice(0, 2);
const pinfo = document.createElement('p');
const gtitle = document.querySelector('.gtitle');
const waitText = document.querySelector('.waiting-text');
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
};
const theName = document.querySelector('.name');
const subtitle = document.querySelector('.subtitle');
switch (userLang) {
    case 'fr':
        transl(stringlang.fr);
        break;
    case 'translator':
        transl(stringlang.translator);
        break;
    case 'espo':
        transl(stringlang.espo);
        break;
    default:
        transl(stringlang.en);
        break;
}
function transl(e) {
    theName.innerHTML = e.name;
    subtitle.innerHTML = e.function;
    pinfo.innerHTML = e.imageInfo;
    gtitle.innerHTML = e.gtitle;
    waitText.innerHTML = e.waitText;
}
