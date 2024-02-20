import { MdArrowBackIos } from "react-icons/md";
import CustomButton from "../reusable-components/forms/CustomButton";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/LOGO.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Terms = () => {
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
            Términos y Condiciones
          </h1>
          <p className="mb-4">
            Bienvenido a <b className="text-[#BB7EBC]">TuneMatch</b> (en
            adelante: la Aplicación). Antes de utilizar la Aplicación, por
            favor, lee detenidamente los siguientes términos y condiciones. El
            acceso y uso de la Aplicación están sujetos a tu aceptación y
            cumplimiento de estos términos.
          </p>
          <ol className="list-decimal ml-6 mb-4">
            <li className="mb-2">
              <strong>Aceptación de los Términos:</strong> Al acceder y utilizar
              la Aplicación, aceptas cumplir con estos términos y condiciones.
              Si no estás de acuerdo con alguna parte de estos términos, por
              favor, no utilices la Aplicación.
            </li>
            <li className="mb-2">
              <strong>Edad Mínima:</strong> Para utilizar la Aplicación, debes
              ser mayor de 18 años de edad. Al acceder a la Aplicación,
              confirmas que eres mayor de 18 años y que cumples con esta
              restricción de edad.
            </li>
            <li className="mb-2">
              <strong>Geolocalización:</strong> Para utilizar plenamente el
              servicio, es necesario activar la geolocalización en tu
              dispositivo. Si no activas la geolocalización, es posible que no
              puedas acceder a todas las funciones de la Aplicación.
            </li>
            <li className="mb-2">
              <strong>Registro y Cuenta de Usuario:</strong> Deberás
              proporcionar información precisa y completa durante el proceso de
              registro. Es responsabilidad del usuario mantener la
              confidencialidad de la información de la cuenta y notificar
              cualquier uso no autorizado.
            </li>
            <li className="mb-2">
              <strong>Uso Adecuado:</strong> El uso de la Aplicación está
              destinado únicamente a la búsqueda de personas con gustos
              musicales similares. No se permite el uso de la Aplicación para
              fines ilegales o inapropiados.
            </li>
            <li className="mb-2">
              <strong>Contenido del Usuario:</strong> Al proporcionar contenido
              a la Aplicación, garantizas que tienes los derechos necesarios
              sobre dicho contenido y que no viola los derechos de terceros ni
              ninguna ley aplicable.
            </li>
            <li className="mb-2">
              <strong>Privacidad:</strong> Nuestra política de privacidad
              describe cómo recopilamos, utilizamos y compartimos la información
              proporcionada por los usuarios. Al utilizar la Aplicación, aceptas
              nuestra política de privacidad.
            </li>
            <li className="mb-2">
              <strong>Modificaciones:</strong> Nos reservamos el derecho de
              modificar o actualizar estos términos en cualquier momento. Te
              recomendamos revisar regularmente estos términos para estar
              informado sobre cualquier cambio.
            </li>
            <li className="mb-2">
              <strong>Terminación:</strong> Nos reservamos el derecho de
              suspender o terminar tu acceso a la Aplicación en caso de
              violación de estos términos o por cualquier razón a nuestra
              discreción.
            </li>
            <li className="mb-2">
              <strong>Contacto:</strong> Si tienes preguntas o inquietudes sobre
              estos términos y condiciones, contáctanos en [tu dirección de
              contacto].
            </li>
          </ol>
          <p>
            Gracias por utilizar <b className="text-[#BB7EBC]">TuneMatch</b> y
            disfrutar de la experiencia de conectar a través de la música.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
