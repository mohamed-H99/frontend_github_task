import React, { useState, useEffect, lazy } from 'react'
import TheLoader from '../TheLoader'
import './styles.css'

const Card = lazy(() => import('../Card'))

export default function CardWrapper(props) {
  const [shownCount, setShownCount] = useState(20)
  const [loading, setLoading] = useState(true)
  const shownItems = props.items?.slice(0, shownCount)

  const loadMore = () => {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.scrollingElement.scrollHeight
      ) {
        if (shownCount === props.items?.length) {
          props.onFetchNextPage()
          setShownCount(prev => prev + 20)
        } else setShownCount(prev => prev + 20)
      }
    }
  }

  useEffect(() => {
    loadMore()
    if (props.loaded) setLoading(false)
  }, [shownCount, props])

  return (
    <section className="card-wrapper flex align-center flex-col gap-3 m-5 sm:mx-0">
      {shownItems?.map(item => (
        <Card key={item.id} data={item} />
      ))}
      {loading && <TheLoader />}
    </section>
  )
}
