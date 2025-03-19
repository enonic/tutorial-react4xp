import React from 'react';
import styles from './FactBox.module.css';
import {MacroComponentParams} from '@enonic/react-components';


export const Factbox = ({config, children}: MacroComponentParams) => {
    // Creating an object for dangerouslySetInnerHTML
    return (
        <ins className={styles.factbox}>
            <i className={styles.icon}/>
            <strong className={styles.header}>{config.header as string}</strong>
            <div className={styles.bodyContent}> {children}</div>
        </ins>
    );
};

