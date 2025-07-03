import type {ComponentProps, LayoutData} from '@enonic/react-components';
import {Region} from '@enonic/react-components';
import React from 'react'
import styles from './TwoColumn.module.css';


export const TwoColumnLayout = ({component, meta}: ComponentProps<LayoutData>) => {

    return <div className={styles.row}>
        <Region data={component.regions.left.components} meta={meta} name="left"/>
        <Region data={component.regions.right.components} meta={meta} name="right"/>
    </div>;
};
