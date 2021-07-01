/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, lazy } from 'react'
import './styles.css'

const Card = lazy(() => import('../Card'))

export default function CardWrapper(props) {
  const [shownCount, setShownCount] = useState(20)
  const shownItems = props.items?.slice(0, shownCount)

  const loadMore = () => {
    window.onscroll = e => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.scrollingElement.scrollHeight
      ) {
        if (shownCount === props.items?.length) {
          props.fetchMore()
          setShownCount(prev => prev + 20)
        } else setShownCount(prev => prev + 20)
      }
    }
    return () => {}
  }

  useEffect(() => {
    loadMore()
  }, [shownCount, props])

  return (
    <section className="card-wrapper flex align-center flex-col gap-3 m-5 sm:mx-0">
      {shownItems?.map((obj, index) => (
        <Card key={obj.id} data={obj} />
      ))}
    </section>
  )
}
