import React from "react";
import { Notifications } from "@mui/icons-material";
import { Menu, Tooltip, IconButton } from "@mui/material";
import styles from "./notification.module.scss";

const Notification = () => {
    const [notificationsEl, setNotificationsEl] = React.useState(null);
    const openNotifications = Boolean(notificationsEl);
    
    const notificationsClick = (event) => {
        setNotificationsEl(event.currentTarget);
    };
    
    const notificationsClose = () => {
        setNotificationsEl(null);
    };
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
    return (
        <div className={styles.notifications}>
            <Tooltip title="Уведомления">
                <IconButton
                    onClick={notificationsClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={
                        openNotifications ? "notifications" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={openNotifications ? "true" : undefined}
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
                <div className={styles.notificationsList}>
                    {notificationsData.length === 0 ? (
                        <p className={styles.notificationsText}>
                            К сожалению, здесь пока ничего нет
                        </p>
                    ) : (
                        notificationsData.map((item, index) => (
                            <div
                                className={styles.notificationsItem}
                                key={index}
                            >
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.text}>{item.text}</p>
                            </div>
                        ))
                    )}
                </div>
            </Menu>
        </div>
    );
};

export default Notification;
