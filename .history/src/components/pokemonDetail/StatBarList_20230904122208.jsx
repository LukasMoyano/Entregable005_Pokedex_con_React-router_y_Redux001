import PropTypes from "prop-types";

import BarProgressStat from "./BarProgressStat";

const StartBarrList = ({ stats }) => {
  return (
    <section className="">
    <h3 className="">Stats</h3>
    <section>
        {
            stats?.map((stat) => <BarProgressStat key={stat.name}  stat={stat}/>)
        }
    </section>
</section>
  );
};

export default StartBarrList;