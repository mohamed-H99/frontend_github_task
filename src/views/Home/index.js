import React, { useState, useEffect, Suspense } from 'react'
import { subDays, format } from 'date-fns'
import TheLoader from '../../components/TheLoader'
import CardWrapper from '../../components/CardWrapper'
import api from '../../api'
import './styles.css'

export default function Home() {
  const [date, setDate] = useState('')
  const [repos, setRepos] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [loaded, setLoaded] = useState(false)

  const fetchRepos = async date => {
    const { data } = await api.getMostStarredRepos(date)
    setRepos(data)
  }

  const fetchReposNextPage = async () => {
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
    } else setLoaded(true)
  }

  useEffect(() => {
    const date30DaysAgo = subDays(Date.now(), 30)
    const formattedDate = format(date30DaysAgo, 'yyyy-MM-dd')
    fetchRepos(formattedDate)
    setDate(formattedDate)
    return () => {
      setDate('')
      setRepos({})
      setCurrentPage(1)
    }
  }, [])

  return (
    <Suspense fallback={<TheLoader />}>
      <div className="home-page container mx-auto">
        <CardWrapper
          onFetchNextPage={fetchReposNextPage}
          loaded={loaded}
          items={repos.items}
        />
      </div>
    </Suspense>
  )
}
