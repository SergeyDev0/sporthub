import React from "react";
import styles from "../../styles/home.module.scss";
import { Favorite } from "@mui/icons-material";
import { HeartIcon } from "lucide-react";
import cardStyles from "./card.module.scss"

const Card = () => {
    const [isSelected, setIsSelected] = React.useState(false);
    const [isFollow, setIsFollow] = React.useState(false);
    return (
        <li className={styles.cardItem}>
            <h3 className={styles.cardTitle}>Хакатон ФСП</h3>
            <button
                className={styles.cardSelected}
                onClick={() => setIsSelected(!isSelected)}
            >
                {isSelected ? (
                    <Favorite fontSize="medium" style={{ color: "#ff4a2c" }} />
                ) : (
                    <HeartIcon fontSize="medium" style={{ color: "#ff4a2c" }} />
                )}
            </button>
            <ul className={styles.cardSpecsList}>
                <li className={styles.cardSpecsItem}>
                    Возрастная группа: от 18 лет
                </li>
                <li className={styles.cardSpecsItem}>Формат: Очно</li>
                <li className={styles.cardSpecsItem}>Вид спорта: Хакатон</li>
                <li className={styles.cardSpecsItem}>Дисциплина: </li>
                <li className={styles.cardSpecsItem}>Программа: </li>
                <li className={styles.cardSpecsItem}>
                    Место проведения: <br /> г. Ставрополь
                </li>
                <li className={styles.cardSpecsItem}>Время: 17:00 - 21:00</li>
                <li className={styles.cardSpecsItem}>Тип соревнования: </li>
                <button 
                    onClick={() => setIsFollow(!isFollow)}
                    className={`${cardStyles.button} +` 
                    + (isFollow ? 
                    ` ${cardStyles.buttonPreset}` 
                    : "")}
                >
                    Записаться
                </button>
            </ul>
        </li>
    );
};

export default Card;
