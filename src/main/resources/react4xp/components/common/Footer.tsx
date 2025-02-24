import React from 'react';
import styles from './Footer.module.css';


export interface FooterProps {
        logoUrl: string;
}


const Footer = ({logoUrl}: FooterProps) => (
    <footer className={styles.footer}>
        <br />
        <hr />
        <br />
        {`© ${new Date().getFullYear()}, Built with `}
        <a href="https://reactjs.org">React</a>
        {` and Powered by `}
        <a href="https://enonic.com">Enonic XP</a>
            {logoUrl && (
                <img src={logoUrl}
                     width={33}
                     height={40}
                     alt="Enonic XP logo"/>
            )}
    </footer>
);

export default Footer;