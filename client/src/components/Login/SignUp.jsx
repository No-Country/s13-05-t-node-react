import LOGO from "../../assets/LOGO.png";
import REGISTER11 from "../../assets/register11.png";
import { useForm } from "react-hook-form";
import Input from "../reusable-components/forms/Input";
import InputTer from "../reusable-components/forms/inputTer";
import RegisterButton from "../reusable-components/forms/RegisterButton";
import { Eye, EyeOff } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import CustomButton from "../reusable-components/forms/CustomButton";
import { useNavigate } from "react-router-dom";
import useRegister from "../../hooks/useRegister";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import useLoginGoogle from "../../hooks/useLoginGoogle";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    handleRegister,
    showPassword,
    setShowPassword,
    repeatShowPassword,
    setRepeatShowPassword,
  } = useRegister();

  const { handleLoginSuccess, handleLoginError } = useLoginGoogle();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    handleRegister(data);
  };

  const handleLogin = () => {
    navigate("/");
  };

  const handleTerms = () => {
    navigate("/terms");
  };
  const handlePrivacy = () => {
    navigate("/privacy");
  };

  return (
    <div className=" bg-black w-screen min-h-[140vh] sm:min-h-screen flex">
      <ScrollToTop />

      <div className="relative">
        <div
          className="absolute top-0 left-0 w-0 h-0 border-solid border-transparent border-r-[35vw] border-b-[100vh] border-black bg-black z-10 "
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 95%)",
          }}
        ></div>
        <div
          className="absolute border-solid border-transparent border-l-[100vw] border-b-[100vh] border-black bg-black z-10"
          style={{
            clipPath: "polygon(100% 0, 80% 0, 100% 85%)",
          }}
        ></div>
        <nav className="relative flex items-center w-full top-0 z-20 bg-black text-white pt-2 pb-2 md:pb-0 md:pt-4 ">
          <ul className="flex mx-4 md:mx-10">
            <li>
              <img src={LOGO} alt="log" title="logo de la aplicación" />
            </li>
          </ul>
        </nav>
        <div
          className="relative  w-[100vw] h-[90vh] pt-20 sm:pt-40  text-white flex"
          style={{
            background: `url(${REGISTER11})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute z-30 md:left-0 md:-mt-8 -mt-12 left-16 md:pl-10 text-center  md:text-5xl text-2xl ">
            <p>Estás a unos pasos de ser</p>
            <p>parte de TuneMatch!</p>
          </div>
          <div className="absolute z-30 mt-8 md:pt-20 pl-10 text-base md:text-xl  ">
            <p>Ingresa tus datos en los siguientes campos y</p>
            <p>comencemos!</p>
          </div>

          <div className="absolute z-20 md:-top-3 top-44 right-3 ms:left-2 px-4 pt-2 pb-2 rounded-lg bg-gradient-to-b from-[#664c66] to-[#6d2c6c] w-90 md:w-80  ">
            <form action="onSubmit" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-center text-3xl pb-2">Crear Cuenta</h1>
              <div>
                <Input
                  labelText="Nombre"
                  type="text"
                  placeholder="Introduce tu nombre"
                  name="name"
                  register={register}
                  error={errors.name?.message}
                />
              </div>
              <div>
                <Input
                  labelText="Email"
                  type="text"
                  placeholder="email@example.com"
                  name="email"
                  register={register}
                  error={errors.email?.message}
                />
              </div>
              <div className="flex flex-col">
                <Input
                  labelText="Contraseña"
                  type={showPassword ? "text" : "password"}
                  placeholder="Introduce al menos 6 caracteres"
                  name="password"
                  register={register}
                  error={errors.password?.message}
                />
                <button
                  className="relative self-end -top-9 right-2"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
              <div className="flex flex-col -mt-6">
                <Input
                  labelText="Repetir Contraseña"
                  type={repeatShowPassword ? "text" : "password"}
                  placeholder="Introduce al menos 6 caracteres"
                  name="repeatPassword"
                  register={register}
                />
                <button
                  className="relative self-end -top-9 right-2"
                  type="button"
                  onClick={() => setRepeatShowPassword(!repeatShowPassword)}
                >
                  {repeatShowPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
              <div className="bg-[#BB7EBC] btn border-none w-full text-white rounded-3xl">
                <RegisterButton text="Registrarse" />
              </div>
              <p className="flex items-center justify-center pt-4">
                o continua con
              </p>

              <div className="flex items-center flex-col my-2 ">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onFailure={handleLoginError}
                  theme="filled_black"
                  size="medium"
                  text="signin_with"
                  shape="pill"
                />
                <div>
                  <p className="mt-3 text-sm w-full flex flex-wrap items-center justify-center ">
                    Al continuar, aceptas los
                    <CustomButton
                      onClick={handleTerms}
                      text={"Términos de uso"}
                      className="font-bold mx-1 hover:text-gray-400 transition-colors duration-300 ease-in-out"
                    />
                    y{" "}
                    <CustomButton
                      text={"Política de privacidad "}
                      onClick={handlePrivacy}
                      className="font-bold mx-1 hover:text-gray-400 transition-colors duration-300 ease-in-out"
                    />
                    de <b className="mx-1">TuneMatch </b>
                    <InputTer
                      register={register}
                      error={errors.email?.message}
                    />
                  </p>
                </div>
                <div className="flex items-center space-x-1 mt-2 text-sm">
                  <p>¿Tienes cuenta?</p>
                  <CustomButton
                    className="hover:text-gray-400"
                    onClick={handleLogin}
                    text={<b> Inicia sesion!</b>}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
