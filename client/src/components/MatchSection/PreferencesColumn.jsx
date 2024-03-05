import CustomButton from "../reusable-components/forms/CustomButton";
import ToggleCheckBox from "./ToggleCheckBox";

const PreferencesColumn = () => {
  return (
    <div className="font-semibold text-slate-200 text-sm items-center flex flex-col gap-3 p-4 w-full h-[89.5vh]">
      <h2 className="font-bold text-base">Tipo de cuenta</h2>
      <CustomButton
        className={
          "bg-[#BB7EBC] uppercase rounded-lg flex justify-center p-2 w-full"
        }
        text={"gratuita"}
      />
      <p className="mt-8 mb-2">Ajustes de descubrimiento</p>
      <div className="bg-[#BB7EBC] flex flex-col justify-between p-4 w-full rounded-xl capitalize">
        <p>Muéstrame</p>
        <div>
          <ToggleCheckBox text={"Hombres"} />
          <ToggleCheckBox text={"Mujeres"} />
          <hr className="w-full rounded-full h-[8px] bg-white opacity-45 my-4" />
          {/**A los botones conectarlos con la funcion que manda el put de los géneros y bandas, traer los que hizo Angel en Perfil */}
          <p className="text-sm flex items-end justify-between capitalize mb-3">
            Bandas
            <CustomButton
              className="badge badge-sm bg-black text-white p-2 "
              text={"Cambiar"}
            />
          </p>
          <p className="text-sm flex items-end justify-between capitalize">
            Géneros
            <CustomButton
              className="badge badge-sm bg-black text-white p-2"
              text={"Cambiar"}
            />
          </p>
        </div>
      </div>
      <div className="flex flex-grow items-end justify-end">
        <p className="text-xs text-slate-400 font-light px-2 text-justify">
          TuneMatch usa estas preferencias para sugerir matches. Algunas
          sugerencias pueden no estar dentro de tus parámetros de preferencia
        </p>
      </div>
    </div>
  );
};

export default PreferencesColumn;
