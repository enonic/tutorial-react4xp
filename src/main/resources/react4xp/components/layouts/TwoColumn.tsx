import type {ComponentProps, ProcessedLayout} from '@enonic/react-components';
import {Region} from '@enonic/react-components';
import React from 'react'
import styles from './TwoColumn.module.css';


export const TwoColumnLayout = ({component, meta}: ComponentProps) => {

    const regions = (component as ProcessedLayout).regions;

    return <div className={styles.row}>
        <Region data={regions.left.components} meta={meta} name="left"/>
        <Region data={regions.right.components} meta={meta} name="right"/>
    </div>;
};
