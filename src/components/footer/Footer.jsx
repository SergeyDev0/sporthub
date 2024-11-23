import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.row}>
                    <div className={styles.footerAddr}>
                        <div className={styles.footerLogo}>
                            <img src={Logo} alt="логотип" />
                        </div>
                        <h2>Связаться с нами</h2>
                        <address>                            
                            <h2>г. Ставрополь, пр. Черняховского, д. 3</h2>
                            <a
                                className={styles.footerBtn}
                                href="mailto:example@gmail.com"
                            >
                                Напишите нам
                            </a>
                        </address>
                    </div>
                    <ul className={styles.footerNav}>
                        <li className={styles.navItem}>
                            <h2 className={styles.navTitle}>Мероприятия</h2>
                            <ul className={styles.navUl}>
                                <li>
                                    <Link to="/">Ближайшие мероприятия</Link>
                                </li>
                                <li>
                                    <Link to="/">Мероприятия квартала</Link>
                                </li>
                                <li>
                                    <Link to="/">Мероприятия полугодия</Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li className={styles.navItem}>
                            <h2 className={styles.navTitle}>Юридическая информация</h2>
                            <ul className={styles.navUl}>
                                <li>
                                    <Link to="/about">О нас</Link>
                                </li>
                                <li>
                                    <Link to="/">Условия использования</Link>
                                </li>
                                <li>
                                    <Link to="/">Политика конфиденциальности</Link>
                                </li>
                            </ul>
                        </li>

                        <li className={`${styles.navItem} ${styles.navItemExtra}`}>
                            <h2 className={styles.navTitle}>Партнеры</h2>
                            <ul className={`${styles.navUl} ${styles.navUlExtra}`}>
                                <li>
                                    <Link to="https://www.minsport.gov.ru/activity/government-regulation/edinyj-kalendarnyj-plan/">Министерство спорта РФ</Link>
                                </li>                                
                                <li>
                                    <Link to="https://fsp-russia.com">ФСП России</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>                    
                </div>
                <div className={styles.legal}>
                    <p>&copy; 2024 Все права принадлежат их правообладателям.</p>
                    <p>Made with <span className={styles.heart}>♥</span> remotely from <b>Stavropol</b></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
