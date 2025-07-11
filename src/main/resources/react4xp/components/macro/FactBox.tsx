import {MacroComponentParams} from '@enonic/react-components';
import React from 'react';
import styles from './FactBox.module.css';


export const Factbox = ({data, children}: MacroComponentParams) => {

    return (
        <ins className={styles.factbox}>
            <i>💬</i>
            <strong className={styles.header}>{data.header ? data.header as unknown as string : "Fact Box"}</strong>
            <div className={styles.bodyContent}> {children}</div>
        </ins>
    );
};

