import PropTypes from "prop-types";
import { BarProgresStat } from "./BarProgresStat";

const StatBarList = ({ stats }) => {
  return (
    <section className="mx-7 capitalize shadow-2xl mb-6">
      <h2>Stats</h2>
      <section>
        <ul>
          {stats?.map((stat) => (
            <BarProgresStat key={stat.name} stat={stat} />
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
