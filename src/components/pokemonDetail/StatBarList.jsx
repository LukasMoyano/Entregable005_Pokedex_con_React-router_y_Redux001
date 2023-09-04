import PropTypes from "prop-types";
import BarProgreceStat from "./BarProgreceStat"; // Asegúrate de corregir la ruta de importación

const StartBarrLIst = ({ stats }) => {
  return (
    <section className="mx-7 capitalize shadow-2xl mb-6">
      <h3 className="mx-1 font-bold">Stats</h3>
      <section>
        <ul>
          {stats?.map((stat) => (
            <BarProgreceStat key={stat.name} stat={stat} />
          ))}
        </ul>
      </section>
    </section>
  );
};

StartBarrLIst.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default StartBarrLIst;
