import useImage from "../../hooks/useImage";

    
const UploadImage = () => {

    const {
        handleSubmit,
        handleImageChange,
        error,
        isLoading,
    } = useImage()


        return (
            <form onSubmit={handleSubmit}>

                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                {
                    error &&
                    <p className="error">{error}</p>
                }
                <button
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? 'Subiendo...' : 'Subir imagen'}
                </button>
            </form>
        );
};


    
export default UploadImage