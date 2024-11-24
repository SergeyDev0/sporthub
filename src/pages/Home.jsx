import React from "react";
import Layout from "../components/layout/Layout";
import styles from "../styles/home.module.scss";
import Slider from "@mui/material/Slider";
import arrowDown from "../assets/arrowDown.svg";
import { Pagination } from "@mui/material";
import Card from "../components/card/Card";
import { FilterAlt } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
    const [isColumnDisplay, setIsColumnDisplay] = React.useState(true);
    const [isActiveFilterButton, setIsActiveFilterButton] = React.useState(1);
    const [quantity, setQuantity] = React.useState([1, 5000]);
    const [filter, setFilter] = React.useState({
        deadlineStart: "0001-01-01",
        deadlineEnd: "9999-12-31",
        countPeopleMin: 1,
        countPeopleMax: 5000,
        typeSport: "",
        country: "",
        place: "",
        page: 1,
        count: 24,
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAgeChange = (event, newValue) => {
        setQuantity(newValue);
        setFilter((prevState) => ({
            ...prevState,
            countPeopleMin: newValue[0],
            countPeopleMax: newValue[1],
        }));
        console.log(filter)
    };

    const contentClass = !isColumnDisplay ? styles.row : "";

    return (
        <Layout>
            <Dialog
                scroll="body"
                open={open}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <div className={styles.filterModalTitle}>
                        <h2 className={styles.filterModalSubtitle}>Фильтры</h2>
                        <Button autoFocus onClick={handleClose}>
                            <CloseIcon
                                style={{
                                    color: "#000",
                                    width: "40px",
                                    height: "40px",
                                }}
                            />
                        </Button>
                    </div>
                </DialogTitle>
                <div
                    className={`${styles.filter} ${styles.filterModal} mobile`}
                >
                    <div className={styles.filterCategory}>
                        <h3>Сроки проведения</h3>
                        <div className={styles.filterDate}>
                            <input
                                onChange={(e) => {
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineStart: e.target.value,
                                    }));
                                }}
                                type="date"
                                id="startDate"
                            />
                            <input
                                onChange={(e) => {
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineEnd: e.target.value,
                                    }));
                                }}
                                type="date"
                                id="endDate"
                            />
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <div className={styles.filterButtonContainer}>
                            <button
                                onClick={() => {
                                    setIsActiveFilterButton(1);
                                    let date = new Date();
                                    const year1 = String(date.getFullYear());
                                    const month1 = String(date.getMonth() + 1).padStart(2, '0');
                                    const day1 = String(date.getDate()).padStart(2, '0');
                                    date.setDate(date.getDate() + 7);
                                    const year = String(date.getFullYear());
                                    const month = String(date.getMonth() + 1).padStart(2, '0');
                                    const day = String(date.getDate()).padStart(2, '0');
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineStart: `${year1}-${month1}-${day1}`,
                                        deadlineEnd: `${year}-${month}-${day}`,
                                    }));
                                }}
                                className={
                                    `
                                    ${styles.filterButton} 
                                    ${styles.filterButtonPreset}` +
                                    (isActiveFilterButton === 1
                                        ? ` ${styles.active}`
                                        : "")
                                }
                            >
                                1 нед.
                            </button>
                            <button
                                onClick={() => {
                                    setIsActiveFilterButton(2);
                                    let date = new Date();
                                    const year1 = String(date.getFullYear());
                                    const month1 = String(date.getMonth() + 1).padStart(2, '0');
                                    const day1 = String(date.getDate()).padStart(2, '0');
                                    date.setMonth(date.getMonth() + 1);
                                    const year = String(date.getFullYear());
                                    const month = String(date.getMonth() + 1).padStart(2, '0');
                                    const day = String(date.getDate()).padStart(2, '0');
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineStart: `${year1}-${month1}-${day1}`,
                                        deadlineEnd: `${year}-${month}-${day}`,
                                    }));
                                }}
                                className={
                                    `
                                    ${styles.filterButton} 
                                    ${styles.filterButtonPreset}` +
                                    (isActiveFilterButton === 2
                                        ? ` ${styles.active}`
                                        : "")
                                }
                            >
                                1 мес.
                            </button>
                            <button
                                onClick={() => {
                                    setIsActiveFilterButton(3);
                                    let date = new Date();
                                    const year1 = String(date.getFullYear());
                                    const month1 = String(date.getMonth() + 1).padStart(2, '0');
                                    const day1 = String(date.getDate()).padStart(2, '0');
                                    date.setMonth(date.getMonth() + 3);
                                    const year = String(date.getFullYear());
                                    const month = String(date.getMonth() + 1).padStart(2, '0');
                                    const day = String(date.getDate()).padStart(2, '0');
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineStart: `${year1}-${month1}-${day1}`,
                                        deadlineEnd: `${year}-${month}-${day}`,
                                    }));
                                }}
                                className={
                                    `
                                    ${styles.filterButton} 
                                    ${styles.filterButtonPreset}` +
                                    (isActiveFilterButton === 3
                                        ? ` ${styles.active}`
                                        : "")
                                }
                            >
                                3 мес.
                            </button>
                            <button
                                onClick={() => {
                                    setIsActiveFilterButton(4);
                                    let date = new Date();
                                    const year1 = String(date.getFullYear());
                                    const month1 = String(date.getMonth() + 1).padStart(2, '0');
                                    const day1 = String(date.getDate()).padStart(2, '0');
                                    date.setMonth(date.getMonth() + 6);
                                    const year = String(date.getFullYear());
                                    const month = String(date.getMonth() + 1).padStart(2, '0');
                                    const day = String(date.getDate()).padStart(2, '0');
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineStart: `${year1}-${month1}-${day1}`,
                                        deadlineEnd: `${year}-${month}-${day}`,
                                    }));
                                }}
                                className={
                                    `
                                    ${styles.filterButton} 
                                    ${styles.filterButtonPreset}` +
                                    (isActiveFilterButton === 4
                                        ? ` ${styles.active}`
                                        : "")
                                }
                            >
                                6 мес.
                            </button>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Дисциплина</h3>
                        <div className={styles.wrapperInput}>
                            <select
                                className={styles.filterSelect}
                                name="discipline"
                                defaultValue="none"
                                disabled
                            >
                                <option selected disabled value="none">Любой</option>
                            </select>
                            <div className={styles.inputArrow}>
                                <img src={arrowDown} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Вид спорта</h3>
                        <div className={styles.wrapperInput}>
                            <select
                                className={styles.filterSelect}
                                type="text"
                                name="sportType"
                                onChange={(e) => {
                                    let value = Number(e.target.value);
                                    let a = e.target.options[value].text;
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        typeSport: a,
                                    }));
                                }}
                            >
                                <option selected disabled value="0">Любой</option>
                            </select>
                            <div className={styles.inputArrow}>
                                <img src={arrowDown} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Программа</h3>
                        <div className={styles.wrapperInput}>
                            <select
                                className={styles.filterSelect}
                                name="programm"
                                defaultValue="none"
                                disabled
                            >
                                <option value="none">Любой</option>
                            </select>
                            <div className={styles.inputArrow}>
                                <img src={arrowDown} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Место проведения</h3>
                        <div className={styles.wrapperInput}>
                            <select
                                className={styles.filterSelect}
                                name="placing"
                                defaultValue="none"
                                onChange={(e) => {
                                    let value = Number(e.target.value);
                                    let a = e.target.options[value].text;
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        place: a,
                                    }));
                                }}
                            >
                                <option value="0">Любой</option>
                                <option value="1"></option>
                                <option value="2"></option>
                            </select>
                            <div className={styles.inputArrow}>
                                <img src={arrowDown} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Количество участников</h3>
                        <Slider
                            value={quantity}
                            onChange={handleAgeChange}
                            valueLabelDisplay="auto"
                            min={1}
                            max={5000}
                            style={{ color: "#ff4a2c" }}
                        />
                    </div>

                    <div className={styles.filterCategory}>
                        <div>
                            <h3>Пол</h3>
                            <div className={styles.radio}>
                                <input
                                    defaultChecked
                                    type="radio"
                                    name="gender"
                                    id="other"
                                    disabled
                                />
                                <label htmlFor="other">Любой</label>
                            </div>
                            <div className={styles.radio}>
                                <input
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    disabled
                                />
                                <label htmlFor="female">Мужчина</label>
                            </div>
                            <div className={styles.radio}>
                                <input
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    disabled
                                />
                                <label htmlFor="male">Женщина</label>
                            </div>
                        </div>
                        <div className={styles.filterCategory}>
                            <h3>Возрастная группа</h3>
                            <div className={styles.wrapperInput}>
                                <select
                                    className={styles.filterSelect}
                                    name="age"
                                    defaultValue="none"
                                    disabled
                                >
                                    <option disabled selected value="none">
                                        Любой
                                    </option>
                                    <option value="option1">До 14 лет</option>
                                    <option value="option1">14-16 лет</option>
                                    <option value="option2">16-18 лет</option>
                                    <option value="option2">От 18 лет</option>
                                </select>
                                <div className={styles.inputArrow}>
                                    <img src={arrowDown} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Тип соревнования</h3>
                        <div className={styles.wrapperInput}>
                            <select
                                className={styles.filterSelect}
                                name="competitionType"
                                defaultValue="none"
                                disabled
                            >
                                <option value="none">Любой</option>
                            </select>
                            <div className={styles.inputArrow}>
                                <img src={arrowDown} />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.filterButtonContainer} ${styles.modalGroupBtns}`}
                    >
                        <button className={styles.filterButton}>
                            Сохранить
                        </button>
                        <button
                            className={`${styles.filterButton} ${styles.filterReset}`}
                        >
                            Cбросить
                        </button>
                    </div>
                </div>
            </Dialog>
            <main className={styles.main}>
            <div
                    className={`${styles.filter}`}
                >
                    <div className={styles.filterCategory}>
                        <h3>Сроки проведения</h3>
                        <div className={styles.filterDate}>
                            <input
                                onChange={(e) => {
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineStart: e.target.value,
                                    }));
                                }}
                                type="date"
                                id="startDate"
                            />
                            <input
                                onChange={(e) => {
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineEnd: e.target.value,
                                    }));
                                }}
                                type="date"
                                id="endDate"
                            />
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <div className={styles.filterButtonContainer}>
                            <button
                                onClick={() => {
                                    setIsActiveFilterButton(1);
                                    let date = new Date();
                                    const year1 = String(date.getFullYear());
                                    const month1 = String(date.getMonth() + 1).padStart(2, '0');
                                    const day1 = String(date.getDate()).padStart(2, '0');
                                    date.setDate(date.getDate() + 7);
                                    const year = String(date.getFullYear());
                                    const month = String(date.getMonth() + 1).padStart(2, '0');
                                    const day = String(date.getDate()).padStart(2, '0');
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineStart: `${year1}-${month1}-${day1}`,
                                        deadlineEnd: `${year}-${month}-${day}`,
                                    }));
                                }}
                                className={
                                    `
                                    ${styles.filterButton} 
                                    ${styles.filterButtonPreset}` +
                                    (isActiveFilterButton === 1
                                        ? ` ${styles.active}`
                                        : "")
                                }
                            >
                                1 нед.
                            </button>
                            <button
                                onClick={() => {
                                    setIsActiveFilterButton(2);
                                    let date = new Date();
                                    const year1 = String(date.getFullYear());
                                    const month1 = String(date.getMonth() + 1).padStart(2, '0');
                                    const day1 = String(date.getDate()).padStart(2, '0');
                                    date.setMonth(date.getMonth() + 1);
                                    const year = String(date.getFullYear());
                                    const month = String(date.getMonth() + 1).padStart(2, '0');
                                    const day = String(date.getDate()).padStart(2, '0');
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineStart: `${year1}-${month1}-${day1}`,
                                        deadlineEnd: `${year}-${month}-${day}`,
                                    }));
                                }}
                                className={
                                    `
                                    ${styles.filterButton} 
                                    ${styles.filterButtonPreset}` +
                                    (isActiveFilterButton === 2
                                        ? ` ${styles.active}`
                                        : "")
                                }
                            >
                                1 мес.
                            </button>
                            <button
                                onClick={() => {
                                    setIsActiveFilterButton(3);
                                    let date = new Date();
                                    const year1 = String(date.getFullYear());
                                    const month1 = String(date.getMonth() + 1).padStart(2, '0');
                                    const day1 = String(date.getDate()).padStart(2, '0');
                                    date.setMonth(date.getMonth() + 3);
                                    const year = String(date.getFullYear());
                                    const month = String(date.getMonth() + 1).padStart(2, '0');
                                    const day = String(date.getDate()).padStart(2, '0');
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineStart: `${year1}-${month1}-${day1}`,
                                        deadlineEnd: `${year}-${month}-${day}`,
                                    }));
                                }}
                                className={
                                    `
                                    ${styles.filterButton} 
                                    ${styles.filterButtonPreset}` +
                                    (isActiveFilterButton === 3
                                        ? ` ${styles.active}`
                                        : "")
                                }
                            >
                                3 мес.
                            </button>
                            <button
                                onClick={() => {
                                    setIsActiveFilterButton(4);
                                    let date = new Date();
                                    const year1 = String(date.getFullYear());
                                    const month1 = String(date.getMonth() + 1).padStart(2, '0');
                                    const day1 = String(date.getDate()).padStart(2, '0');
                                    date.setMonth(date.getMonth() + 6);
                                    const year = String(date.getFullYear());
                                    const month = String(date.getMonth() + 1).padStart(2, '0');
                                    const day = String(date.getDate()).padStart(2, '0');
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        deadlineStart: `${year1}-${month1}-${day1}`,
                                        deadlineEnd: `${year}-${month}-${day}`,
                                    }));
                                }}
                                className={
                                    `
                                    ${styles.filterButton} 
                                    ${styles.filterButtonPreset}` +
                                    (isActiveFilterButton === 4
                                        ? ` ${styles.active}`
                                        : "")
                                }
                            >
                                6 мес.
                            </button>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Дисциплина</h3>
                        <div className={styles.wrapperInput}>
                            <select
                                className={styles.filterSelect}
                                name="discipline"
                                defaultValue="none"
                                disabled
                            >
                                <option selected disabled value="none">Любой</option>
                            </select>
                            <div className={styles.inputArrow}>
                                <img src={arrowDown} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Вид спорта</h3>
                        <div className={styles.wrapperInput}>
                            <select
                                className={styles.filterSelect}
                                type="text"
                                name="sportType"
                                onChange={(e) => {
                                    let value = Number(e.target.value);
                                    let a = e.target.options[value].text;
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        typeSport: a,
                                    }));
                                }}
                            >
                                <option selected disabled value="0">Любой</option>
                            </select>
                            <div className={styles.inputArrow}>
                                <img src={arrowDown} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Программа</h3>
                        <div className={styles.wrapperInput}>
                            <select
                                className={styles.filterSelect}
                                name="programm"
                                defaultValue="none"
                                disabled
                            >
                                <option value="none">Любой</option>
                            </select>
                            <div className={styles.inputArrow}>
                                <img src={arrowDown} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Место проведения</h3>
                        <div className={styles.wrapperInput}>
                            <select
                                className={styles.filterSelect}
                                name="placing"
                                defaultValue="none"
                                onChange={(e) => {
                                    let value = Number(e.target.value);
                                    let a = e.target.options[value].text;
                                    setFilter((prevState) => ({
                                        ...prevState,
                                        place: a,
                                    }));
                                }}
                            >
                                <option value="0">Любой</option>
                                <option value="1"></option>
                                <option value="2"></option>
                            </select>
                            <div className={styles.inputArrow}>
                                <img src={arrowDown} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Количество участников</h3>
                        <Slider
                            value={quantity}
                            onChange={handleAgeChange}
                            valueLabelDisplay="auto"
                            min={1}
                            max={5000}
                            style={{ color: "#ff4a2c" }}
                        />
                    </div>

                    <div className={styles.filterCategory}>
                        <div>
                            <h3>Пол</h3>
                            <div className={styles.radio}>
                                <input
                                    defaultChecked
                                    type="radio"
                                    name="gender"
                                    id="other"
                                    disabled
                                />
                                <label htmlFor="other">Любой</label>
                            </div>
                            <div className={styles.radio}>
                                <input
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    disabled
                                />
                                <label htmlFor="female">Мужчина</label>
                            </div>
                            <div className={styles.radio}>
                                <input
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    disabled
                                />
                                <label htmlFor="male">Женщина</label>
                            </div>
                        </div>
                        <div className={styles.filterCategory}>
                            <h3>Возрастная группа</h3>
                            <div className={styles.wrapperInput}>
                                <select
                                    className={styles.filterSelect}
                                    name="age"
                                    defaultValue="none"
                                    disabled
                                >
                                    <option disabled selected value="none">
                                        Любой
                                    </option>
                                    <option value="option1">До 14 лет</option>
                                    <option value="option1">14-16 лет</option>
                                    <option value="option2">16-18 лет</option>
                                    <option value="option2">От 18 лет</option>
                                </select>
                                <div className={styles.inputArrow}>
                                    <img src={arrowDown} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.filterCategory}>
                        <h3>Тип соревнования</h3>
                        <div className={styles.wrapperInput}>
                            <select
                                className={styles.filterSelect}
                                name="competitionType"
                                defaultValue="none"
                                disabled
                            >
                                <option value="none">Любой</option>
                            </select>
                            <div className={styles.inputArrow}>
                                <img src={arrowDown} />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.filterButtonContainer} ${styles.modalGroupBtns}`}
                    >
                        <button className={styles.filterButton}>
                            Сохранить
                        </button>
                        <button
                            className={`${styles.filterButton} ${styles.filterReset}`}
                        >
                            Cбросить
                        </button>
                    </div>
                </div>
                <div className={`${styles.content} ${contentClass}`}>
                    {/* {[].map((item, i) => (
                        <></>
                    ))} */}
                    <div className={styles.contentHeader}>
                        <div className={styles.openFilterModal}>
                            <button
                                className={styles.contentHeaderButton}
                                onClick={handleClickOpen}
                            >
                                <FilterAlt
                                    style={{
                                        color: "#93999e",
                                        width: "30px",
                                        height: "30px",
                                    }}
                                />
                            </button>
                        </div>
                        <div className={styles.view}>
                            <button
                                className={styles.contentHeaderButton}
                                onClick={() => setIsColumnDisplay(true)}
                            >
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill={
                                            isColumnDisplay
                                                ? "#ff4a2c"
                                                : "#93999e"
                                        }
                                        d="M3.33363 13.3332C2.41697 13.3332 1.63198 13.0066 0.978658 12.3533C0.663478 12.0486 0.414062 11.6827 0.2458 11.2779C0.0775377 10.8732 -0.00600219 10.4383 0.00033539 10V3.33356C0.00033539 2.41692 0.326998 1.63195 0.978658 0.978636C1.28365 0.663495 1.64993 0.414123 2.05494 0.245875C2.45995 0.0776273 2.89511 -0.00593463 3.33363 0.000335383H10.0002C10.9169 0.000335383 11.7019 0.326991 12.3552 0.978636C13.0069 1.63195 13.3335 2.41692 13.3335 3.33356V10C13.3335 10.9166 13.0069 11.6999 12.3552 12.3533C12.0504 12.6688 11.6842 12.9185 11.2792 13.0871C10.8741 13.2556 10.4389 13.3394 10.0002 13.3332H3.33363ZM3.33363 29.9993C2.41697 29.9993 1.63198 29.6727 0.978658 29.021C0.66351 28.716 0.414132 28.3498 0.245881 27.9448C0.0776291 27.5398 -0.00593476 27.1046 0.00033539 26.6661V19.9997C0.00033539 19.083 0.326998 18.2981 0.978658 17.6447C1.28365 17.3296 1.64993 17.0802 2.05494 16.912C2.45995 16.7437 2.89511 16.6602 3.33363 16.6664H10.0002C10.9169 16.6664 11.7019 16.9931 12.3552 17.6447C13.0069 18.2981 13.3335 19.083 13.3335 19.9997V26.6661C13.3335 27.5828 13.0069 28.3661 12.3552 29.021C12.0502 29.3362 11.6839 29.5855 11.2789 29.7538C10.8739 29.922 10.4387 30.0056 10.0002 29.9993H3.33363ZM20.0001 13.3332C19.0835 13.3332 18.3001 13.0066 17.6468 12.3533C17.3312 12.0489 17.0813 11.683 16.9128 11.2783C16.7442 10.8735 16.6605 10.4384 16.6668 10V3.33356C16.6668 2.41692 16.9935 1.63195 17.6468 0.978636C17.9514 0.663463 18.3174 0.414053 18.7221 0.245795C19.1269 0.077536 19.5618 -0.00600205 20.0001 0.000335383H26.6667C27.5834 0.000335383 28.3684 0.326991 29.0217 0.978636C29.6733 1.63195 30 2.41692 30 3.33356V10C30 10.9166 29.6733 11.6999 29.0217 12.3533C28.7169 12.6688 28.3507 12.9185 27.9457 13.0871C27.5406 13.2556 27.1054 13.3394 26.6667 13.3332H20.0001ZM20.0001 29.9993C19.0835 29.9993 18.3001 29.6727 17.6468 29.021C17.3313 28.7163 17.0815 28.3501 16.913 27.945C16.7444 27.54 16.6607 27.1048 16.6668 26.6661V19.9997C16.6668 19.083 16.9935 18.2981 17.6468 17.6447C17.9514 17.3296 18.3174 17.0802 18.7221 16.9119C19.1269 16.7436 19.5618 16.6601 20.0001 16.6664H26.6667C27.5834 16.6664 28.3684 16.9931 29.0217 17.6447C29.6733 18.2981 30 19.083 30 19.9997V26.6661C30 27.5828 29.6733 28.3661 29.0217 29.021C28.7167 29.3362 28.3504 29.5855 27.9454 29.7538C27.5404 29.922 27.1052 30.0056 26.6667 29.9993H20.0001Z"
                                    />
                                </svg>
                            </button>
                            <button
                                className={styles.contentHeaderButton}
                                onClick={() => setIsColumnDisplay(false)}
                            >
                                {" "}
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill={
                                            isColumnDisplay
                                                ? "#93999e"
                                                : "#ff4a2c"
                                        }
                                        d="M3.33333 0C2.44928 0 1.60143 0.351189 0.976311 0.976311C0.351189 1.60143 0 2.44928 0 3.33333V10C0 10.8841 0.351189 11.7319 0.976311 12.357C1.60143 12.9821 2.44928 13.3333 3.33333 13.3333H26.6667C27.5507 13.3333 28.3986 12.9821 29.0237 12.357C29.6488 11.7319 30 10.8841 30 10V3.33333C30 2.44928 29.6488 1.60143 29.0237 0.976311C28.3986 0.351189 27.5507 0 26.6667 0H3.33333ZM3.33333 16.6667C2.44928 16.6667 1.60143 17.0179 0.976311 17.643C0.351189 18.2681 0 19.1159 0 20V26.6667C0 27.5507 0.351189 28.3986 0.976311 29.0237C1.60143 29.6488 2.44928 30 3.33333 30H26.6667C27.5507 30 28.3986 29.6488 29.0237 29.0237C29.6488 28.3986 30 27.5507 30 26.6667V20C30 19.1159 29.6488 18.2681 29.0237 17.643C28.3986 17.0179 27.5507 16.6667 26.6667 16.6667H3.33333Z"
                                    />{" "}
                                </svg>
                            </button>
                        </div>
                    </div>

                    <ul className={styles.cardList}>
                        {[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <Card key={item} />
                        ))}
                    </ul>
                    <div className={styles.paginationWrapper}>
                        <Pagination className={styles.pagination} count={10} />
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Home;
