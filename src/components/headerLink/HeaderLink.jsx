import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./headerLink.module.scss";

const HeaderLink = ({ children, url, title, className }) => {
    return (
        <div className={`${styles.selected} ${className}`}>
            <Link to={url} className={styles.selectedLink}>
                <Tooltip title={title}>
                    <IconButton size="small" sx={{ ml: 2 }}>
                        {children}
                    </IconButton>
                </Tooltip>
            </Link>
        </div>
    );
};

export default HeaderLink;
