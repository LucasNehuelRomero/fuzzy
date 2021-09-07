//------------Parámetros-----------------------------------------------
const endpoint = "https://accounts.spotify.com/authorize"

const loginURL = `${endpoint}?client_id${clientID}&response_type-token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show-dialog=true`

const clientID = "f24ab3a85bb648afa08f27061f22b28e"

const redirectUri = "http://localhost:3000"

const scopes = ["user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state",]
//--------------...-------------------------------------------------------

const Login = () => {
return (
  <div className="loginContainer">
    <h1>Login</h1>
    <button className="loginButton" href={loginURL}>login with fuzzy</button>
  </div>
  )
}

export default Login;

