import React from "react";
import styles from "../styles/err.module.scss";
import Layout from "./../components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
    return (
        <Layout>
            <main className={styles.main}>
                <span className={styles.errMasage}>
                    <h1>404</h1>
                    <h2>Извинните, такой страницы не существует</h2>
                    <Link to="/" className={styles.flexContainer}>
                        <h2>На главную</h2>
                        <ArrowRight size={40} color="#2f2f2f" />
                    </Link>
                </span>
            </main>
        </Layout>
    );
};

export default About;
