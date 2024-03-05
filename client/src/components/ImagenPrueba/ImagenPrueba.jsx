import { useState } from 'react'

const ImagenPrueba = () => {
    const [image, setImage] = useState(null)
    const [userId] = useState('65c6da2b67f3ab4af06f7d19')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleImageChange = e => {
        setImage(e.target.files[0])
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const formData = new FormData()
            formData.append('id', userId)
            formData.append('image', image)
            const response = await fetch('http://localhost:8080/api/usuario/imagen', {
                method: 'POST',
                body: formData
            })

            if (response.ok) {
                const data = await response.json()
                console.log('Imagen subida con éxito! :', data.url)
            } else {
                const errorData = await response.json()
                setError(errorData.message)
            }
        } catch (error) {
            console.error('Error Al subir la imagen:', error)
            setError('Ocurrió un error en el proceso.')
        } finally {
            setIsLoading(false)
        }
    }

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

export default ImagenPrueba