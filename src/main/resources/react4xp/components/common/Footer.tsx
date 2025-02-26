import React from 'react';
import styles from './Footer.module.css';


export interface FooterProps {
        logoUrl: string;
}


const Footer = ({logoUrl}: FooterProps) => (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
        {`© ${new Date().getFullYear()}, Built with `}
        <a href="https://reactjs.org">React</a>
        {` and Powered by `}
        <a href="https://enonic.com">Enonic XP</a>
        </div>
            {logoUrl && (
                <div className={styles.logoContainer}>
                <img src={logoUrl}
                     width={40}
                     height={54}
                     alt="Enonic XP logo"/>
                </div>
            )}
    </footer>
);

export default Footer;