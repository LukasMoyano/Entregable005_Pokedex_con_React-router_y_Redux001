import BarProgressStat from "./BarProgressStat"; // Cambio de nombre del componente importado

const StartBarrLIst = ({ stats }) => {
  return (
    <section className="mx-7 capitalize shadow-2xl mb-6">
      <h3 className="mx-1 font-bold">Stats</h3>
      <section>
        {stats?.map((stat) => (
          <BarProgressStat key={stat.name} stat={stat} /> {/* Cambio de nombre del componente aquí */}
        ))}
      </section>
    </section>
  );
};

export default BarProgressStat;
