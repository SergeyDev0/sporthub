import React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid2";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import {
    Favorite,
    Home,
    Notifications,
    Person,
    Search,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import styles from "./header.module.scss";
import { observer } from "mobx-react-lite";
import globalStore from "../../store/globalStore";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { MenuIcon } from "lucide-react";

const Header = observer(() => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notificationsEl, setNotificationsEl] = React.useState(null);
    const [inputValue, setInputValue] = React.useState("");
    const [state, setState] = React.useState({ right: false });
    let { pathname } = useLocation();

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    React.useEffect(() => {
        const timer = setTimeout(() => {
            console.log(inputValue);
        }, 500);

        return () => clearTimeout(timer);
    }, [inputValue]);

    const notificationsData = [
        {
            title: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio minima at ratione doloremque vero dolorem perspiciatis ea deserunt voluptatibus, fugiat totam voluptates animi incidunt est explicabo quos. In, neque.",
        },
        {
            title: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio minima at ratione doloremque vero dolorem perspiciatis ea deserunt voluptatibus, fugiat totam voluptates animi incidunt est explicabo quos. In, neque.",
        },
        {
            title: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio minima at ratione doloremque vero dolorem perspiciatis ea deserunt voluptatibus, fugiat totam voluptates animi incidunt est explicabo quos. In, neque.",
        },
    ];

    const open = Boolean(anchorEl);
    const openNotifications = Boolean(notificationsEl);

    const notificationsClick = (event) => {
        setNotificationsEl(event.currentTarget);
    };

    const notificationsClose = () => {
        setNotificationsEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
            }}
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={styles.menuProfile}>
                <Avatar
                    style={{
                        backgroundColor: globalStore.backgroundAvatar,
                        color: globalStore.colorAvatar,
                        boxShadow: `0 0 2px 1px ${globalStore.colorAvatar}`,
                    }}
                    sx={{ width: 100, height: 100 }}
                >
                    ДМ
                </Avatar>
                <div>
                    <Link className={styles.menuLink} to="/profile">
                        <ListItemIcon>
                            <Person fontSize="small" />
                        </ListItemIcon>
                        Профиль
                    </Link>
                    <Link className={styles.menuLink} to="/settings">
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Настройки
                    </Link>
                    <Link className={styles.menuLink} to="/auth">
                        <ListItemIcon>
                            <Logout
                                fontSize="small"
                                style={{ color: "#dd0000" }}
                            />
                        </ListItemIcon>
                        Выйти
                    </Link>
                </div>
            </div>
            <Divider />
            <List>
                <Link to="/" className={styles.burgerLink}>
                    <Home fontSize="large" />
                    <h2>Главная</h2>
                </Link>
                <Link to="/selected" className={styles.burgerLink}>
                    <Favorite fontSize="large" />
                    <h2>Избранное</h2>
                </Link>
            </List>
        </Box>
    );

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <Grid
                    container
                    columns={8}
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                    <Grid size={2} display={"flex"} alignItems={"center"}>
                        <div className={styles.headerLogo}>
                            <img src={Logo} alt="Логотип" />
                        </div>
                    </Grid>
                    {(pathname === "/" || pathname === "/selected") && (
                        <Grid
                            container
                            size={"auto"}
                            gap={6}
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <div className={styles.search}>
                                <input
                                    className={`${styles.searchInput} ${styles.searchInputInBurger}`}
                                    type="text"
                                    placeholder="Найти мероприятие"
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                />
                                <Search
                                    className={styles.searchIcon}
                                    style={{ color: "black" }}
                                    fontSize="medium"
                                />
                            </div>
                        </Grid>
                    )}
                    <Grid
                        size={2}
                        gap={3}
                        display={"flex"}
                        justifyContent={"flex-end"}
                        alignItems={"center"}
                    >
                        <div className={styles.hamburger}>
                            <Button onClick={toggleDrawer("right", true)}>
                                <MenuIcon style={{ color: "white" }} />
                            </Button>
                            <Drawer
                                anchor="right"
                                open={state["right"]}
                                onClose={toggleDrawer("right", false)}
                            >
                                {list("right")}
                            </Drawer>
                        </div>

                        <div className={styles.selected}>
                            <Link to="/" className={styles.selectedLink}>
                                <Tooltip title="Домой">
                                    <IconButton size="small" sx={{ ml: 2 }}>
                                        <Home
                                            fontSize="medium"
                                            style={{ color: "#fff" }}
                                        />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </div>
                        <div className={styles.selected}>
                            <Link
                                to="/selected"
                                className={styles.selectedLink}
                            >
                                <Tooltip title="Избранное">
                                    <IconButton size="small" sx={{ ml: 2 }}>
                                        <Favorite
                                            fontSize="medium"
                                            style={{ color: "#fff" }}
                                        />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </div>
                        <div className={styles.notifications}>
                            <Tooltip title="Уведомления">
                                <IconButton
                                    onClick={notificationsClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={
                                        openNotifications
                                            ? "notifications"
                                            : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={
                                        openNotifications ? "true" : undefined
                                    }
                                >
                                    <Notifications
                                        fontSize="medium"
                                        style={{ color: "#fff" }}
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={notificationsEl}
                                id="notifications"
                                open={openNotifications}
                                onClose={notificationsClose}
                                onClick={notificationsClose}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: "visible",
                                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                            mt: 1.5,
                                            "& .MuiAvatar-root": {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            "&::before": {
                                                content: '""',
                                                display: "block",
                                                position: "absolute",
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: "background.paper",
                                                transform:
                                                    "translateY(-50%) rotate(45deg)",
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{
                                    horizontal: "right",
                                    vertical: "top",
                                }}
                                anchorOrigin={{
                                    horizontal: "right",
                                    vertical: "bottom",
                                }}
                            >
                                <div className={styles.notificationsList}>
                                    {notificationsData.length === 0 ? (
                                        <p className={styles.notificationsText}>
                                            К сожалению, здесь пока ничего нет
                                        </p>
                                    ) : (
                                        notificationsData.map((item, index) => (
                                            <div
                                                className={
                                                    styles.notificationsItem
                                                }
                                                key={index}
                                            >
                                                <h3 className={styles.title}>
                                                    {item.title}
                                                </h3>
                                                <p className={styles.text}>
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </Menu>
                        </div>
                        <div className={styles.headerAvatar}>
                            <Tooltip title="Меню">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={
                                        open ? "account-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                >
                                    <Avatar
                                        style={{
                                            backgroundColor:
                                                globalStore.backgroundAvatar,
                                            color: globalStore.colorAvatar,
                                            boxShadow: `0 0 2px 1px ${globalStore.colorAvatar}`,
                                        }}
                                        sx={{ width: 40, height: 40 }}
                                    >
                                        ДМ
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: "visible",
                                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                            mt: 1.5,
                                            "& .MuiAvatar-root": {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            "&::before": {
                                                content: '""',
                                                display: "block",
                                                position: "absolute",
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: "background.paper",
                                                transform:
                                                    "translateY(-50%) rotate(45deg)",
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{
                                    horizontal: "right",
                                    vertical: "top",
                                }}
                                anchorOrigin={{
                                    horizontal: "right",
                                    vertical: "bottom",
                                }}
                            >
                                <MenuItem
                                    onClick={handleClose}
                                    style={{ padding: 0 }}
                                >
                                    <Link
                                        className={styles.menuLink}
                                        to="/profile"
                                    >
                                        <ListItemIcon>
                                            <Person fontSize="small" />
                                        </ListItemIcon>
                                        Профиль
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    onClick={handleClose}
                                    style={{ padding: 0 }}
                                >
                                    <Link
                                        className={styles.menuLink}
                                        to="/settings"
                                    >
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Настройки
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    onClick={handleClose}
                                    style={{ color: "#dd0000", padding: 0 }}
                                >
                                    <Link
                                        className={styles.menuLink}
                                        to="/auth"
                                    >
                                        <ListItemIcon>
                                            <Logout
                                                fontSize="small"
                                                style={{ color: "#dd0000" }}
                                            />
                                        </ListItemIcon>
                                        Выйти
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </header>
    );
});

export default Header;
