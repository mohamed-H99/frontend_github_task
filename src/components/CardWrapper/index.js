import React from 'react'
import Card from '../Card'
import './styles.css'

export default function CardWrapper(props) {
  const { items } = props

  return (
    <section className="card-wrapper flex align-center flex-col gap-3 m-5 sm:mx-0">
      {items?.map(obj => (
        <Card key={obj.id} data={obj} />
      ))}
    </section>
  )
}
