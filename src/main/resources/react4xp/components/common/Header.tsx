import React from 'react';
import styles from './Header.module.css';



export interface HeaderProps {
    title: string;
    logoUrl: string;
}

const Header = ({ title, logoUrl }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                {title && (
                    <h1>
                        <a href="../">{title}</a>
                    </h1>
                )}
                {logoUrl && (
                    <img    src={logoUrl}
                            width={33}
                            height={40}
                            alt="Enonic XP logo"    />
                )}
            </div>
        </header>
    );
};


export default Header;
