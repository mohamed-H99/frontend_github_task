import React from 'react'
import Card from '../Card'
import './styles.css'

export default function CardWrapper(props) {
  const { results } = props

  return (
    <section className="card-wrapper">
      {results.map(obj => (
        <Card key={obj.id} data={obj} />
      ))}
    </section>
  )
}
