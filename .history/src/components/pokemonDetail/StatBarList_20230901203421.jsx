import PropTypes from "prop-types";
import BarProgressStat from "./BarProgressStat"; // Corrige la ruta de importación

const StatBarList = ({ stats }) => {
  return (
    <section className="mx-7 capitalize shadow-2xl mb-6">
      <h2 className="mx-1 font-bold">Stats</h2>
      <section>
        <ul>
          {stats?.map((stat) => (
            <BarProgressStat key={stat.name} stat={stat} />
          ))}
        </ul>
      </section>
    </section>
  );
};

StatBarList.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default StatBarList;
