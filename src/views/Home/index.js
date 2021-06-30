import React, { useState, useEffect } from 'react'
import { subDays, format } from 'date-fns'
import CardWrapper from '../../components/CardWrapper'
import api from '../../api'
import './styles.css'

export default function Home() {
  const [date, setDate] = useState('')
  const [repos, setRepos] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

  const fetchGithubRepos = async date => {
    const { data } = await api.getMostStarredRepos(date)
    setRepos(data)
  }

  const fetchGithubReposNextPage = async () => {
    if (repos.incomplete_results) {
      const { data } = await api.getMostStarredReposNextPage(date, currentPage)
      setRepos(prev => {
        return {
          incomplete_results: data.incomplete_results,
          items: prev.items.concat(data.items),
          total_count: data.total_count,
        }
      })
      setCurrentPage(prev => 1 + prev)
    }
  }

  useEffect(() => {
    const date30DaysAgo = subDays(Date.now(), 30)
    const formattedDate = format(date30DaysAgo, 'yyyy-MM-dd')
    setDate(formattedDate)
    fetchGithubRepos(formattedDate)
    return () => {
      setDate('')
      setRepos({})
      setCurrentPage(1)
    }
  }, [])

  return (
    <div className="home-page container mx-auto">
      <CardWrapper
        onFetchNextPage={() => fetchGithubReposNextPage(date)}
        items={repos.items}
      />
    </div>
  )
}
