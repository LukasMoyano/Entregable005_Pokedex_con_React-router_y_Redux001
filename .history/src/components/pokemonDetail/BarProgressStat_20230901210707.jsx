import PropTypes from "prop-types";

const BarProgressStat = ({ stat }) => {
  const getPercentBarProgress = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const porcent = (100 * statValue) / MAX_STAT_VALUE;
    return `${porcent}%`;
  };

  return (
    <article>
      <section className={"flex justify-between px-2  "}>
        <h5>{stat.name}</h5>
        <span>{stat.value}/255</span>
      </section>
      <div className="h-6 bg-ice rounded-xl mx-1 shadow-2xl">
        <div
          style={{ width: getPercentBarProgress(stat.value) }}
          className="h-full bg-gradient-to-r from-electric/50 to-fighting/50 rounded-xl shadow-2xl "
        ></div>
      </div>
    </article>
  );
};

BarProgressStat.propTypes = {
  stat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default BarProgressStat;
