import React from "react";
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=83d5212775e248a08eca57a30ed00644&response_type=code&redirect_uri=http://127.0.0.1:3000/callback";

export default function Login() {
  return (
    <button className="Login">
      {" "}
      <a href={AUTH_URL}> Login With Spotify </a>
    </button>
  );
}
