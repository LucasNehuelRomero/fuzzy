export const getTokenFromURL = () => { //Esta función, en resumen, extrae el token de la URL de Spotify
    return window.location.hash
    //retorna todo a partir de la parte con "#".
    .substring(1)
    //substring(1) extrae el primer carácter, e imprime el resto de la cadena hasta el final.
    .split("&")
    //Divide un string en un array de cadenas, en este caso, le especificamos que las separe con un "&".
    .reduceRight((initial, item) => {
        //Reduce ejecuta una función reductora sobre cada elemento del array, y lo da como un solo valor.
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    })
}

const endpoint = "https://accounts.spotify.com/authorize"

const clientID = "f24ab3a85bb648afa08f27061f22b28e"

const redirectUri = "http://localhost:3000"

const scopes = ["user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state",]

export const loginURL = `${endpoint}?client_id${clientID}&response_type-token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show-dialog=true`


