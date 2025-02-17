import React from 'react';
import styles from './Footer.module.css'; // Import the dark-themed CSS module

const Footer = () => (
    <footer className={styles.footer}>
        <br />
        <hr />
        <br />
        {`© ${new Date().getFullYear()}, Built with `}
        <a href="https://reactjs.org">React</a>
        {` and Powered by `}
        <a href="https://enonic.com">Enonic XP</a>
    </footer>
);

export default Footer;