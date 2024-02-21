import { useNavigate } from "react-router-dom";
import CustomButton from "../reusable-components/forms/CustomButton";
import LOGO from "../../assets/LOGO.png";
import { MdArrowBackIos } from "react-icons/md";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Privacy = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="w-screen min-h-[140vh] sm:min-h-screen flex bg-black text-white">
      <ScrollToTop />
      <div className="container w-11/12 sm:w-4/5 mx-auto my-10 bg-[#3030303d] rounded-lg shadow-[#bb7ebc8f] shadow-inner">
        <div className="m-4">
          <img src={LOGO} alt="logo" title="logo de la aplicación" />
        </div>
        <CustomButton
          onClick={handleReturn}
          text={"volver"}
          icon={MdArrowBackIos}
          className="m-4 hover:text-[#BB7EBC] transition-colors duration-300 ease-in-out"
        />
        <div className="px-4 sm:px-8 md:px-16 text-sm pb-6">
          <h1 className="text-center text-2xl font-bold tracking-wider mb-4 text-[#BB7EBC]">
            Política de Privacidad
          </h1>
          <p className="mb-4">
            En <b className="text-[#BB7EBC]">TuneMatch</b> (en adelante: la
            Aplicación), respetamos tu privacidad y nos comprometemos a proteger
            tus datos personales. Esta Política de Privacidad describe cómo
            recopilamos, utilizamos y compartimos la información proporcionada
            por los usuarios.
          </p>
          <p className="mb-4">
            Al utilizar la Aplicación, aceptas los términos de esta Política de
            Privacidad. Si no estás de acuerdo con esta Política de Privacidad,
            por favor, no utilices la Aplicación.
          </p>
          <h3 className="text-lg font-bold mb-2">
            Información que Recopilamos
          </h3>
          <p className="mb-4">Recopilamos la siguiente información:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Información de registro proporcionada por el usuario.</li>
            <li>Información sobre tus gustos musicales.</li>
            <li>Información de geolocalización activada por el usuario.</li>
          </ul>
          <h3 className="text-lg font-bold mb-2">Uso de la Información</h3>
          <p className="mb-4">Utilizamos la información recopilada para:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Personalizar tu experiencia en la Aplicación.</li>
            <li>
              Proporcionar recomendaciones musicales basadas en tus gustos.
            </li>
            <li>Mejorar nuestros servicios y productos.</li>
          </ul>
          <h3 className="text-lg font-bold mb-2">Compartir Información</h3>
          <p className="mb-4">
            No compartimos tu información personal con terceros, excepto en los
            siguientes casos:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Con tu consentimiento explícito.</li>
            <li>
              Para cumplir con la ley o proteger nuestros derechos legales.
            </li>
          </ul>
          <p className="mb-4">
            Nos reservamos el derecho de actualizar o modificar esta Política de
            Privacidad en cualquier momento. Cualquier cambio será efectivo
            inmediatamente después de su publicación en nuestra aplicación. Se
            alentará a los usuarios a revisar esta Política de Privacidad
            regularmente para estar informados sobre cómo protegemos la
            información recopilada.
          </p>
          <p>
            Gracias por confiar en <b className="text-[#BB7EBC]">TuneMatch</b> y
            permitirnos ofrecerte una experiencia musical personalizada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
