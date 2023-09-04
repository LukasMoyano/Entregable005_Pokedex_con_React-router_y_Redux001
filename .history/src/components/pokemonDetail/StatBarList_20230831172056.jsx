import React from 'react'

const StatBarList = ({stats}) => {
  return (
    <section>
      <h2>Stats</h2>
      <section>
        <ul>
          {stats.map((stat) => (
            <li key={stat.name}>{stat.name}: {stat.value}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default StatBarList
