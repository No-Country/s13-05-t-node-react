import { setAboutMe } from "../redux/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
 
const useAboutMe = () => {

   const dispatch = useDispatch() 
   const navigate = useNavigate()

   let aboutMe = []

  const handleAboutClick = (about) => {
    const arrayBefore = aboutMe.length
    aboutMe = aboutMe.filter(item => item !== about)
    const arrayCurrent = aboutMe.length
    if (arrayBefore === arrayCurrent) { aboutMe = [...aboutMe, about] }
    console.log(aboutMe)
  }

  const handleHome = () => {
    dispatch(setAboutMe(aboutMe))
    navigate("/home")
  }

  return {
    handleAboutClick,
    handleHome
  }

}


export default useAboutMe