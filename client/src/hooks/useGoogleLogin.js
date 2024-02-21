// import Swal from "sweetalert2";
// import { useNavigate } from 'react-router-dom';
// import {
//   authenticateUser,
//   sendToBackend,
// } from "../../auxFunctions/loginFunctions";
// import { useEffect, useState } from "react";

// const useGoogleLogin = () => {

//     const navigate = useNavigate();

//     const handleLoginSuccess = (response) => {
//     // envío la info al backend
//     sendToBackend(
//       response,
//       ultimaPosicion,
//       setEmailTuneMatch,
//       handleLoginError
//     );
//     Swal.fire({
//       title: "¿Eres mayor de  18 años?",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonText: "Sí, soy mayor",
//       cancelButtonText: "No, soy menor",
//       confirmButtonColor: "#50d45b",
//       cancelButtonColor: "#d33",
//       reverseButtons: true,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Si el usuario confirma que es mayor de  18 años, redirigimos a /home
//         Swal.fire({
//           title: "Bienvenido a TuneMatch!",
//           imageUrl:
//             "https://images.pexels.com/photos/4406761/pexels-photo-4406761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//           imageWidth: 350,
//           imageHeight: 200,
//           imageAlt: "Custom image",
//           text: "Conecta a través de la música🎷",
//         });
//         navigate("/home");
//       } else if (result.dismiss === Swal.DismissReason.cancel) {
//         // Si el usuario niega ser mayor de  18 años, muestro un aleert de disculpa
//         Swal.fire(
//           "Lo sentimos",
//           "Debes ser mayor de  18 años para ingresar.",
//           "info"
//         );
//       }
//     });
//   };

//   const handleLoginError = (error) => {
//     // manejo de errores
//     Swal.fire({
//       title: "Error de autenticación",
//       text: "Prueba ingresar un cuenta válida",
//       icon: "error",
//     });
//     console.error(error);
//   };

//   return {
//     handleLoginSuccess,
//     handleLoginError
//   }


// }

// export default useGoogleLogin