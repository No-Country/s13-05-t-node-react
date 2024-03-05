// import { useEffect, useState } from "react";
import { dataImg } from "../../utils/datas";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";
import { getGeneros, getBandas } from '../../redux/authSlice'
import { getGenres } from '../../redux/genresSlice'
import { getBands } from '../../redux/bandsSlice'

function ProfileContent() {
  const datos = useSelector((state) => state.auth);

  const generos = useSelector(getGeneros)
  const genres = useSelector(getGenres)
  const bandas = useSelector(getBandas)
  const bands = useSelector(getBands)
  

  // const ultimaPosicionString = datos.ultimaPosicion
  //   ? `Latitud: ${datos.ultimaPosicion.lat}, Longitud: ${datos.ultimaPosicion.lon}`
  //   : "";

  const randomGender = Math.random() < 0.5 ? "men" : "women";
  const randomIndex = Math.floor(Math.random() * 100) + 1; // Sumamos 1 para evitar 0

  const randomAvatarUrl = `https://randomuser.me/api/portraits/${randomGender}/${randomIndex}.jpg`;

  return (
    <div className="w-full h-full bg-white flex justify-center items-center">
      <ProfileCard
        img={randomAvatarUrl}
        nombre={datos.nombre}
        activo={datos.active}
        // ultimaPosicion={ultimaPosicionString}
        generos={genres?.filter(genre => generos?.includes(genre._id)).map(genre => genre.name) ?? []}
        // bandas={datos?.bandas?.map((gen) => gen.name) ?? []}
        bandas={bands?.filter(band => bandas?.includes(band._id)).map(band => band.name) ?? []}
        miGenero={datos.miGenero}
        fotos={dataImg.map((band) => band.imageLink)}
      />
    </div>
  );
}

export default ProfileContent;
