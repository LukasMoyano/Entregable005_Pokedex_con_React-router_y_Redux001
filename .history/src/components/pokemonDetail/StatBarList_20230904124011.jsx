import PropTypes from "prop-types";
import BarProgressStat from "./BarProgressStat"; 

const StartBarList = ({ stats }) => {
  return (
    <section className="">
      <h3 className="text-2xl">Stats</h3>
      <section>
        {stats?.map((stat) => (
          <BarProgressStat key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  );
};

StartBarList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StartBarList;
