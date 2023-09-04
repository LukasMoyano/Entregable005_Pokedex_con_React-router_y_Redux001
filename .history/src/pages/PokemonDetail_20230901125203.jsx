import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Define la función formatStats aquí para que esté disponible en StatBarList
const formatStats = (stats) => {
  return stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat }));
};

// Define la función formatTypes aquí para que esté disponible en StatBarList
const formatTypes = (types) => {
  return types.map((type) => type.type.name);
};

export const BarProgresStat = ({ stat }) => {
  // Función getPorcentBarProgres para calcular el porcentaje de la barra de progreso
  const getPorcentBarProgres = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const porcent = (100 * statValue) / MAX_STAT_VALUE;
    return `${porcent}%`;
  };

  return (
    <article>
      <section className="flex justify-between px-2">
        <h5>{stat.name}</h5>
        <span>{stat.value}/255</span>
      </section>
      <div className="h-6 bg-ice rounded-xl mx-1 shadow-2xl">
        <div
          style={{ width: getPorcentBarProgres(stat.value) }}
          className="h-full bg-gradient-to-r from-electric/50 to-fighting/50 rounded-xl shadow-2xl"
        ></div>
      </div>
    </article>
  );
};

BarProgresStat.propTypes = {
  stat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

// Aquí comienza StatBarList
const StatBarList = ({ stats }) => {
  return (
    <section>
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
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StatBarList;

// Ahora puedes usar BarProgresStat y StatBarList en PokemonDetail
class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: null,
    };
  }

  componentDidMount() {
    const { pokemonId } = this.props.match.params;
    this.getPokemonData(pokemonId);
  }

  async getPokemonData(pokemonId) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      const data = response.data;
      const pokemon = {
        id: data.id,
        name: data.name,
        types: formatTypes(data.types),
        stats: formatStats(data.stats),
        image:
          data.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
        weight: data.weight,
        height: data.height,
      };
      this.setState({ pokemonData: pokemon });
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  }

  render() {
    const { pokemonData } = this.state;

    if (!pokemonData) {
      return <div>Loading...</div>;
    }

    return (
      <main>
        <article>
          <header>
            <div>
              <img src={pokemonData.image} alt={pokemonData.name} />
            </div>
          </header>
          <section>
            <span>#{pokemonData.id}</span>
            <StatBarList stats={pokemonData.stats} />
          </section>
        </article>
      </main>
    );
  }
}

export default PokemonDetail;
