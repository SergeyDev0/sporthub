import React from "react";
import Grid from "@mui/material/Grid2";
import { Favorite, Home } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import HeaderLink from "../headerLink/HeaderLink";
import Notification from "../notification/Notification";
import HeaderMenu from "../headerMenu/HeaderMenu";
import SearchBar from "../searchBar/SearchBar";
import { observer } from "mobx-react-lite";
import styles from "./header.module.scss";

const Header = observer(() => {
    let { pathname } = useLocation();
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
                            <SearchBar />
                        </Grid>
                    )}
                    <Grid
                        size={2}
                        gap={3}
                        display={"flex"}
                        justifyContent={"flex-end"}
                        alignItems={"center"}
                    >
                        <HeaderLink 
                            className={`${styles.selected}`}
                            title="Домой"
                            url="/"
                        >
                            <Home fontSize="medium" style={{ color: "#fff" }} />
                        </HeaderLink>
                        <HeaderLink
                            className={`${styles.selected}`}
                            title="Избранное"
                            url="/selected"
                        >
                            <Favorite fontSize="medium" style={{ color: "#fff" }} />
                        </HeaderLink>
                        <Notification />
                        <HeaderMenu />
                    </Grid>
                </Grid>
            </div>
        </header>
    );
});

export default Header;