import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatBarList from "../components/pokemonDetail/StatBarList";
import { getPokemonsById } from "../services/pokemons";
import { bgStylePokemonType } from "../shared/pokemon";

const PokemonDetail = () => {
    const { poquemonId } = useParams();
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        getPokemonsById(poquemonId)
            .then((data) => setPokemonData(data))
            .catch((err) => console.log(err));
    }, [poquemonId]);

    // Función para formatear los tipos de Pokémon en una cadena legible
    const formatTypesPokemon = (types = []) => {
        return types.join(" / ");
    };

    // Renderiza el componente solo cuando los datos están disponibles
    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    return (
        <main className="flex justify-center items-center mt-[10%] md:mt-12">
            <article
                className={`w-[min(100%,_400px)] shadow-2xl mx-3 rounded-xl mb-5 ${bgStylePokemonType[pokemonData?.type[0]]}`}
            >
                <header className="">
                    <div className="flex justify-center items-center -mt-8 ">
                        <img
                            className="h-full  object-contain md:w-32 md:h-auto "
                            src={pokemonData?.image}
                            alt=""
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <span className="border-2 text-xl border-slate/25 p-1 mt-3 font-bold">
                            #{pokemonData?.id}
                        </span>
                    </div>

                    <div className="flex justify-center items-center text-2xl mt-2 mb-2 font-bold">
                        <h1 className="bg-white p-1.5 shadow-[0_3px_3px_3px_rgba(2,2,2,0.8)] rounded-full mb-4">
                            {pokemonData?.name}
                        </h1>
                    </div>

                    <div className="flex justify-evenly items-center">
                        <h6 className="flex flex-col justify-items-center items-center">
                            <span className="font-semibold bg-white p-1 shadow-[0_3px_3px_3px_rgba(2,2,2,0.8)] rounded-full mb-2">
                                weight
                            </span>
                            <span>{pokemonData?.weight}</span>
                        </h6>
                        <h6 className="flex flex-col justify-items-center items-center">
                            <span className="font-semibold bg-white p-1 shadow-[0_3px_3px_3px_rgba(2,2,2,0.8)] rounded-full mb-2">
                                height
                            </span>
                            <span>{pokemonData?.height}</span>
                        </h6>
                    </div>

                    <div className="flex justify-evenly items-center mt-2 mb-2">
                        <h4 className="mr-32 flex flex-col justify-items-center items-center">
                            <span className="font-semibold bg-white p-1 shadow-[0_3px_3px_3px_rgba(2,2,2,0.8)] rounded-full">
                                Type
                            </span>
                            <span>{formatTypesPokemon(pokemonData?.type)}</span>
                        </h4>
                        <h5 className="flex flex-col justify-items-center items-center">
                            <span className="font-semibold bg-white p-1 shadow-[0_3px_3px_3px_rgba(2,2,2,0.8)] rounded-full">
                                Skill
                            </span>
                            <span>
                                {pokemonData?.abilities[0]?.ability?.name}
                            </span>
                        </h5>
                    </div>
                </header>
                <section>
                    <StatBarList stats={pokemonData?.stat} />
                </section>
            </article>
        </main>
    );
};

export default PokemonDetail;
