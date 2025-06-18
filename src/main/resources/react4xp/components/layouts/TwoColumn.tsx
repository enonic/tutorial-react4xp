import {Regions} from '@enonic/react-components';
import React from 'react'
import styles from './TwoColumn.module.css';


export const TwoColumnLayout = (props: any) => {

    return <div className={styles.row}>
        <Regions {...props}/>
    </div>;
};
