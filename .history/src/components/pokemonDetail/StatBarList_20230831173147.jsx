import React from 'react'
import { BarProgresStat } from './BarProgresStat'

const StatBarList = ({ stats }) => {
    return (
        <section>
            <h2>Stats</h2>
            <section>
                <ul>
                    {
                        stats?.map((stat) => <BarProgresStat key={stat.name} />)
                    }
                </ul>
            </section>
        </section>
    )
}

export default StatBarList
