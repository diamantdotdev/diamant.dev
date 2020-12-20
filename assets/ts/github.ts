const githubUsername = 'diamantdotdev'
const githubUrl = `https://api.github.com/users/${githubUsername}/repos`

const waitingText = document.querySelector('.waiting-text')
const projectsDiv = document.querySelector('.github')

fetch(githubUrl)
  .then((response) => response.json())
  .then((data) => {
    waitingText.remove()
    const sortedRepos = data.sort()
    let repos = []
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
    repos.forEach((repo) => {
      if (countrepo > 5) return
      countrepo++
      projectsDiv.innerHTML += `
          <p class="project"><a href="${
            repo.html_url
          }" class="${getLight()}" target="_blank" rel="noopener noreferrer"
            >${repo.full_name}</a
          >
          </p>`
    })
  })
