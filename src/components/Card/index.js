import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import './styles.css'

export default function Card(props) {
  const { data } = props

  return (
    <div className="card">
      <img
        src={data.owner.avatar_url}
        alt={data.owner.login}
        className="card-img"
      />
      <div className="card-content">
        <h3 className="card-title">{data.name}</h3>
        <p className="card-text">
          {data.description?.length > 150
            ? data.description.slice(0, 150) + '..'
            : data.description}
        </p>
        <div className="repo-info">
          <span>{`Stars: ${
            data.watchers_count > 1000
              ? `${(data.watchers_count / 1000).toFixed(1)}k`
              : data.watchers_count
          }`}</span>
          <span>{`Issues: ${
            data.open_issues_count > 1000
              ? `${(data.open_issues_count / 1000).toFixed(1)}k`
              : data.open_issues_count
          }`}</span>
          <span>{`Updated ${formatDistanceToNow(
            new Date(data.updated_at)
          )} by ${data.owner.login}`}</span>
        </div>
      </div>
    </div>
  )
}
