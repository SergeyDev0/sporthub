import React from "react";
import Mission1 from "../assets/mission1.jpg";
import Mission2 from "../assets/mission2.jpg";
import Mission3 from "../assets/mission3.jpg";
import { DEVS } from "../data/devs.data";
import styles from "../styles/about.module.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const About = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={`${styles.aboutSectionText} section`}>
                    <h2 className={styles.aboutTitle}>О проекте</h2>
                    <p className={styles.aboutText}>
                        <span>СпортХаб</span> – ведущая онлайн-платформа для
                        любителей спорта и активного образа жизни в России. Мы
                        предлагаем уникальный сервис, который объединяет
                        информацию о спортивных событиях со всей страны,
                        позволяя пользователям легко находить интересующие их
                        мероприятия, будь то крупные международные турниры или
                        локальные соревнования.
                    </p>
                    <p className={styles.aboutText}>
                        Основанная в 2024 году, наша платформа предоставляет не
                        просто календарь событий, но и полноценную экосистему
                        для всех, кто увлечен спортом. У нас Вы можете узнать
                        обо всех значимых чемпионатах, соревнованиях, сроках
                        проведения, количестве участников, местоположении и
                        многом другом. Удобная система фильтров позволяет
                        выбирать события по видам спорта, программам и даже
                        вашему возрасту, чтобы каждый мог найти именно то, что
                        ему интересно.
                    </p>
                    <p className={styles.aboutText}>
                        Мы стремимся сделать спорт доступным каждому,
                        предоставляя актуальную и достоверную информацию в одном
                        месте. С нами вы всегда будете в курсе самых важных
                        спортивных событий и сможете планировать свое участие
                        или посещение заранее. Станьте частью спортивного
                        сообщества вместе со <span>СпортХаб</span>!
                    </p>
                </section>
                <section className={styles.mission}>
                    <div className={styles.missionWrapper}>
                        <h2 className={styles.aboutTitle}>Миссия</h2>
                        <p className={styles.aboutText}>
                            Приносить пользу людям, помогая делать мир вокруг
                            себя лучше
                        </p>
                        <ul className={styles.missionList}>
                            <li className={styles.missionItem}>
                                <img src={Mission1} alt="Клиент" />
                                <h3>Клиентоориентированность</h3>
                                <p>
                                    Наша цель – восхищать клиента искренним
                                    сервисом
                                </p>
                            </li>
                            <li className={styles.missionItem}>
                                <img src={Mission2} alt="Команда" />
                                <h3>Команда</h3>
                                <p>
                                    Быть дружной и амбициозной командой, любящей
                                    свое дело
                                </p>
                            </li>
                            <li className={styles.missionItem}>
                                <img src={Mission3} alt="Эффективность" />
                                <h3>Эффективность</h3>
                                <p>
                                    Быть прибыльной и быстрорастущей компанией
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="section">
                    <h2 className={styles.aboutTitle}>Наша команда</h2>
                    <ul className={styles.teamList}>
                        {DEVS.map((item, index) => (
                            <li
                                className={
                                    `${styles.teamItem}` +
                                    (item.captain ? ` ${styles.captain}` : "")
                                }
                                key={index}
                            >
                                <img src={item.img} alt="Клиент" />
                                <h3>{item.name}</h3>
                                <p>{item.role}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;
