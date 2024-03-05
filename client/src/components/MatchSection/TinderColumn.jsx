// import React from "react";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import ButtonTinder from "./ButtonTinder";

const db = [
  {
    name: "Richard Hendricks",
    url: "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
  },
  {
    name: "Erlich Bachman",
    url: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Monica Hall",
    url: "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jared Dunn",
    url: "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const TinderColumn = () => {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    console.log(direction, nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  const music = {
    generes: ["rock", "pop", "country", "r&b", "tango"],
    artists: ["Jhony Cash", "The Eagles", "Bob Dylan"],
    ocupation: ["Guitarrista"],
    infoBio: "Buscando músicos para colaborar en una canción estilo Country!!",
  };

  console.log(
    music.generes.map((item) => {
      return item;
    })
  );

  return (
    <>
      <div className="cardContainer relative flex justify-center mt-2 m-auto">
        {characters.map((character) => (
          <TinderCard
            className="swipe absolute bg-[#6C2B6D] rounded-t-2xl h-[80vh] w-4/5"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
            preventSwipe={["left", "right"]}
          >
            <div
              style={{
                backgroundImage: "url(" + character.url + ")",
                width: "100%",
                height: "60%",
              }}
              className="card relative  bg-center bg-cover p-5 shadow-md shadow-gray-600"
            >
              <h2 className="text-white">{character.name}, 27</h2>
              <p className="text-white font-light text-xs ">
                Buenos Aires a 50km
              </p>
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
              <div className="px-4 py-2 flex gap-3 capitalize">
                {music.generes.map((item, i) => {
                  return <p key={i}>#{item}</p>;
                })}
              </div>
              <hr className="w-full rounded-full bg-[#FB98FD] h-[4px] border-[#FB98FD]" />
              <div className="px-4 flex gap-3 capitalize my-4">
                {music.artists.map((item, i) => {
                  return <p key={i}>#{item}</p>;
                })}
              </div>
              <hr className="w-full rounded-full bg-[#FB98FD] h-[4px] border-[#FB98FD]" />
              <div className="p-1 flex gap-3 capitalize">
                {music.ocupation.map((item, i) => {
                  return <p key={i}>#{item}</p>;
                })}
              </div>
              <textarea
                placeholder="Bio"
                className="textarea bg-[#2C2C2C] textarea-xl w-full my-1 outline-none"
                defaultValue={music.infoBio}
              />
            </div>
          </TinderCard>
        ))}
      </div>
    </>
  );
};

export default TinderColumn;
