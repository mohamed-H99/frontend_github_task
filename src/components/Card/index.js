import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import './styles.css'

export default function Card(props) {
  const { data } = props

  return (
    <div className="flex bg-gray-800 self-center flex-col w-9/12 shadow-lg hover:shadow-sm transition-shadow rounded p-3 sm:flex-row gap-3 align-center justify-start">
      <img
        src={data.owner.avatar_url}
        alt={data.owner.login}
        className="w-32 rounded shadow object-cover bg-gray-900"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-50 text-2xl">{data.name}</h3>
        <p className="text-gray-100 text-sm">
          {data.description?.length > 150
            ? data.description.slice(0, 150) + '..'
            : data.description}
        </p>
        <div className="sm:flex gap-2">
          <span className="text-white inline-block mr-2 mb-2 sm:mr-0 sm:mb-0 shadow text-sm bg-purple-700 rounded py-1 px-2">{`Stars: ${
            data.watchers_count > 1000
              ? `${(data.watchers_count / 1000).toFixed(1)}k`
              : data.watchers_count
          }`}</span>
          <span className="text-white inline-block mr-2 mb-2 sm:mr-0 sm:mb-0 shadow text-sm bg-purple-700 rounded py-1 px-2">{`Issues: ${
            data.open_issues_count > 1000
              ? `${(data.open_issues_count / 1000).toFixed(1)}k`
              : data.open_issues_count
          }`}</span>
          <span className="text-gray-100 text-sm leading-loose">{`Updated ${formatDistanceToNow(
            new Date(data.updated_at)
          )} by ${data.owner.login}`}</span>
        </div>
      </div>
    </div>
  )
}
