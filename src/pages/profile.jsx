import React from "react";
import styles from "../styles/profile.module.scss";
import Layer from "../components/Layout/Layer";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
    return (
        <Layer>
            <main className={styles.main}>
                <div className={styles.profile}>
                    <div className={styles.profileCard}>
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
                    </div>
                    <div className={styles.profileExtra}>
                        <div className={styles.profileExtraAchievements}>
                            da
                        </div>
                        <div className={styles.profileExtraSubscriptions}>
                            ne
                        </div>
                    </div>
                </div>
            </main>
        </Layer>
    );
};

export default Profile;
