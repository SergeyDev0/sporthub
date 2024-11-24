import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import styles from "../styles/settings.module.scss";
import Tabs from "@mui/material/Tabs";
import axios from "axios";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CITIES } from "../data/cities.data.js";
import PropTypes from "prop-types";
import arrowDown from "../assets/arrowDown.svg";
import { Avatar, useColorScheme } from "@mui/material";
import { Close, Password } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { HexColorPicker } from "react-colorful";
import { observer } from "mobx-react-lite";
import globalStore from "../store/globalStore";
import { UserRoundCog, BellDot, SunMoon } from "lucide-react";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {(value === index || value === index + 3) && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const getLuminance = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};

const Settings = observer(() => {
    const [value, setValue] = useState(0);
    const [color, setColor] = useState("#fff");
    const [fullName, setFullName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [city, setCity] = React.useState("");
    const [data, setData] = React.useState({});

    const { mode, setMode } = useColorScheme();

    if (!mode) {
        return null;
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    let getDataProfile = async (e) => {
        let data = {
            jwt: globalStore.accessToken,
        };

        let config = {
            method: "post",
            url: "http://localhost:5257/api/user/profile",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(data),
        };

        axios
            .request(config)
            .then((response) => {
                setData(response);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    React.useEffect(() => {
        getDataProfile();
    }, []);

    let postDataProfile = async (e) => {
        e.preventDefault();
        let data = {
            userName: fullName,
            age: age,
            male: gender,
            city: city,
        };

        if (email.length > 0) {
            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "http://localhost:5257/api/user/update/userProfile",
                headers: {
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(data),
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

    function colorAvatar(color) {
        if (getLuminance(color) < 0.65) {
            globalStore.getColorAvatar("#fff", color);
            return "#fff";
        } else {
            globalStore.getColorAvatar("#000", color);
            return "#000";
        }
    }

    return (
        <Layout>
            <main className={styles.main}>
                <Box
                    sx={{
                        flexGrow: 1,
                        bgcolor: "transparent",
                        display: "flex",
                        flex: 1,
                    }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: "divider" }}
                        style={{ paddingTop: 40 }}
                        className={styles.menuLabels}
                    >
                        <Tab
                            label="Личные данные"
                            {...a11yProps(0)}
                            style={{
                                ...(value === 0 ? { color: "#ff4a2c" } : {}),
                            }}
                        />
                        <Tab
                            label="Уведомления"
                            {...a11yProps(1)}
                            style={{
                                ...(value === 1 ? { color: "#ff4a2c" } : {}),
                            }}
                        />
                        <Tab
                            label="Тема"
                            {...a11yProps(2)}
                            style={{
                                ...(value === 2 ? { color: "#ff4a2c" } : {}),
                            }}
                        />
                    </Tabs>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: "divider" }}
                        style={{ paddingTop: 40 }}
                        className={styles.menuIcons}
                    >
                        <Tab
                            icon={<UserRoundCog size={48} color="#ff4a2c" />}
                            {...a11yProps(0)}
                            style={{
                                ...(value === 0 ? { color: "#ff4a2c" } : {}),
                            }}
                        />
                        <Tab
                            icon={<BellDot size={48} color="#ff4a2c" />}
                            {...a11yProps(1)}
                            style={{
                                ...(value === 1 ? { color: "#ff4a2c" } : {}),
                            }}
                        />
                        <Tab
                            icon={<SunMoon size={48} color="#ff4a2c" />}
                            {...a11yProps(2)}
                            style={{
                                ...(value === 2 ? { color: "#ff4a2c" } : {}),
                            }}
                        />
                    </Tabs>
                    <TabPanel
                        value={value}
                        index={0}
                        className={styles.tabPanel}
                    >
                        <form onSubmit={postDataProfile}>
                            <div className={styles.settings}>
                                <ul>
                                    <li>
                                        <div className={styles.verticalFlex}>
                                            <Avatar
                                                className={
                                                    styles.settingsAvatar
                                                }
                                                style={{
                                                    backgroundColor: color,
                                                    color: colorAvatar(color),
                                                }}
                                                sx={{ width: 150, height: 150 }}
                                            >
                                                <p>ДМ</p>
                                            </Avatar>
                                            <HexColorPicker
                                                color={color}
                                                onChange={setColor}
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <input
                                            className={styles.settingsInput}
                                            type="text"
                                            placeholder="Иванов Иван Иванович"
                                            name="username"
                                        />
                                    </li>
                                    <li>
                                        <InputMask
                                            type="text"
                                            inputMode="numeric"
                                            placeholder="Ваш возраст"
                                            mask="99"
                                            maskChar={null}
                                            id="number"
                                            onChange={(e) => {
                                                setAge(e.target.value);
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <div className={styles.wrapperInput}>
                                            <select
                                                type="text"
                                                onChange={(e) => {
                                                    let value =
                                                        Number(e.target.value) +
                                                        1;
                                                    console.log(
                                                        e.target.options[value]
                                                            .text
                                                    );
                                                }}
                                            >
                                                <option
                                                    selected
                                                    disabled
                                                    value="0"
                                                >
                                                    Выберите город
                                                </option>
                                                {CITIES.map((city, index) => (
                                                    <option
                                                        value={index}
                                                        key={index}
                                                    >
                                                        {city}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className={styles.inputArrow}>
                                                <img src={arrowDown} />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button
                                            className={styles.settingsButton}
                                            type="submit"
                                        >
                                            Сохранить
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </TabPanel>
                    <TabPanel
                        value={value}
                        index={1}
                        className={styles.tabPanel}
                    >
                        <div className={styles.settings}>
                            <div>
                                <p>Получать уведомления от </p>
                                <div
                                    className={`${styles.wrapperInput} ${styles.wrapperInputSolo}`}
                                >
                                    <select
                                        type="text"
                                        name="notification"
                                        defaultValue="none"
                                    >
                                        <option value="all">Все</option>
                                        <option value="subs">Подписки</option>
                                        <option value="partic">
                                            Мероприятия, в которых участвую
                                        </option>
                                        <option value="none">Нет</option>
                                    </select>
                                    <div className={styles.inputArrow}>
                                        <img src={arrowDown} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel
                        value={value}
                        index={2}
                        className={styles.tabPanel}
                    >
                        <FormControl>
                            <FormLabel id="demo-theme-toggle">
                                Выберите тему
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-theme-toggle"
                                name="theme-toggle"
                                value={globalStore.themeMode}
                                onChange={(event) => {
                                    setMode(event.target.value);
                                    globalStore.getTheme(event.target.value);
                                }}
                            >
                                <FormControlLabel
                                    value="light"
                                    control={
                                        <Radio style={{ color: "#2f2f2f" }} />
                                    }
                                    label="Светлая"
                                />
                                <FormControlLabel
                                    value="dark"
                                    name="theme-toggle"
                                    control={
                                        <Radio style={{ color: "#2f2f2f" }} />
                                    }
                                    label="Темная"
                                />
                            </RadioGroup>
                        </FormControl>
                    </TabPanel>
                    <div className={styles.closeWrapper}>
                        <Link to="/" className={styles.close}>
                            <Close />
                        </Link>
                    </div>
                </Box>
            </main>
        </Layout>
    );
});

export default Settings;
