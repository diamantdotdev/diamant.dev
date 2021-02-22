const githubUsername = 'diamantdotdev'
const githubUrl = `https://api.github.com/users/${githubUsername}/repos`

const waitingText = document.querySelector('.waiting-text')
const projectsDiv = document.querySelector('.github')
const container = document.querySelector('.container')

const gitName = document.querySelector('.github-infos .infos .name')
const gitDesc = document.querySelector('.github-infos .infos .desc')
const gitURL = document.querySelector('#gitURL')
const url = document.querySelector('#url')

let repos = []
let currentRepoChoosen = -1

fetch(githubUrl)
  .then((response) => response.json())
  .then((data) => {
    waitingText.remove()
    const sortedRepos = data.sort()
    sortedRepos.forEach((repo) => {
      if (repo.name === githubUsername || repo.archived) {
        return
      }
      const datetoreturn = new Date(repo.updated_at).getTime()
      const reporeturn = { ...repo, updateddate: datetoreturn }
      repos.push(reporeturn)
    })
    let countrepo = 1
    repos.sort((a, b) => {
      return b.updateddate - a.updateddate
    })
    repos.forEach((repo, i) => {
      if (countrepo > 5) return
      countrepo++
      projectsDiv.innerHTML += `
          <p class="project"><a href="#" value="${i}" class="${getLight()}" rel="noopener noreferrer"
            >${repo.full_name}</a
          >
          </p>`
    })
    const repolinks = document.querySelectorAll('.project')
    repolinks.forEach((repolink, i) => {
      repolink.addEventListener('click', () => {
        if (i != currentRepoChoosen) {
          if (!container.classList.contains('githubed')) {
            container.classList.add('githubed')
          }
          repolinks[i].classList.add('selected')
          if (currentRepoChoosen > -1) {
            repolinks[currentRepoChoosen].classList.remove('selected')
          }
          currentRepoChoosen = i
          gitName.textContent = repos[i].name
          gitDesc.textContent =
            repos[i].description || 'No description provided.'
          gitURL.setAttribute('href', repos[i].html_url)
          if (repos[i].homepage) {
            url.removeAttribute('hidden')
            url.setAttribute('href', repos[i].homepage)
          } else {
            url.setAttribute('hidden', '')
          }
        } else {
          container.classList.remove('githubed')
          repolinks[currentRepoChoosen].classList.remove('selected')
          currentRepoChoosen = -1
        }
      })
    })
  })
