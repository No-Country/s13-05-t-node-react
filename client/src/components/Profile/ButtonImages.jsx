// eslint-disable-next-line 
const ButtonImages = ({ url, onClick }) => {
    return (
        <button onClick={onClick}>
            <img src={url} alt="Imagen" style={{ width: '100%', height: '100%' }}
                className="card relative  bg-center bg-cover p-5 shadow-md shadow-gray-600" />
        </button>
    );


}


export default ButtonImages