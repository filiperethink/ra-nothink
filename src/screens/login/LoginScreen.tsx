import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    auth.signin(
      {
        name: "Filipe Prado",
        avatarUrl: "https://www.github.com/filiperethink.png",
        email: "filipe.prado@rethink.dev",
      },
      () => navigate("/dashboard", { replace: true })
    );
  };

  useEffect(() => {
    let localStorageUser = localStorage.getItem("@nothink:user");
    if (localStorageUser) {
      auth.signin(JSON.parse(localStorageUser), () => {
        navigate("/dashboard", { replace: true });
      });
    }
  }, [auth, navigate]);

  if (!auth.user) {
    return (
      <div>
        <h1>Login Screen</h1>
        <button onClick={handleLogin}>Fazer Login</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Login Screen</h1>
      <p>{auth.user?.name}</p>
    </div>
  );
};

export default LoginScreen;