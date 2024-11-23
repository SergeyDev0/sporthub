import React from "react";
import styles from "../styles/profile.module.scss";
import Layout from "../components/layout/Layout";
import Avatar from "@mui/material/Avatar";
import globalStore from "../store/globalStore";
import { Medal, Sparkle, ClipboardCheck } from "lucide-react";

const Profile = () => {
    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.profile}>
                    <div className={styles.profileWrapper}>
                        <div className={styles.profileCard}>
                            <Avatar
                                style={{
                                    backgroundColor:
                                    globalStore.backgroundAvatar,
                                    color: globalStore.colorAvatar,
                                    boxShadow: `0 0 2px 1px ${globalStore.colorAvatar}`,
                                }}
                                sx={{ width: 100, height: 100 }}
                            >
                                ДМ
                            </Avatar>
                            <div className={styles.profileCardText}>
                                <h2>
                                    Дмитрий Масленников
                                </h2>
                                <h4>
                                    Мужчина 25 лет, Москва
                                </h4>
                            </div>
                        </div>
                        <div className={styles.profilePreviewSubs}>
                            <h3 className={styles.profilePreviewTitle}>
                                Подписки
                            </h3>
                            <div className={styles.profilePreviewDescription}>
                                <h4>Футбол</h4>
                                <button
                                    className={styles.profilePreviewSubsBtn}
                                    //onClick={}
                                >
                                    Отписаться
                                </button>
                            </div>
                        </div>
                        <div className={styles.profilePreviewPartic}>
                            <h3 className={styles.profilePreviewTitle}>
                                Учавствует
                            </h3>
                            <div className={styles.profilePreviewDescription}>
                                <h4>Хакатон ФСП г. Ставрополь 17:00 - 21:00</h4>
                            </div>
                        </div>
                    </div>

                    <div className={styles.profilePreview}>
                        <div className={styles.profilePreviewAchievs}>
                            <h3 className={styles.profilePreviewTitle}>
                                Достижения
                            </h3>
                            {/* {[].map((item, i) => (
                                <></>
                            ))} */}
                            <div className={styles.profilePreviewDescription}>
                                <Medal className={styles.icon} size={40} />
                                <h4>Самый большой пенис</h4>
                            </div>
                            <div className={styles.profilePreviewDescription}>
                                <ClipboardCheck
                                    className={styles.icon}
                                    size={40}
                                />
                                <h4>+1 Подписчик</h4>
                            </div>
                            <div className={styles.profilePreviewDescription}>
                                <Sparkle className={styles.icon} size={40} />
                                <h4>Привет, новый мир!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Profile;
