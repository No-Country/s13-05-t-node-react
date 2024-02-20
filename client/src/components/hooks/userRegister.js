import Swal from "sweetalert2";
import {useState} from "react"

const userRegister = () => {

    //eslint-disable-next-line
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = async (data) => {
        const {name, email, password } = data;

        if (!name) {
            Swal.fire("Error", "El nombre es necesario", "error");
            return
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.match(emailRegex)) {
            Swal.fire("Error", "Ingrese una dirección de correo electrónico válida", "error");
        return;
        }
        
        //eslint-disable-next-line
        const passwordRegex = /^(?=.*[A-Za-z0-9])(?=.*[.*+\/]).{8,}$/;
        if (!password.match(passwordRegex)) { 
            Swal.fire(
                "Error",
                "La contraseña debe contener al menos 8 dígitos y un carácter especial (., *, +)",
                "error"
             );
            return;
        }

        Swal.fire("Success", "Usuario registrado exitosamente", "success");
    }

    return {
        handleRegister,
        showPassword,
        setShowPassword
    }  

} 

export default userRegister