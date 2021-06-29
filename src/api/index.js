import http from '../services/http'

const getMostStarredRepos = (date = '') =>
  http.get(`/search/repositories?q=created:>${date}&sort=stars&order=desc`)

const getMostStarredReposNextPage = (date = '', current_page = 1) =>
  http.get(
    `/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${
      1 + current_page
    }`
  )

const api = {
  getMostStarredRepos,
  getMostStarredReposNextPage,
}

export default api
