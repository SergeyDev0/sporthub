import React from "react";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { IconButton } from '@mui/material/IconButton';

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
