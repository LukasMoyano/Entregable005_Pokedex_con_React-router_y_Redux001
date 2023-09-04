import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StartBarrLIst from "../components/pokemonDetail/StartBarrLIst";
import { getPokemonsById } from "../services/pokemons.services";
import { bgStylePokemonType } from "../shared/pokemon";

const PokemonDetail = () => {
    const [PokemonDetail, setPokemonDetail] = useState(null);

    const { poquemonId } = useParams();

    useEffect(() => {
        getPokemonsById(poquemonId)
            .then((data) => setPokemonDetail(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <main
            className=" flex justify-center items-center 
        mt-[10%] md:mt-12 "
        >
            <article
                className={`w-[min(100%,_400px)] shadow-2xl mx-3 rounded-xl mb-5 ${
                    bgStylePokemonType[PokemonDetail?.type[0]]
                }`}
            >
                <header className="">
                    <div className="flex justify-center items-center -mt-8 ">
                        <img
                            className="h-full  object-contain md:w-32 md:h-auto "
                            src={PokemonDetail?.image}
                            alt=""
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <span className="border-2 text-xl border-slate/25 p-1 mt-3 font-bold">
                            #{PokemonDetail?.id}
                        </span>
                    </div>

                    <div className="flex justify-center items-center text-2xl mt-2 mb-2 font-bold">
                        <h1 className="bg-white p-1.5 shadow-[0_3px_3px_3px_rgba(2,2,2,0.8)] rounded-full mb-4">
                            {PokemonDetail?.name}
                        </h1>
                    </div>

                    <div className="flex justify-evenly items-center">
                        <h6 className="flex flex-col justify-items-center items-center">
                            <span className="font-semibold bg-white p-1 shadow-[0_3px_3px_3px_rgba(2,2,2,0.8)] rounded-full mb-2">
                                weight
                            </span>
                            <span>{PokemonDetail?.weight}</span>
                        </h6>
                        <h6 className="flex flex-col justify-items-center items-center">
                            <span className="font-semibold bg-white p-1 shadow-[0_3px_3px_3px_rgba(2,2,2,0.8)] rounded-full mb-2">
                                height
                            </span>
                            <span>{PokemonDetail?.height}</span>
                        </h6>
                    </div>

                    <div className="flex justify-evenly items-center mt-2 mb-2">
                        <h4 className="mr-32 flex flex-col justify-items-center items-center">
                            <span className="font-semibold bg-white p-1 shadow-[0_3px_3px_3px_rgba(2,2,2,0.8)] rounded-full">
                                Type
                            </span>
                            <span>{PokemonDetail?.type}</span>
                        </h4>
                        <h5 className="flex flex-col justify-items-center items-center">
                            <span className="font-semibold bg-white p-1 shadow-[0_3px_3px_3px_rgba(2,2,2,0.8)] rounded-full">
                                Skill
                            </span>
                            <span>
                                {PokemonDetail?.abilities[0].ability["name"]}
                            </span>
                        </h5>
                    </div>
                </header>
                <section>
                    <StartBarrLIst stats={PokemonDetail?.stat} />
                </section>
            </article>
        </main>
    );
};

export default PokemonDetail;