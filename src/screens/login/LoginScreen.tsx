import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// Styles
import styles from "./Login.module.css";

// Components
import Intro from "./components/intro/Intro";
import Form from "./components/form/Form";

export default function LoginScreen() {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    auth.signin(
      {
        name: "Carolina Valeriano",
        avatarUrl: "https://www.github.com/carolinavaleriano.png",
        email: "carolina.valeriano@rethink.dev",
      },
      () => navigate("/dashboard", { replace: true })
    );
  };

  useEffect(() => {
    let localStorageUser = localStorage.getItem("@nothink:user");
    if (localStorageUser) {
      auth.signin(JSON.parse(localStorageUser), () =>
        navigate("/dashboard", { replace: true })
      );
    }
  }, [auth, navigate]);

  return (
    <div className={styles.login_container} >
      <Intro />
      <Form />
    </div>
  );
}
