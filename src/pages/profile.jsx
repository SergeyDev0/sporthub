import React from "react";
import Avatar from "@mui/material/Avatar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "../styles/profile.module.scss";

const Profile = () => {
    return (
        <>
            <Header />
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
            <Footer />
        </>
    );
};

export default Profile;
