/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, lazy } from 'react'
import TheLoader from '../TheLoader'
import './styles.css'

const Card = lazy(() => import('../Card'))

export default function CardsWrapper(props) {
  const [shownCount, setShownCount] = useState(20)
  const [loading, setLoading] = useState(true)
  const shownItems = props.repos.items?.slice(0, shownCount)

  const loadMore = () => {
    if (shownCount === props.repos.items?.length) {
      props.onFetchNextPage()
      setShownCount(prev => prev + 20)
    } else setShownCount(prev => prev + 20)
  }

  useEffect(() => {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.scrollingElement.scrollHeight
      ) {
        loadMore()
      }
    }
    if (!props.repos.incomplete_results && shownCount % 100 === 0)
      setLoading(false)
  }, [shownCount, props])

  return (
    <section className="cards-wrapper align-center">
      {shownItems?.map(item => (
        <Card key={item.id} data={item} />
      ))}
      {loading && <TheLoader />}
    </section>
  )
}
