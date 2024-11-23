import React from "react";
import InputMask from "react-input-mask";
import gif from "../assets/checklist.gif";
import arrowDown from "../assets/arrowDown.svg";
import { CITIES } from "../data/cities.data.js";
import styles from "../styles/formAccount.module.scss";

const CompleteProfile = () => {
    const [age, setAge] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [city, setCity] = React.useState("");
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <form className={styles.form}>
                    <img
                        className={styles.icon}
                        src={gif}
                        alt="Иконка заполнения профиля"
                    />
                    <h1 className={styles.completeTitle}>Заполнение профиля</h1>
                    <InputMask
                        type="text"
                        inputMode="numeric"
                        placeholder="Ваш возраст (от 14 лет)"
                        mask="99"
                        maskChar={null}
                        id="code"
                        onChange={(e) => {
                            let value = e.target.value;
                            setAge(value);
                        }}
                    />
                    <div className={styles.wrapperInput}>
                        <select
                            type="text"
                            onChange={(e) => {
                                let value = Number(e.target.value) + 1;
                                setGender(e.target.options[value].text);
                            }}
                        >
                            <option selected disabled value="0">Ваш пол</option>
                            <option value={"0"}>Мужской</option>
                            <option value={"1"}>Женский</option>
                        </select>
                        <div className={styles.inputArrow}>
                            <img src={arrowDown} />
                        </div>
                    </div>
                    <div className={styles.wrapperInput}>
                        <select
                            type="text"
                            onChange={(e) => {
                                let value = Number(e.target.value) + 1;
                                setCity(e.target.options[value].text);
                            }}
                        >
                            <option selected disabled value="0">Выберите город</option>
                            {CITIES.map((city, index) => (
                                <option value={index} key={index}>{city}</option>
                            )
                            )}

                        </select>
                        <div className={styles.inputArrow}>
                            <img src={arrowDown} />
                        </div>
                    </div>
                    <button className={`${styles.signButton} ${styles.completeButton}`} type="submit">Перейти на платформу</button>
                </form>
            </div>
        </main>
    );
};

export default CompleteProfile;
