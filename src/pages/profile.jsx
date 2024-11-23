import React from "react";
import styles from "../styles/profile.module.scss";
import Layout from "../components/layout/Layout";
import Avatar from "@mui/material/Avatar";
import globalStore from "../store/globalStore";
import { Link } from "react-router-dom";
import { Medal, Sparkle, ClipboardCheck } from "lucide-react";
import { observer } from "mobx-react-lite";
import { Close } from "@mui/icons-material";

const Profile = observer(() => {
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
                        <div className={styles.profileEventsPartic}>
                            <h3 className={styles.profileTitle}>
                                События
                            </h3>
                            <div className={styles.profileEventsItem}>
                                <div className={styles.profileEventsItemHeader}>
                                    <h4 className={styles.profileEventsTitle}>Хакатон ФСП</h4>
                                    <h4 className={styles.profileEventsTitle}><b>17:00 - 21:00</b></h4>
                                </div>
                                <div className={styles.profileEventsItemHeader}>
                                    <p className={styles.profileEventsDescription}>г. Ставрополь, ул. Ставропольская, д. 4</p>
                                    <p className={styles.profileEventsDescription}>10.12.2024&nbsp;&nbsp;-&nbsp;&nbsp;12.12.2024</p>
                                </div>
                            </div>
                            <div className={styles.profileEventsItem}>
                                <div className={styles.profileEventsItemHeader}>
                                    <h4 className={styles.profileEventsTitle}>Хакатон ФСП</h4>
                                    <h4 className={styles.profileEventsTitle}><b>17:00 - 21:00</b></h4>
                                </div>
                                <div className={styles.profileEventsItemHeader}>
                                    <p className={styles.profileEventsDescription}>г. Ставрополь, ул. Ставропольская, д. 4</p>
                                    <p className={styles.profileEventsDescription}>10.12.2024&nbsp;&nbsp;-&nbsp;&nbsp;12.12.2024</p>
                                </div>
                            </div>
                            <div className={styles.profileEventsItem}>
                                <div className={styles.profileEventsItemHeader}>
                                    <h4 className={styles.profileEventsTitle}>Хакатон ФСП</h4>
                                    <h4 className={styles.profileEventsTitle}><b>17:00 - 21:00</b></h4>
                                </div>
                                <div className={styles.profileEventsItemHeader}>
                                    <p className={styles.profileEventsDescription}>г. Ставрополь, ул. Ставропольская, д. 4</p>
                                    <p className={styles.profileEventsDescription}>10.12.2024&nbsp;&nbsp;-&nbsp;&nbsp;2024</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className={styles.profileAchievements}>
                        <div className={styles.profileAchievementsWrapper}>
                            <h3 className={styles.profileTitle}>
                                Достижения
                            </h3>
                            <div className={styles.profileAchievementsItem}>
                                <Medal className={styles.icon} size={40} />
                                <h4 className={styles.profileAchievementsTitle}>Занять 1-е место</h4>
                            </div>
                            <div className={styles.profileAchievementsItem}>
                                <ClipboardCheck
                                    className={styles.icon}
                                    size={40}
                                />
                                <h4 className={styles.profileAchievementsTitle}>Участвовать 3 раза</h4>
                            </div>
                            <div className={styles.profileAchievementsItem}>
                                <Sparkle className={styles.icon} size={40} />
                                <h4 className={styles.profileAchievementsTitle}>Записатья на событие</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.closeWrapper}>
                        <Link to="/" className={styles.close}>
                            <Close />
                        </Link>
                    </div>
                </div>
            </main>
        </Layout>
    );
});

export default Profile;
