import React from "react";
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { Logout, Person } from "@mui/icons-material";
import { Info, Settings } from "lucide-react";
import globalStore from "../../store/globalStore";
import styles from "./headerMenu.module.scss";

const HeaderMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={styles.headerAvatar}>
            <Tooltip title="Меню">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                >
                    <Avatar
                        style={{
                            backgroundColor: globalStore.backgroundAvatar,
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
                                transform: "translateY(-50%) rotate(45deg)",
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
                <MenuItem onClick={handleClose} style={{ padding: 0 }}>
                    <Link className={styles.menuLink} to="/profile">
                        <ListItemIcon>
                            <Person fontSize="small" />
                        </ListItemIcon>
                        Профиль
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} style={{ padding: 0 }}>
                    <Link className={styles.menuLink} to="/settings">
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Настройки
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} style={{ padding: 0 }}>
                    <Link className={styles.menuLink} to="/about">
                        <ListItemIcon>
                            <Info fontSize="small" />
                        </ListItemIcon>
                        О платформе
                    </Link>
                </MenuItem>
                <Divider style={{ marginTop: 2, marginBottom: 2 }} />
                <MenuItem
                    onClick={handleClose}
                    style={{ color: "#dd0000", padding: 0 }}
                >
                    <Link className={styles.menuLink} to="/auth">
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
    );
};

export default HeaderMenu;
