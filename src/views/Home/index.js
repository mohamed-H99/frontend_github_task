import React, { useState, useEffect, Suspense, lazy } from 'react'
import { subDays, format } from 'date-fns'
import TheLoader from '../../components/TheLoader'
import api from '../../api'
import './styles.css'

const CardWrapper = lazy(() => import('../../components/CardWrapper'))

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
          items: [...prev.items, ...data.items],
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
    <Suspense fallback={<TheLoader />}>
      <div className="home-page container mx-auto">
        <CardWrapper fetchMore={fetchGithubReposNextPage} items={repos.items} />
      </div>
    </Suspense>
  )
}
