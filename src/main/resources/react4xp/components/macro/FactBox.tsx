import React from 'react';
import styles from './FactBox.module.css';


export const Factbox = ({header, body, children}) => {
    // Creating an object for dangerouslySetInnerHTML
    console.log(JSON.stringify(body, null, 2)) // This will print the body content
    debugger
    return (
        <ins className={styles.factbox}>
            <i className={styles.icon}/>
            <strong className={styles.header}>{header}</strong>
            {/* Using dangerouslySetInnerHTML to render the HTML content */}
            <div className={styles.bodyContent} dangerouslySetInnerHTML={{__html: body}}/>
            <div className={styles.bodyContent}> {children}</div>
        </ins>
    );
};

