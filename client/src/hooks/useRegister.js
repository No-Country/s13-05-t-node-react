import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  login,
  setId,
  setNombre,
  setCorreo,
  setActive,
  setUltimaPosicion,
} from "../redux/authSlice";
import useGeolocation from "../hooks/useGeolocation";

import { API_URL_REGISTER } from "../config/api";

const useRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [repeatShowPassword, setRepeatShowPassword] = useState(false);
  const { obtenerPosicion, ultimaPosicion } = useGeolocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    const { name, email, password, repeatPassword, checkbox = false } = data;
    await obtenerPosicion();

    console.log(data, ultimaPosicion);

    if (!checkbox) {
      Swal.fire({
        title: "Error",
        text: "Acepte los términos y condiciones",
        icon: "error",
        background: "#2c2c2c",
        color: "white",
      });
      return;
    }

    if (!name) {
      Swal.fire({
        title: "Error",
        text: "El nombre es necesario",
        icon: "error",
        background: "#2c2c2c",
        color: "white",
      });
      return;
    }

    if (name.length < 6) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "El nombre debe tener al menos 6 caracteres",
        background: "#2c2c2c",
        color: "white",
      });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      Swal.fire({
        title: "Error",
        text: "Ingrese una dirección de correo electrónico válida",
        icon: "error",
        background: "#2c2c2c",
        color: "white",
      });
      return;
    }

    //eslint-disable-next-line
    // const passwordRegex = /^(?=.*[A-Za-z0-9])(?=.*[.*+\/]).{6,}$/;
    // if (!password.match(passwordRegex)) {
    //     Swal.fire(
    //         "Error",
    //         "La contraseña debe contener al menos 6 dígitos y un carácter especial (., *, +)",
    //         "error"
    //      );
    //     return;
    // }

    if (!password) {
      Swal.fire({
        title: "Error",
        text: "La contraseña debe contener al menos 6 dígitos y un carácter especial (., *, +)",
        icon: "error",
        background: "#2c2c2c",
        color: "white",
      });
      return;
    }

    if (password !== repeatPassword) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden",
        icon: "error",
        background: "#2c2c2c",
        color: "white",
      });
      return;
    }

    await axios
      .post(API_URL_REGISTER, {
        nombre: name,
        correo: email,
        password,
        ultimaPosicion,
      })
      .then(async ({ data }) => {
        const { id, nombre, correo, ultimaPosicion } = data.usuario;
        console.log(data);

        if (id) {
          dispatch(login());
          dispatch(setId(id));
          dispatch(setNombre(nombre));
          dispatch(setCorreo(correo));
          dispatch(setActive(true));
          dispatch(setUltimaPosicion(ultimaPosicion));
          navigate("/register22");

          /**Disparamos alerta de registro exitoso */
          Swal.fire({
            title: "¡Bienvenido a TuneMatch!",
            color: "white",
            background: "#2c2c2c",
            icon: "success",
            text: "Completa tu registro siguiendo los pasos",
          });
        }
      })
      .catch(async (error) => {
        if (error.response.status === 400) {
          Swal.fire({
            title: "Error",
            text: "Usuario existente",
            icon: "error",
            color: "white",
            background: "#2c2c2c",
          });
          return;
        }

        Swal.fire({
          title: "Error",
          text: "Ocurrió un error durante el registro",
          icon: "error",
          color: "white",
          background: "#2c2c2c",
        });
      });
  };

  return {
    handleRegister,
    showPassword,
    setShowPassword,
    repeatShowPassword,
    setRepeatShowPassword,
  };
};

export default useRegister;
