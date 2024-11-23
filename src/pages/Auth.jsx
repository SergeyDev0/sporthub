import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/darkLogo.svg";
import styles from "../styles/auth.module.scss";
import globalStore from "../store/globalStore";

const Auth = () => {
    const [isSignOpen, setSignOpen] = React.useState(false);
    const [isClick, setIsClick] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [fullName, setFullName] = React.useState("");

    const isSignOpenClass = isSignOpen ? styles.rightPanelActive : "";
    const isSubmitButtonClass = isClick ? styles.wall : "";

    const navigate = useNavigate();

    let postAuth = async (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("email", email);
        data.append("password", password);

        if (email.length > 0, password.length > 0) {
            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "http://localhost:5257/api/auth/login",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };

            axios
                .request(config)
                .then((response) => {
                    authStore.getEmail(email);
                    navigate("/");
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    let postReg = async (e) => {
        e.preventDefault();
        let data = {
            "userName": fullName,
            "email": email,
            "password": password,
        };
        if (fullName.length > 0, email.length > 0, password.length > 0) {
            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "http://localhost:5257/api/user/create",
                headers: {
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(data),
            };

            axios
                .request(config)
                .then((response) => {
                    globalStore.getEmail(email);
                    navigate("/confirm-account");
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    return (
        <main className={styles.main}>
            <div
                className={`${styles.container} ${isSignOpenClass} ${isSubmitButtonClass}`}
            >
                <div
                    className={`${styles.formContainer} ${styles.signUpContainer}`}
                >
                    <form onSubmit={postReg}>
                        <img className={styles.logo} src={Logo} alt="Логотип" />
                        <h1>Регистрация</h1>
                        <input
                            type="text"
                            placeholder="Иванов Иван Иванович"
                            onChange={(e) => {
                                setFullName(e.target.value);
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Эл. почта"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Пароль"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <button
                            className={styles.signButton}
                            onClick={() => setIsClick(true)}
                            type="submit"
                        >
                            Зарегистрироваться
                        </button>
                    </form>
                </div>
                <div
                    className={`${styles.formContainer} ${styles.signInContainer}`}
                >
                    <form onSubmit={postAuth}>
                            <img className={styles.logo} src={Logo} alt="Логотип" />
                            <h1>Войти</h1>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="email"
                            placeholder="Эл. почта"
                        />
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            placeholder="Пароль"
                        />
                        <Link to="/reg">Забыли пароль?</Link>
                        <button
                            type="submit"
                            className={styles.signButton}
                            onClick={() => setIsClick(true)}
                        >
                            Войти
                        </button>
                    </form>
                </div>
                <div className={styles.overlayContainer}>
                    <div className={styles.overlay}>
                        <div
                            className={`${styles.overlayPanel} ${styles.overlayLeft}`}
                        >
                            <h1>Добро пожаловать обратно!</h1>
                            <p>
                                Чтобы оставаться на связи с нами, пожалуйста,
                                войдите в систему, указав свои личные данные
                            </p>
                            <button
                                className={styles.ghost}
                                onClick={() => setSignOpen(false)}
                            >
                                Войти
                            </button>
                        </div>
                        <div
                            className={`${styles.overlayPanel} ${styles.overlayRight}`}
                        >
                            <h1>Привет, друг!</h1>
                            <p>
                                Введите свои личные данные и начните
                                пользоваться нашей платформой
                            </p>
                            <button
                                className={styles.ghost}
                                onClick={() => setSignOpen(true)}
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Auth;