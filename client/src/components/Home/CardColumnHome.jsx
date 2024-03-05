import PropTypes from "prop-types";
import bgprofile from "../../assets/bgprofile.png";

const CardColumnHome = (props) => {
  const { profilePhoto, nombre, nombreParaUser, eventos, handleClick } = props;
  return (
    <div className="flex flex-col">
      <div className="w-1/2 m-auto flex items-center justify-center">
        <div className="card shadow-lg image-full shadow-gray-400">
          <figure className="card-normal">
            <img
              src={bgprofile}
              alt="foto de background"
              className="object-cover w-full"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-row space-x-8 border-b-2 border-white pb-4">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {profilePhoto ? (
                    <img alt="Perfil" src={profilePhoto} />
                  ) : (
                    <img
                      alt="Foto de perfil por defecto"
                      src="https://images.pexels.com/photos/4472043/pexels-photo-4472043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col m-auto">
                <h2 className="card-title">{nombre}</h2>
                <h3 className="lowercase">@{nombreParaUser}</h3>
              </div>
            </div>
            <div className="grid-cols-3 flex flex-row justify-evenly">
              <div className="col-span-1 flex flex-col items-center">
                <h3>15k</h3>
                <h4>Likes</h4>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <h3>15k</h3>
                <h4>Likes</h4>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <h3>15k</h3>
                <h4>Likes</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full md:w-11/12 mx-auto">
        <h2 className="mb-1 font-medium">Puede interesarte</h2>
        <div className="grid-cols-1">
          {eventos.map((evento) => (
            <div key={evento.id} className="col-span-1 mb-3">
              <div className="grid-cols-3 flex flex-row">
                <div className="col-span-1">
                  <img
                    src={evento.src}
                    alt={evento.title}
                    className="w-24 h-16 object-cover rounded-xl"
                  />
                </div>
                <div className=" col-span-1 flex flex-col m-auto px-2 items-center justify-center">
                  <h1 className="text-xs font-bold text-start">
                    {evento.title}
                  </h1>
                  <h4 className="text-xs font-extralight">{evento.city}</h4>
                </div>
                <div className=" col-span-1 flex items-center justify-center">
                  <button
                    className="btn btn-xs px-4 py-1 rounded m-auto bg-red-600 text-white"
                    onClick={() => handleClick(evento.redirect)}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CardColumnHome.propTypes = {
  profilePhoto: PropTypes.string,
  nombre: PropTypes.string,
  nombreParaUser: PropTypes.string,
  eventos: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CardColumnHome;
