import React from 'react'
import {Layout} from '@enonic/react-components';
import styles from './TwoColumn.module.css';


export const TwoColumnLayout = (props: any,) => {

    return (
        <>
            <Layout className={styles.row} {...props}>
            </Layout>
        </>
    );
};
