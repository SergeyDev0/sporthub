import React from "react";
import InputMask from "react-input-mask";
import gif from "../assets/mail2.gif";
import styles from "../styles/formAccount.module.scss";
import { Link } from "react-router-dom";
import globalStore from "../store/globalStore";

const ConfirmAccount = () => {
    const [code, setCode] = React.useState("");

    let postConfirm = async (e) => {
        e.preventDefault();
        let data = {
            "email": globalStore.email,
            "code": code,
        };
        if (email.length > 0, code.length > 0) {
            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "http://localhost:5257/api/user/confirm/email",
                headers: {
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(data),
            };

            axios
                .request(config)
                .then((response) => {
                    
                    navigate("/");
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <form onSubmit={postConfirm}>
                    <img className={styles.icon} src={gif} alt="Иконка сообщения" />
                    <h1>Подтверждение аккаунта</h1>
                    <p className={styles.description}>Вам придёт сообщение с кодом на почту, указанную Вами</p>
                    <InputMask type="text" 
                        inputMode="numeric" 
                        className="page__form-input" 
                        placeholder="846235" 
                        mask="999999" 
                        maskChar={null} 
                        id="code" 
                        onChange={(e) => {
                            setCode(e.target.value);
                        }}
                    />
                    <Link to="/reg">Неправильный адрес почты?</Link>
                    <button className={styles.signButton} type="submit">Подтвердить</button>
                </form>
            </div>
        </main>
    );
};

export default ConfirmAccount;
