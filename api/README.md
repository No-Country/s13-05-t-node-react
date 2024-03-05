# API TuneMatch

deploy: https://tunematch.onrender.com/

### Con los nuevos Cambios ahora cada vez que un usuario se conecte en la parte de tuneMatch traería la data de cada tuneMatch que él o ella tenga

```
{
    "message": "Gracias por volver Daenerys Targaryen, Tienes un nuevo TuneMatch",
    "usuario": {
        "id": "65e227457e41a6c18814aa96",
        "ultimaPosicion": {
            "lat": null,
            "lon": null
        },
        "nombre": "Daenerys Targaryen",
        "correo": "test105@gmail.com",
        "fotos": [],
        "bandas": [],
        "generos": [],
        "enBuscaDe": [],
        "activo": true,
        "google": false,
        "tuneMatch": [
            {
                "ultimaPosicion": {
                    "lat": null,
                    "lon": null
                },
                "tuneMatchId": "65e2275b7e41a6c18814aa98",
                "nuevo": false,
                "generos": [],
                "bandas": [],
                "fotos": [],
                "enBuscaDe": [],
                "_id": "65e38b3d24584b30b6b6b71e"
            },
            {
                "ultimaPosicion": {
                    "lat": null,
                    "lon": null
                },
                "tuneMatchId": "65e26d83d19ba205c576c565",
                "nuevo": true,
                "nombre": "Marcelo",
                "generos": [
                    "65d66093b3082629abd264b5",
                    "65d66093b3082629abd264b7",
                    "65d66094b3082629abd264bb"
                ],
                "bandas": [
                    "65d659156b705ca67ab17530",
                    "65d659156b705ca67ab17538"
                ],
                "fotos": [],
                "enBuscaDe": [],
                "_id": "65e394debe1ed17a38288135"
            }
        ]
    },
    "distancia": "No tenemos tus coordenadas",
    "newTunMatchs": [
        {
            "ultimaPosicion": {
                "lat": null,
                "lon": null
            },
            "tuneMatchId": "65e26d83d19ba205c576c565",
            "nuevo": true,
            "nombre": "Marcelo",
            "generos": [
                "65d66093b3082629abd264b5",
                "65d66093b3082629abd264b7",
                "65d66094b3082629abd264bb"
            ],
            "bandas": [
                "65d659156b705ca67ab17530",
                "65d659156b705ca67ab17538"
            ],
            "fotos": [],
            "enBuscaDe": [],
            "_id": "65e394debe1ed17a38288135"
        }
    ]
}

```
En este caso se han hecho cambios para que envíe toda la data necesaria para poder renderizar a los tuneMatch directamente, 
La respuesta dependiendo como hagan la fetch (data, res, o al nombre que usen para consumir la API) 
```
data.usuario.tuneMatch

```
Esto devolverá un Array de Objetos, consideraciónes:
* el id del tuneMatch es *** tuneMatchId ***
* _id es el id del objeto, *** No de la persona ***, 


Además, si tiene tuneMatch mientras está offline, se devolverá un Array con sus nuevos tuneMatchs.

```
data.usuario.newTuneMatchs

```
Esto lo podrían ocupar en el front a través de una renderización dinámica, en caso de que venga la propiedad del objeto o no.