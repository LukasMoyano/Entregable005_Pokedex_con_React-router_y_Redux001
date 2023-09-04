import BarProgressStat from "./BarProgressStat";

const StartBarList = ({stats}) => {
  return (
    <section className="">
    <h3 className="text-2xl ">Stats</h3>
    <section>
        {
            stats?.map((stat) => {
              
            })((stat) => <BarProgressStat key={stat.name}  stat={stat}/>)
        }
    </section>
</section>
  );
};

export default StartBarList;