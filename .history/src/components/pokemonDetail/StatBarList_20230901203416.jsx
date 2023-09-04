import BarProgreceStat from "./BarProgreceStat"

const StartBarrLIst = ({stats}) => {
  return (
    <section className="mx-7 capitalize shadow-2xl mb-6">
        <h3 className="mx-1 font-bold">Stats</h3>
        <section>
            {
                stats?.map((stat) => <BarProgreceStat key={stat.name}  stat={stat}/>)
            }
        </section>
    </section>
  )
}

export default StartBarrLIst