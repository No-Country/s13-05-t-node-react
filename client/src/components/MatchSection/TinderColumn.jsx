// import React from "react";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import ButtonTinder from "./ButtonTinder";
import useTunematchList from "../../hooks/useTunematchList";
import useGetNombres from "../../hooks/useGetNombres";

const TinderColumn = () => {
  const [lastDirection, setLastDirection] = useState();
  const { matchList, loading, error } = useTunematchList();
  const { bandas, generos } = useGetNombres();

  const swiped = (direction, idToDelete) => {
    console.log("removing: " + idToDelete);
    console.log(direction, idToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (id) => {
    console.log(id + " left the screen!");
  };

  if (loading) return <div>Cargando...</div>;
  /**Acá voy a poner un spinner */

  if (error) return <div>Error: {error.message}</div>;
  /**Acá disparar un alert en vez de esto*/
  console.log("matchList:", matchList);

  return (
    <>
      <div className="cardContainer relative flex justify-center mt-2 m-auto">
        {matchList.length > 0 ? (
          matchList.map((match) => (
            <TinderCard
              className="swipe absolute bg-[#6C2B6D] rounded-2xl h-[80vh] w-4/5"
              key={match.id}
              onSwipe={(dir) => swiped(dir, match.id)}
              onCardLeftScreen={() => outOfFrame(match.id)}
              preventSwipe={["left", "right"]}
            >
              <div
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600)`,
                  width: "100%",
                  height: "60%",
                }}
                className="card relative  bg-center bg-cover p-5 shadow-md shadow-gray-600"
              >
                <h2 className="text-white">{match.nombre}</h2>
                <p className="text-white font-light text-xs ">{match.score}</p>
                <p className="text-white font-light text-xs ">Guitarrista</p>
                <p>{lastDirection}</p>
                <div className="absolute bottom-0 right-0 left-0 z-20">
                  <ButtonTinder />
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.0), rgba(0,0,0,0.8))`,
                  }}
                ></div>
              </div>

              <div className=" text-white p-4 flex flex-col font-light text-sm bg-[#6C2B6D] rounded-b-2xl">
                {/* Mostrar géneros si existen */}
                {match.generos && match.generos.length > 0 && (
                  <>
                    <div className="px-4 py-2 flex gap-3 capitalize">
                      {match.generos.slice(0, 3).map((generoId, index) => (
                        <span key={index}> #{generos[generoId]}</span>
                      ))}
                    </div>
                    <hr className="w-full rounded-full bg-[#FB98FD] h-[4px] border-[#FB98FD]" />
                  </>
                )}
                {/* Mostrar mensaje si no hay géneros */}
                {!match.generos ||
                  (match.generos.length === 0 && (
                    <p className="text-white font-light text-xs px-4 py-2">
                      No hay géneros disponibles
                    </p>
                  ))}
                {/* Mostrar bandas si existen */}
                {match.bandas && match.bandas.length > 0 && (
                  <div className="px-4 flex gap-3 capitalize my-4">
                    {match.bandas.slice(0, 3).map((bandaId, index) => (
                      <span key={index}> #{bandas[bandaId]}</span>
                    ))}
                  </div>
                )}
                {/* Mostrar mensaje si no hay bandas */}
                {!match.bandas ||
                  (match.bandas.length === 0 && (
                    <p className="text-white font-light text-xs px-4 py-2">
                      No hay bandas disponibles
                    </p>
                  ))}
                <hr className="w-full rounded-full bg-[#FB98FD] h-[4px] border-[#FB98FD]" />
                {/* <textarea
                  placeholder="Bio"
                  className="textarea bg-[#2C2C2C] textarea-xl w-full my-1 outline-none"
                  defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure ex"
                /> */}
              </div>
            </TinderCard>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default TinderColumn;
